/* Shared helpers for the workflow tools. Routing only: the data modules and the canonical documents stay authoritative. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export const rel = (p) => path.relative(ROOT, p).split(path.sep).join("/");
export const abs = (p) => path.resolve(ROOT, p);

/* Working data folders. All non-authoritative. Kept out of Git through .git/info/exclude (the repo has no .gitignore). */
export const WORKING_DIRS = [".ai-context/", ".ai-cache/", ".ai-output/"];
export function ensureIgnored() {
  const ex = path.join(ROOT, ".git", "info", "exclude");
  if (!fs.existsSync(ex)) return { added: [], note: "no .git/info/exclude (not a checkout?)" };
  const cur = fs.readFileSync(ex, "utf8").split("\n").map((l) => l.trim()); const added = [];
  for (const d of WORKING_DIRS) if (!cur.includes(d)) { fs.appendFileSync(ex, (fs.readFileSync(ex, "utf8").endsWith("\n") ? "" : "\n") + d + "\n"); added.push(d); }
  return { added };
}
export const git = (...args) => execFileSync("git", args, { cwd: ROOT, encoding: "utf8" });

/* Data module id -> docs/modules file. Mirror of docs/CONTEXT-MAP.md routing (a summary; the map itself is not authoritative either). */
export const MODULE_DOC = { "home-navigation": "HOME", "authentication": "AUTHENTICATION", "notifications": "NOTIFICATIONS", "rewards": "REWARDS", "membership-credit": "CREDIT", "membership-member-card": "CREDIT", "membership-points": "POINTS", "shop-ordering": "SHOP", "delivery-future": "DELIVERY-FUTURE", "legal": "LEGAL-SYSTEM", "app-foundation": "LEGAL-SYSTEM" };
export const MODULE_SOURCES = { HOME: "APP-STRUCTURE.md § 7; SCREEN-INVENTORY.md § 4.3", AUTHENTICATION: "APP-STRUCTURE.md § 6; SCREEN-INVENTORY.md § 4.2", ACCOUNT: "APP-STRUCTURE.md § 18; SCREEN-INVENTORY.md § 4.15", NOTIFICATIONS: "APP-STRUCTURE.md § 17; SCREEN-INVENTORY.md § 4.14", REWARDS: "APP-STRUCTURE.md § 14; SCREEN-INVENTORY.md § 4.10", CREDIT: "APP-STRUCTURE.md § 13.2, 13.6; SCREEN-INVENTORY.md § 4.9", POINTS: "APP-STRUCTURE.md § 13.4; SCREEN-INVENTORY.md § 4.9", SHOP: "APP-STRUCTURE.md § 8, 9, 12, 16; SCREEN-INVENTORY.md § 4.4, 4.5, 4.8, 4.13", "LEGAL-SYSTEM": "APP-STRUCTURE.md § 5, 19, 20; SCREEN-INVENTORY.md § 4.1, 4.16", "DELIVERY-FUTURE": "DESIGN-EXPLORER-IMPLEMENTATION.md § 20" };

/* Load every data module from a design-explorer directory (default: the working tree). */
export async function loadModules(base = path.join(ROOT, "design-explorer")) {
  const idx = await import(pathToFileURL(path.join(base, "data", "index.js")).href);
  return idx.modules;
}
export async function loadConfig(base = path.join(ROOT, "design-explorer")) { return import(pathToFileURL(path.join(base, "js", "config.js")).href); }

/* Flat list of Explorer entries: { key, id, module, moduleId, screen, ref: {rel path, capturePreset}, draft: {prototype, url, dir} | null }. */
export function flatten(modules) {
  const out = [];
  for (const m of modules) for (const s of m.screens) {
    const versions = s.versions || {}, r = versions.reference, d = versions.draft;
    const mob = r && r.devices && (r.devices.mobile || r.devices["iphone-16-pro-max"]);
    const image = mob && (typeof mob === "string" ? mob : mob.image);
    const protoRel = d && d.prototype ? d.prototype : null;
    out.push({ key: s.key, id: s.id, module: m, moduleId: m.id, screen: s, versions,
      refImage: image ? image.replace(/^\.\.\//, "") : null,
      draft: protoRel ? { prototype: protoRel, file: protoRel.split("?")[0], query: protoRel.includes("?") ? protoRel.slice(protoRel.indexOf("?")) : "", dir: path.dirname(protoRel.split("?")[0]) } : null });
  }
  return out;
}
/* Docs module file for an entry (Account Home lives in the home-navigation data file but has its own summary). */
export function docFor(e) { return /account-home/.test(e.key) ? "ACCOUNT" : MODULE_DOC[e.moduleId] || null; }

/* What a Draft page pulls in: shared components, ui-kit files, shared screen css, embedded Draft pages (overlay underlays). */
export function draftDeps(e) {
  if (!e.draft) return null;
  const file = abs(path.join("design-explorer", e.draft.file));
  if (!fs.existsSync(file)) return null;
  const html = fs.readFileSync(file, "utf8"), base = path.dirname(file);
  const uniq = (a) => [...new Set(a)];
  const comps = uniq([...html.matchAll(/_components\/([a-z0-9-]+)\/component\.(?:css|js)/g)].map((m) => m[1]));
  const kit = uniq([...html.matchAll(/_ui-kit\/([a-z0-9.-]+)/g)].map((m) => m[1]));
  const shared = uniq([...html.matchAll(/(?:href|src)="((?:\.\.\/)+[^"]*_shared\/[^"]+)"/g)].map((m) => rel(path.resolve(base, m[1]))));
  const embeds = uniq([...html.matchAll(/<iframe[^>]+src="([^"]+\.html[^"]*)"/g)].map((m) => rel(path.resolve(base, m[1].split("?")[0]))));
  return { file: rel(file), comps, kit, shared, embeds };
}
export function sha256(file) { return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex"); }

/* ---- affected-screen resolution (Level 1 scope) ---- */
export const PRESET_IDS = ["iphone-se", "iphone-16-pro-max", "ipad-mini", "ipad-pro-12-9"];

/* All Draft entries that render through the same prototype page (states / variants), plus Drafts that embed it (overlay underlays). */
export function withDependents(entries, seedKeys) {
  const drafts = entries.filter((e) => e.draft), byKey = new Map(drafts.map((e) => [e.key, e]));
  const depsOf = new Map(drafts.map((e) => [e.key, draftDeps(e)]));
  const out = new Set(seedKeys.filter((k) => byKey.has(k)));
  let grew = true;
  while (grew) {
    grew = false;
    const pages = new Set([...out].map((k) => byKey.get(k).draft.file));
    for (const e of drafts) {
      if (out.has(e.key)) continue;
      const d = depsOf.get(e.key);
      if (pages.has(e.draft.file) || (d && d.embeds.some((x) => [...pages].some((pg) => x.endsWith(pg.replace(/^.*prototypes\//, "prototypes/")))))) { out.add(e.key); grew = true; }
    }
  }
  return [...out];
}

/* Map changed repo paths to affected Draft entry keys, and a suggested verification level. */
export function affectedByPaths(entries, paths) {
  const drafts = entries.filter((e) => e.draft), keys = new Set(); const notes = []; let level = 1; const all = () => drafts.forEach((e) => keys.add(e.key));
  const deps = new Map(drafts.map((e) => [e.key, draftDeps(e)]));
  for (const p of paths) {
    let m;
    if (/^reference-ui\//.test(p)) { notes.push("Reference asset changed: STOP, Reference files must never change: " + p); continue; }
    if ((m = p.match(/^design-explorer\/prototypes\/_components\/([^/]+)\//))) { drafts.forEach((e) => { const d = deps.get(e.key); if (d && d.comps.includes(m[1])) keys.add(e.key); }); notes.push("component " + m[1]); continue; }
    if ((m = p.match(/^design-explorer\/prototypes\/_ui-kit\/([^/]+)/))) { drafts.forEach((e) => { const d = deps.get(e.key); if (d && d.kit.includes(m[1])) keys.add(e.key); }); level = Math.max(level, 2); notes.push("ui-kit " + m[1] + " (shared by many Drafts: consider Level 2)"); continue; }
    if (/^design-explorer\/(prototype-runtime|js)\//.test(p)) { all(); level = 3; notes.push("runtime / Explorer code: all Drafts (Level 3)"); continue; }
    if ((m = p.match(/^design-explorer\/data\/modules\/([^/]+)\.js$/))) { drafts.forEach((e) => { if (e.module && p.endsWith(e.moduleId + ".js") || p.includes("/" + e.moduleId + ".js")) keys.add(e.key); }); level = Math.max(level, 2); notes.push("data module " + m[1] + ": metadata only unless a Draft changed; module Drafts listed (Level 2)"); continue; }
    if (/^design-explorer\/data\//.test(p)) { all(); level = 3; notes.push("data helpers: all Drafts (Level 3)"); continue; }
    if ((m = p.match(/^design-explorer\/prototypes\/(.+)\/[^/]+$/))) {
      const dir = "prototypes/" + m[1]; let hit = false;
      drafts.forEach((e) => { const d = deps.get(e.key); if (e.draft.dir === dir || (d && d.shared.some((x) => p.endsWith(x.replace(/^.*prototypes\//, "prototypes/")) || x === p)) || (e.draft.file && dir.startsWith(e.draft.dir))) { keys.add(e.key); hit = true; } });
      if (!hit) drafts.forEach((e) => { const d = deps.get(e.key); if (d && d.shared.some((x) => x.includes(m[1].split("/")[0] + "/_shared"))) keys.add(e.key); });
      continue;
    }
    if (/\.md$|^docs\/|^CLAUDE\.md$/.test(p)) { notes.push("documentation only: no Draft affected (" + p + ")"); continue; }
  }
  const expanded = withDependents(entries, [...keys]);
  return { keys: expanded, level, notes };
}

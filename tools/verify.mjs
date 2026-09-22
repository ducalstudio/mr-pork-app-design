#!/usr/bin/env node
/*
 * Incremental Draft verification. Verifies only the affected Draft entries; the never-skipped checks run for every entry:
 *   - Reference unchanged (reference-ui/ clean, no versions.reference block changed vs HEAD)
 *   - correct Draft badge, state and device (Explorer level, all four presets, state preserved across device changes)
 *   - no hidden horizontal overflow at 375 / 440 / 744 / 1024 (the body overflow-x mask is disabled while measuring)
 *   - 440 x 956 Reference comparison: a composite image (Reference | Draft | difference) is written; LOOK at it. The tool cannot judge fidelity.
 * Plus: tier, console / http errors, marked temporary assets, 44px targets.
 *
 *   node tools/verify.mjs --keys k1,k2            Level 1: affected screens only
 *   node tools/verify.mjs --changed               Level 1: resolve affected screens from `git status`
 *   node tools/verify.mjs --level 2 --keys k      Level 2: every Draft of the same data module(s) (batch checkpoint)
 *   node tools/verify.mjs --level 3 [--baseline <git-ref>]   Level 3: every Draft; --baseline also pixel-diffs against that commit
 * Options: --base http://127.0.0.1:8000 (else an internal static server is started)   --skip-explorer
 * Needs playwright-core (resolved from node_modules, or PLAYWRIGHT_CORE=<dir>) and a Chromium (CHROME_PATH, or ~/.cache/ms-playwright).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import http from "node:http";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import { ROOT, abs, rel, ensureIgnored, git, loadModules, loadConfig, flatten, affectedByPaths } from "./lib/common.mjs";
import { execFileSync } from "node:child_process";

const argv = process.argv.slice(2), opt = (n) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : null; };
let level = Number(opt("--level")) || 1;
const entries = flatten(await loadModules()), drafts = entries.filter((e) => e.draft), cfg = await loadConfig();
const PRESETS = cfg.DEVICES.map((d) => ({ id: d.id, w: d.width, h: d.height, tier: d.width >= 900 ? "expanded" : d.width >= 600 ? "medium" : "compact" }));
let keys = (opt("--keys") || "").split(",").filter(Boolean);
if (argv.includes("--changed")) { const paths = git("status", "--porcelain", "-uall").split("\n").filter(Boolean).map((l) => l.slice(3).replace(/.* -> /, "")); const r = affectedByPaths(entries, paths); keys = r.keys; r.notes.forEach((n) => console.log("note: " + n)); level = Math.max(level, 1); }
if (level === 3) keys = drafts.map((e) => e.key);
else if (level === 2) { const mods = new Set(keys.map((k) => (entries.find((e) => e.key === k) || {}).moduleId)); keys = drafts.filter((e) => mods.has(e.moduleId)).map((e) => e.key); }
const targets = keys.map((k) => drafts.find((e) => e.key === k)).filter(Boolean);
if (!targets.length) { console.error("no Draft entries to verify (give --keys, --changed or --level 3)"); process.exit(2); }

/* ---- playwright + chromium + server ---- */
let pw; try { pw = await import("playwright-core"); } catch { const dir = process.env.PLAYWRIGHT_CORE; if (!dir) { console.error("playwright-core not found (set PLAYWRIGHT_CORE=<dir of the module>)"); process.exit(2); } pw = createRequire(path.join(dir, "x.js"))("playwright-core"); }
const chromium = pw.chromium || pw.default.chromium;
let chrome = process.env.CHROME_PATH; if (!chrome) { const d = path.join(os.homedir(), ".cache", "ms-playwright"); const c = fs.existsSync(d) ? fs.readdirSync(d).filter((x) => /^chromium-\d+$/.test(x)).sort().pop() : null; chrome = c ? path.join(d, c, "chrome-linux64", "chrome") : undefined; }
function serve(root) { return new Promise((res) => { const s = http.createServer((q, r) => { let p = decodeURIComponent(q.url.split("?")[0]); if (p.endsWith("/")) p += "index.html"; const f = path.join(root, p); if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end(); } const t = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".svg": "image/svg+xml", ".json": "application/json" }[path.extname(f)] || "application/octet-stream"; r.writeHead(200, { "Content-Type": t, "Cache-Control": "no-store" }); fs.createReadStream(f).pipe(r); }); s.listen(0, "127.0.0.1", () => res({ s, url: `http://127.0.0.1:${s.address().port}` })); }); }
let base = opt("--base"), own = null; if (!base) { own = await serve(ROOT); base = own.url; }
const browser = await chromium.launch({ executablePath: chrome, args: ["--no-sandbox"] });
ensureIgnored(); const OUT = path.join(ROOT, ".ai-cache", "verify"); fs.mkdirSync(OUT, { recursive: true });
const results = []; let failN = 0;
const check = (scope, name, ok, detail = "") => { results.push({ scope, name, ok, detail }); if (!ok) { failN++; console.log(`  FAIL ${scope}: ${name} ${detail}`); } };

/* ---- never skipped: Reference unchanged ---- */
{
  check("reference", "reference-ui/ has no changes", git("status", "--porcelain", "reference-ui").trim() === "");
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "mp-head-")); try { execFileSync("sh", ["-c", `git archive HEAD design-explorer | tar -x -C ${tmp}`], { cwd: ROOT }); const { loadModules: lm, flatten: fl } = await import("./lib/common.mjs"); const head = fl(await lm(path.join(tmp, "design-explorer"))); const cur = new Map(entries.map((e) => [e.key, JSON.stringify(e.versions.reference || null)])); const changed = head.filter((h) => cur.has(h.key) && cur.get(h.key) !== JSON.stringify(h.versions.reference || null)).map((h) => h.key); check("reference", "no versions.reference block changed vs HEAD", changed.length === 0, changed.join(",")); } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
}

const PROBE = () => {
  const vw = innerWidth, st = document.createElement("style"); st.textContent = "html,body{overflow-x:visible!important}"; document.head.appendChild(st);
  const de = document.documentElement, o = { tier: de.dataset.tier, state: de.dataset.state || null, docW: de.scrollWidth, bodyW: document.body.scrollWidth, off: [], small: [], unmarked: 0 };
  const inScroller = (el) => { for (let p = el.parentElement; p; p = p.parentElement) { const c = getComputedStyle(p); if (/(auto|scroll)/.test(c.overflowX) && p.scrollWidth > p.clientWidth) return true; } return false; };
  document.querySelectorAll("body *").forEach((el) => { const r = el.getBoundingClientRect(); if ((!r.width && !r.height) || el.tagName === "IFRAME") return; if ((r.right > vw + 0.5 || r.left < -0.5) && !inScroller(el)) o.off.push(el.tagName.toLowerCase() + "." + (typeof el.className === "string" ? el.className : "") + " " + Math.round(r.left) + ".." + Math.round(r.right)); });
  document.querySelectorAll("button,a[href],[role=tab],[role=button]:not([aria-disabled=true])").forEach((el) => { const r = el.getBoundingClientRect(); if (r.width && (r.width < 43.5 || r.height < 43.5)) o.small.push((el.className || el.tagName) + " " + Math.round(r.width) + "x" + Math.round(r.height)); });
  document.querySelectorAll("svg").forEach((s) => { if (!s.closest("[data-asset='temporary-placeholder']")) o.unmarked++; });
  return o;
};
const composer = await (await browser.newContext()).newPage(); await composer.goto(base + "/design-explorer/index.html");
const errsOf = (p) => { p._e = []; p.on("pageerror", (e) => p._e.push(e.message)); p.on("console", (m) => { if (m.type() === "error" && !/Failed to load resource/.test(m.text())) p._e.push(m.text()); }); p.on("response", (r) => { if (r.status() >= 400 && !/favicon/.test(r.url())) p._e.push("HTTP " + r.status() + " " + r.url()); }); };

const visual = [];
for (const e of targets) {
  const url = `${base}/design-explorer/${e.draft.prototype}`, qs = new URLSearchParams(e.draft.query.replace(/^\?/, "")), wantState = qs.get("state");
  console.log(`- ${e.key}`);
  for (const P of PRESETS) {
    const ctx = await browser.newContext({ viewport: { width: P.w, height: P.h } }), p = await ctx.newPage(); errsOf(p);
    await p.goto(url); await p.waitForTimeout(350);
    const o = await p.evaluate(PROBE), sc = `${e.key} @${P.id}`;
    check(sc, "tier " + P.tier, o.tier === P.tier, o.tier);
    if (wantState && o.state) check(sc, "state " + wantState, o.state === wantState, o.state);
    check(sc, "no hidden horizontal overflow", o.docW <= P.w && o.bodyW <= P.w && o.off.length === 0, `${o.docW} ${o.off.slice(0, 2).join("|")}`);
    check(sc, "targets >= 44px", o.small.length === 0, o.small.slice(0, 3).join("|"));
    check(sc, "every svg inside a marked temporary asset", o.unmarked === 0, String(o.unmarked));
    check(sc, "no console / page / http errors", p._e.length === 0, p._e.slice(0, 2).join("|"));
    if (P.w === 440 && e.refImage) { // mandatory 440 x 956 Reference comparison
      const shot = (await p.screenshot()).toString("base64");
      const out = await composer.evaluate(async ([ref, d]) => { const load = (s) => new Promise((r) => { const i = new Image(); i.onload = () => r(i); i.onerror = () => r(null); i.src = s; }); const R = await load(ref), D = await load("data:image/png;base64," + d); if (!R) return null; const H = Math.max(R.height, D.height), W = 440; const c = document.createElement("canvas"); c.width = W * 3 + 20; c.height = H; const x = c.getContext("2d"); x.fillStyle = "#888"; x.fillRect(0, 0, c.width, H); x.drawImage(R, 0, 0); x.drawImage(D, W + 10, 0); const mk = (i) => { const a = document.createElement("canvas"); a.width = W; a.height = H; const t = a.getContext("2d"); t.fillStyle = "#fff"; t.fillRect(0, 0, W, H); t.drawImage(i, 0, 0); return t.getImageData(0, 0, W, H); }; const A = mk(R), B = mk(D), G = x.createImageData(W, H); let sum = 0; for (let i = 0; i < A.data.length; i += 4) { const v = (Math.abs(A.data[i] - B.data[i]) + Math.abs(A.data[i + 1] - B.data[i + 1]) + Math.abs(A.data[i + 2] - B.data[i + 2])) / 3; sum += v; const g = 255 - Math.min(255, v * 2); G.data[i] = G.data[i + 1] = G.data[i + 2] = g; G.data[i + 3] = 255; } x.putImageData(G, W * 2 + 20, 0); return { url: c.toDataURL("image/png"), score: sum / (W * H), rw: R.width, rh: R.height }; }, [`${base}/reference-ui/${e.refImage.replace(/^.*reference-ui\//, "")}`, shot]);
      if (out) { const f = path.join(OUT, e.key.replace(/[^a-z0-9]+/gi, "_") + "_440.png"); fs.writeFileSync(f, Buffer.from(out.url.split(",")[1], "base64")); visual.push(`${rel(f)}  (mean abs diff ${out.score.toFixed(1)}; Reference ${out.rw}x${out.rh}, left | Draft | difference)`); check(sc, "440 Reference composite written (visual review required)", true); }
      else check(sc, "440 Reference composite", false, "Reference image not loadable");
    }
    await ctx.close();
  }
  if (!argv.includes("--skip-explorer")) { // Draft badge / state / device through the real Explorer, state kept across device changes
    const p = await (await browser.newContext({ viewport: { width: 1500, height: 1500 } })).newPage(); errsOf(p);
    await p.goto(`${base}/design-explorer/index.html?screen=${e.key}&version=draft&device=${PRESETS[0].id}&view=100`); await p.waitForSelector("iframe.proto-frame", { timeout: 8000 }).catch(() => {});
    const src0 = await p.evaluate(() => document.querySelector("iframe.proto-frame")?.getAttribute("src") || "");
    check(e.key + " [explorer]", "iframe src is the Draft prototype incl. its state query", src0 === e.draft.prototype, src0);
    const badge = await p.evaluate(() => [...document.querySelectorAll(".badge")].map((x) => x.textContent).join(","));
    check(e.key + " [explorer]", "DRAFT badge, not Approved / Master", /DRAFT/i.test(badge) && !/APPROVED|MASTER/i.test(badge), badge);
    for (const P of PRESETS) { await p.evaluate((id) => document.querySelector(`#devices [data-device="${id}"]`).click(), P.id); await p.waitForFunction((w) => Math.round(document.querySelector("iframe.proto-frame").getBoundingClientRect().width) === w, P.w, { timeout: 5000 }).catch(() => {}); await p.waitForTimeout(150);
      const r = await p.evaluate(() => { const f = document.querySelector("iframe.proto-frame"), b = f.getBoundingClientRect(); return { w: Math.round(b.width), h: Math.round(b.height), src: f.getAttribute("src"), cap: document.querySelector(".frame__caption")?.textContent || "", url: location.search }; });
      check(e.key + " [explorer]", `${P.id}: ${P.w}x${P.h}, tier ${P.tier}, same src, URL keeps version/device`, r.w === P.w && r.h === P.h && r.src === src0 && r.cap.includes("tier " + P.tier) && r.url.includes("device=" + P.id) && r.url.includes("version=draft"), JSON.stringify(r)); }
    await p.goto(`${base}/design-explorer/index.html?screen=${e.key}&version=reference&device=iphone-16-pro-max&view=100`); await p.waitForTimeout(500);
    const img = await p.evaluate(async () => { const im = [...document.querySelectorAll("img")].find((i) => /reference-ui/.test(i.getAttribute("src") || "")); if (!im) return null; await im.decode().catch(() => {}); return im.naturalWidth; });
    check(e.key + " [explorer]", "Reference version still renders", !!img, String(img));
    check(e.key + " [explorer]", "no page errors", p._e.length === 0, p._e.slice(0, 2).join("|")); await p.context().close();
  }
}

/* ---- Level 3 / --baseline: pixel regression against a commit ---- */
if (opt("--baseline")) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "mp-base-")); execFileSync("sh", ["-c", `git archive ${opt("--baseline")} design-explorer reference-ui | tar -x -C ${tmp}`], { cwd: ROOT }); const b2 = await serve(tmp); const changed = [];
  for (const e of targets) for (const P of PRESETS) { const shots = []; for (const bs of [base, b2.url]) { const ctx = await browser.newContext({ viewport: { width: P.w, height: P.h } }), p = await ctx.newPage(); await p.goto(`${bs}/design-explorer/${e.draft.prototype}`).catch(() => {}); await p.waitForTimeout(500); shots.push(await p.screenshot()); await ctx.close(); } if (!shots[0].equals(shots[1])) changed.push(`${e.key}@${P.id}`); }
  console.log(`baseline ${opt("--baseline")}: ${targets.length * PRESETS.length - changed.length} renders identical, ${changed.length} changed${changed.length ? " (review: intended?)" : ""}`); if (changed.length) console.log("  changed: " + changed.join(", ")); b2.s.close(); fs.rmSync(tmp, { recursive: true, force: true });
}
await browser.close(); if (own) own.s.close();
const total = results.length;
fs.writeFileSync(path.join(OUT, "last.json"), JSON.stringify({ level, keys: targets.map((t) => t.key), total, fail: failN, visual }, null, 1));
console.log(`\nLevel ${level} · ${targets.length} Draft entr${targets.length === 1 ? "y" : "ies"} · checks ${total} · PASS ${total - failN} · FAIL ${failN}`);
console.log("VISUAL REVIEW REQUIRED (440 x 956, Reference | Draft | difference):\n  " + (visual.join("\n  ") || "(none: no Reference for these entries)"));
process.exit(failN ? 1 : 0);

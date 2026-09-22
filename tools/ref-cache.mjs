#!/usr/bin/env node
/*
 * Reference analysis cache (NON-AUTHORITATIVE working data, git-ignored: .ai-cache/reference/<screenshot-name>.json).
 * Purpose: do not re-measure an unchanged Reference screenshot. The screenshot stays authoritative; a cache never overrides visible
 * evidence, and the final 440 x 956 Draft is always compared with the actual Reference. A changed checksum invalidates the observations.
 *
 *   node tools/ref-cache.mjs status <explorer-key | reference.png>     VALID / STALE / MISSING
 *   node tools/ref-cache.mjs init   <explorer-key | reference.png>     create the header (checksum, size); a checksum change clears observations
 *   node tools/ref-cache.mjs set    <key | png> <observations.json>    deep-merge observed values ("-" reads stdin)
 *   node tools/ref-cache.mjs show   <key | png>                        print the cache
 *   node tools/ref-cache.mjs px     <png> <x> <y>                      colour at a pixel (no browser needed)
 *   node tools/ref-cache.mjs bbox   <png> <x0> <y0> <x1> <y1> [tol]    bounding box of content in a region
 * Observation fields (all optional): gutters, geometry, typography, colours, spacing, radii, placeholders[], toVerify[].
 */
import fs from "node:fs";
import path from "node:path";
import { ROOT, abs, rel, ensureIgnored, loadModules, flatten, sha256 } from "./lib/common.mjs";
import { readPng, hex, bbox } from "./lib/png.mjs";

export const CACHE_DIR = path.join(ROOT, ".ai-cache", "reference");
export const cachePath = (png) => path.join(CACHE_DIR, path.basename(png, ".png") + ".json");

export async function resolveRef(arg) {
  if (/\.png$/i.test(arg)) return fs.existsSync(abs(arg)) ? rel(abs(arg)) : null;
  const e = flatten(await loadModules()).find((x) => x.key === arg || x.id === arg);
  return e && e.refImage ? "reference-ui/" + e.refImage.replace(/^.*reference-ui\//, "") : null;
}
export function cacheStatus(refRel) {
  const cp = cachePath(refRel);
  if (!fs.existsSync(cp)) return { state: "MISSING", path: rel(cp) };
  const c = JSON.parse(fs.readFileSync(cp, "utf8")), now = sha256(abs(refRel));
  return { state: c.sha256 === now ? "VALID" : "STALE", path: rel(cp), sha256: c.sha256, now, cache: c };
}
function init(refRel) {
  ensureIgnored(); fs.mkdirSync(CACHE_DIR, { recursive: true });
  const st = cacheStatus(refRel), img = readPng(abs(refRel)), sha = sha256(abs(refRel));
  const prev = st.cache && st.state === "VALID" ? st.cache : null;
  const c = { schema: 1, note: "NOT authoritative. The Reference screenshot is. Regenerated when the checksum changes.", reference: refRel, sha256: sha, width: img.width, height: img.height, updated: new Date().toISOString(), observations: prev ? prev.observations : {} };
  if (st.state === "STALE") c.invalidatedFrom = st.sha256;
  fs.writeFileSync(cachePath(refRel), JSON.stringify(c, null, 2) + "\n"); return { ...st, state: prev ? "VALID (kept)" : st.state === "STALE" ? "REGENERATED (Reference changed, observations cleared)" : "CREATED", path: rel(cachePath(refRel)) };
}
const merge = (a, b) => { for (const [k, v] of Object.entries(b)) a[k] = v && typeof v === "object" && !Array.isArray(v) && a[k] && typeof a[k] === "object" && !Array.isArray(a[k]) ? merge(a[k], v) : v; return a; };

if (import.meta.url === `file://${process.argv[1]}`) {
  const [cmd, arg, ...rest] = process.argv.slice(2);
  try {
    if (cmd === "px") { const im = readPng(abs(arg)); const [x, y] = rest.map(Number); console.log(hex(im.pixel(x, y))); }
    else if (cmd === "bbox") { const im = readPng(abs(arg)); const [x0, y0, x1, y1, tol] = rest.map(Number); console.log(JSON.stringify(bbox(im, x0, y0, x1, y1, tol || 90))); }
    else {
      const refRel = await resolveRef(arg); if (!refRel) { console.error("no Reference found for: " + arg); process.exit(2); }
      if (cmd === "status") { const s = cacheStatus(refRel); console.log(`${s.state}  ${refRel}  cache: ${s.path}` + (s.state === "STALE" ? "  (Reference checksum changed: run init)" : "")); }
      else if (cmd === "init") { const r = init(refRel); console.log(`${r.state}  ${r.path}`); }
      else if (cmd === "set") { let st = cacheStatus(refRel); if (st.state !== "VALID") { init(refRel); st = cacheStatus(refRel); } const obs = JSON.parse(rest[0] === "-" ? fs.readFileSync(0, "utf8") : fs.readFileSync(abs(rest[0]), "utf8")); merge(st.cache.observations, obs); st.cache.updated = new Date().toISOString(); fs.writeFileSync(cachePath(refRel), JSON.stringify(st.cache, null, 2) + "\n"); console.log("merged into " + st.path); }
      else if (cmd === "show") { const s = cacheStatus(refRel); console.log(s.state === "MISSING" ? "MISSING" : JSON.stringify(s.cache, null, 2)); }
      else { console.error("usage: see header of tools/ref-cache.mjs"); process.exit(2); }
    }
  } catch (e) { console.error(e.message); process.exit(1); }
}

#!/usr/bin/env node
/*
 * Affected-screen resolution for incremental verification (Level 1). Maps changed files to the Draft entries that actually render them.
 *
 *   node tools/affected.mjs                       uses `git status` (uncommitted changes)
 *   node tools/affected.mjs <path> [<path> ...]   explicit changed files (repo-relative)
 *   node tools/affected.mjs --module <data-module-id>   Level 2: every Draft of one module
 *   node tools/affected.mjs --all                 Level 3: every Draft
 * Output: suggested level, notes, and the keys to pass to `tools/verify.mjs --keys`.
 */
import { loadModules, flatten, git, affectedByPaths, withDependents } from "./lib/common.mjs";
const a = process.argv.slice(2), entries = flatten(await loadModules()), drafts = entries.filter((e) => e.draft);
let keys, level, notes = [];
if (a.includes("--all")) { keys = drafts.map((e) => e.key); level = 3; }
else if (a.includes("--module")) { const m = a[a.indexOf("--module") + 1]; keys = drafts.filter((e) => e.moduleId === m).map((e) => e.key); level = 2; }
else {
  let paths = a.filter((x) => !x.startsWith("--"));
  if (!paths.length) paths = git("status", "--porcelain", "-uall").split("\n").filter(Boolean).map((l) => l.slice(3).replace(/^"|"$/g, "").replace(/.* -> /, ""));
  const r = affectedByPaths(entries, paths); keys = r.keys; level = r.level; notes = r.notes;
  console.log(`changed files: ${paths.length}`);
}
for (const n of [...new Set(notes)]) console.log("note: " + n);
console.log(`suggested level: ${level}   affected Draft entries: ${keys.length}`);
console.log(keys.join(","));

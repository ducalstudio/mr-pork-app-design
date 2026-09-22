#!/usr/bin/env node
/*
 * Temporary task packet: derives a small startup context for ONE screen from the authoritative sources and writes .ai-context/current-task.md
 * (git-ignored, NON-AUTHORITATIVE, overwritten for every task). Nothing is copied from large documents; it lists where to read.
 *
 *   node tools/task-packet.mjs <explorer-key | screen-id> [--task "what to do"] [--stdout]
 */
import fs from "node:fs";
import path from "node:path";
import { ROOT, abs, rel, ensureIgnored, loadModules, loadConfig, flatten, docFor, draftDeps, MODULE_SOURCES, withDependents, PRESET_IDS } from "./lib/common.mjs";
import { cacheStatus, resolveRef } from "./ref-cache.mjs";

const args = process.argv.slice(2), arg = args.find((a) => !a.startsWith("--")); const flag = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
if (!arg) { console.error("usage: node tools/task-packet.mjs <explorer-key | screen-id> [--task \"...\"] [--stdout]"); process.exit(2); }
const entries = flatten(await loadModules()), cfg = await loadConfig();
const e = entries.find((x) => x.key === arg) || entries.find((x) => x.id === arg);
if (!e) { console.error("no Explorer entry for: " + arg); process.exit(2); }

const clip = (s, n) => (s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s);
const doc = docFor(e), docPath = doc ? `docs/modules/${doc}.md` : null;
const docText = docPath && fs.existsSync(abs(docPath)) ? fs.readFileSync(abs(docPath), "utf8") : "";
function block(label) { // a "**Label ...**" paragraph up to the next bold label
  const lines = docText.split("\n"), i = lines.findIndex((l) => l.startsWith("**" + label)); if (i < 0) return "";
  const out = [lines[i]]; for (let j = i + 1; j < lines.length && !lines[j].startsWith("**"); j++) if (lines[j].trim()) out.push(lines[j]); return out.join("\n");
}
const siblings = entries.filter((x) => x.key !== e.key && x.refImage && ((x.id !== "To Verify" && x.id === e.id) || (x.screen.path || []).slice(0, -1).join("/") === (e.screen.path || []).slice(0, -1).join("/"))).slice(0, 12);
const deps = draftDeps(e);
const specs = deps ? deps.comps.filter((c) => fs.existsSync(abs(`design-explorer/prototypes/_components/${c}/spec.md`))).map((c) => `design-explorer/prototypes/_components/${c}/spec.md`) : [];
const compBlock = block("Shared components").replace(/^\*\*Shared components[^*]*\*\*\s*/, "");
const existingNames = [...new Set([...(compBlock.split(/\*\*Planned/i)[0].matchAll(/`([a-z0-9-]+)`/g))].map((m) => m[1]))].filter((c) => fs.existsSync(abs(`design-explorer/prototypes/_components/${c}/component.css`)));
const planned = (compBlock.match(/\*\*Planned[^:]*:?\*\*?\s*([^\n]*)/i) || [])[1] || "";
const refRel = await resolveRef(e.key), cache = refRel ? cacheStatus(refRel) : null;
const seen = new Set(); const openQ = [];
for (const src of [...(e.versions.reference ? e.versions.reference.notes || [] : []), ...(e.versions.draft ? e.versions.draft.notes || [] : []), ...(e.screen.notes || [])]) if (/To Verify|CMS Rule Required|Backend Dependency Unknown/.test(src)) { const t = clip(src, 170); if (!seen.has(t)) { seen.add(t); openQ.push(t); } }
const scope = e.draft ? withDependents(entries, [e.key]) : [];
ensureIgnored();

const L = [];
L.push("# Current task packet (temporary, NON-AUTHORITATIVE)", "", "Derived from the authoritative sources by `tools/task-packet.mjs`; overwritten for every task; never committed. If anything here disagrees with a canonical source, the source wins.", "");
L.push(`- **Task:** ${flag("--task") || "(not stated)"}`);
L.push(`- **Module:** ${e.module.label}${docPath ? `  → summary: \`${docPath}\`` : ""}`);
L.push(`- **Screen ID:** ${e.id}   **State:** ${e.screen.state || "-"}   **Scope:** ${e.screen.scope}`);
L.push(`- **Explorer key:** \`${e.key}\`   **Data:** \`design-explorer/data/modules/${e.moduleId}.js\``);
L.push(`- **Reference (authoritative):** ${refRel ? "`" + refRel + "`" : "none (no UI supplied: do not generate a design)"}${e.versions.reference && e.versions.reference.devices ? "" : ""}`);
L.push(`- **Draft:** ${e.draft ? `\`design-explorer/${e.draft.prototype}\` (${e.versions.draft.status})` : "none yet"}`);
if (siblings.length) L.push(`- **Sibling References (read only if needed):** ${siblings.map((s) => "`" + path.basename(s.refImage) + "`").join(", ")}`);
L.push(`- **Authoritative sources:** ${MODULE_SOURCES[doc] || "see docs/CONTEXT-MAP.md"}`);
L.push(`- **Reference cache:** ${cache ? `${cache.state} (${cache.path})` : "n/a"}${cache && cache.state === "VALID" ? " → reuse observations, still compare the final 440 render with the actual Reference" : cache ? " → measure once (tools/ref-cache.mjs init/set), then reuse" : ""}`);
L.push("", "## Approved decisions (from the module summary)", block("Approved decisions") ? clip(block("Approved decisions"), 1100) : "(none recorded)");
L.push("", "## Open questions (To Verify / CMS / Backend)", ...(openQ.slice(0, 8).map((q) => "- " + q)), ...(block("Major To Verify") ? ["- " + clip(block("Major To Verify"), 600)] : []));
L.push("", "## Components", deps ? `Used by the Draft: ${deps.comps.join(", ") || "-"}  (kit: ${deps.kit.join(", ") || "-"}${deps.embeds.length ? "; embeds " + deps.embeds.join(", ") : ""})` : `No Draft yet. Existing candidates (read the specs only of those the screen actually uses): ${existingNames.join(", ") || "-"}.${planned ? " Planned, build at first use: " + clip(planned, 300) : ""}`);
if (specs.length) L.push("Specs to read: " + specs.map((x) => "`" + x + "`").join(", "));
else if (existingNames.length) L.push("Spec paths: `design-explorer/prototypes/_components/<name>/spec.md`. Registry (only if a component is missing here): `design-explorer/prototypes/_components/README.md`.");
L.push("", "## Viewports", cfg.DEVICES.map((d) => `${d.label} ${d.width} × ${d.height}`).join(" · ") + "   (440 × 956 = visual baseline; compare the Draft with the Reference there)");
const shortKeys = scope.length > 4 ? scope.slice(0, 2).map((k) => "`" + k + "`").join(", ") + ", … (" + scope.length + " entries in total)" : scope.map((k) => "`" + k + "`").join(", ");
L.push("", "## Verification scope (Level 1)");
if (e.draft) {
  L.push("Target: `" + e.key + "`. Entries rendered by the same page or embedding it: " + shortKeys + ".");
  if (scope.length > 1) L.push("Verify ONLY the target when the change is data for this state alone; verify ALL of them when the page, its CSS/JS or a component it uses changes.");
  L.push("Find the exact set from the changed files: `node tools/affected.mjs`.");
} else L.push("No Draft to verify yet. After building: `node tools/affected.mjs` resolves the affected entries.");
L.push("Run: `node tools/verify.mjs --keys <keys>` (4 presets, overflow, state/badge, 440 Reference composite to LOOK at, Reference unchanged).");
L.push("", "## Do not read", "`.ai-output/`, other modules' data and Reference folders, unrelated component specs, the canonical documents outside the sections above.");
const text = L.join("\n") + "\n";
if (args.includes("--stdout")) process.stdout.write(text);
else { fs.mkdirSync(path.join(ROOT, ".ai-context"), { recursive: true }); fs.writeFileSync(path.join(ROOT, ".ai-context", "current-task.md"), text); console.log(`wrote .ai-context/current-task.md (${text.length} bytes, ${text.split("\n").length} lines)`); }

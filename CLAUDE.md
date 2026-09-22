# Mr Pork App — Claude Code Instructions

Mr Pork App design system, UI structure, review workflow, Design Explorer and responsive Drafts.

`CLAUDE.md` is the **context-loading protocol and navigation guide**, not project documentation. Project truth lives in the canonical documents it points to.

---

## 1. Context Loading Protocol (read this first)

Use **Relevant Context Only**: a normal task starts from a small, targeted set of files.

1. **Determine the scope first**: module, screen (Explorer key or ID), state, task type.
2. **Load only what that scope needs**, through the fast path below or `docs/CONTEXT-MAP.md` → one `docs/modules/<MODULE>.md`.
3. Read the target screen's metadata, its Reference screenshot(s) and only the specs of components the screen uses.
4. **Expand only when** a conflict, dependency or missing fact requires it, and only to the section needed.

Do **not**, by default: read every project document (the eight in section 2), inspect every module or `design-explorer/data/modules/*.js`, inspect every Reference screenshot, read all component specs, read `.ai-output/` (section 4), or re-read documents already read this session. Prefer `rg -n` with an exact key, ID or heading over reading whole files.

### Startup sequence for UI work

**Fast path:** `node tools/task-packet.mjs <explorer-key> --task "..."`, then read `.ai-context/current-task.md` (screen ID, Reference path, module decisions, open questions, components, presets, verification scope) + the Reference image + the listed component specs. The packet is derived from the sources below; it is not one. **Manual fallback:** `CLAUDE.md` → `docs/CONTEXT-MAP.md` → `docs/modules/<MODULE>.md` → screen metadata (`rg -n 'key: "<key>"' design-explorer/data/modules/<file>.js -A 40`) → Reference (+ directly relevant siblings) → registry `design-explorer/prototypes/_components/README.md` and used specs → expand only if required.

`DESIGN-EXPLORER-IMPLEMENTATION.md` § 30 (nine documents) applied to the initial Phase 1 build, not to routine tasks. A **full baseline read** happens only for an owner-requested project-wide audit, changed core rules, or a contradiction that cannot be settled from the relevant sections.

---

## 2. Authority

Canonical project/product documents are authoritative. `docs/CONTEXT-MAP.md` and `docs/modules/*.md` are **summaries and indexes only**; they are not a second source of truth. If a summary conflicts with an authoritative source, use the authoritative source and update the summary afterwards.

Source of truth priority when information conflicts:

1. Latest explicit owner approval
2. Latest approved Master Design
3. Current repository documentation
4. Approved screen specification
5. Approved prototype
6. Existing Reference design
7. Historical design
8. Your own interpretation (lowest)

Canonical documents: `PROJECT.md`, `APP-STRUCTURE.md`, `SCREEN-INVENTORY.md`, `DESIGN-EXPLORER.md`, `DESIGN-EXPLORER-IMPLEMENTATION.md`, `DESIGN-SYSTEM.md`, `AI-GUIDELINES.md`, `REFERENCE-UI-PHASE-1.md`.

---

## 3. Workflow

**Relevant Context → Inspect → Audit → Implement → Verify → Report.** Proposal → Owner Approval is reserved for true blockers (below); routine implementation decisions do not wait for it.

- Do not redesign freely. Existing designs are imported as `Reference` first and never replaced or edited.
- Finish with a short result: changed · verified · unresolved true blockers · current batch progress. Full `.ai-output` reports only for batch completion, major audits, migration milestones or when the owner asks.
- Batch checkpoints (see Migration execution mode) commit and push automatically, per the owner's standing autonomous-mode instruction. Any other commit still needs to be asked for. Never merge to main.

### Autonomous default decision mode (owner standing instruction)

Decide and proceed without stopping for approval on: spacing / margins / padding, responsive widths / max-widths, stacking / wrapping, component variants, screen-level CSS variables, component reuse, tablet content caps, compact-device adaptations, overflow-driven font-size reduction, Reference-observed colours / borders / radii / geometry, placeholder usage, sanitized sample data, accessibility hit-area / keyboard / focus fixes, hidden-overflow fixes, state architecture, prototype reuse, technical file organization, verification strategy, and minor fidelity corrections. For these: **decide → implement → verify → report**, not decide → ask.

When something is unclear, resolve it in this order, then continue implementing (do not stop merely because backend or business behavior is unknown):

1. Explicit owner-approved rule
2. The target Reference screen
3. Directly related sibling Reference screens
4. An existing Reference-faithful shared component or variant
5. The most conservative responsive adaptation
6. Mark `To Verify` / `CMS Rule Required` / `Backend Dependency Unknown` and build the visible UI anyway
7. Ask the owner only if the decision matches the true-blockers list below

### True blockers — the only reasons to stop and ask

Primary navigation / information architecture, a core user flow, feature scope, Membership / Credit / Points / rewards business rules, payment / refund / top-up logic, changing Delivery's Future Scope status (§7), authentication flow, checkout flow, order flow, global design tokens, shared component architecture, responsive strategy, CMS/backend assumptions, important user-facing copy meaning, brand identity direction, a major screen built with no Reference or brief, deleting or replacing a Reference design, promotion to `Approved` / `Master`, programmer handoff, or two materially different product directions that Reference evidence cannot resolve. Not approved until the owner says so.

Work only within the requested scope: changing one screen does not license changes to other modules, navigation, global tokens or shared components.

### Responsive default

440 × 956: reconstruct the Reference faithfully. 375 × 667: the smallest adaptation required for fit and usability. 744 × 1133 and 1024 × 1366: extend the same visual language conservatively. No separate tablet design language; no grids, sidebars, master-detail layouts or other major recomposition unless clearly justified by the existing design or explicitly approved.

### Migration execution mode

Once the current Reference Fidelity corrections are complete, batches run back-to-back without waiting for approval between them: Batch 2 (Notifications + Account) → Batch 3 (Authentication) → Batch 4 (Rewards + Points) → Batch 5 (Credit) → Batch 6 (Shop + Ordering). Delivery stays last / Future Scope.

At the end of each batch: verify it, confirm the Reference is unchanged, confirm all four presets work and the 440 baseline stays Reference-faithful, then commit a checkpoint to the current feature branch and push it (never merge to main), and continue to the next batch. If a true blocker appears, record it, skip only the blocked screen, continue with the rest, and ask the owner only about the blocker.

When Batches 2–6 are done, stop before `Approved` / `Master` and give one consolidated report: screens migrated, screens still Reference-only, screens blocked, shared components created, all four-preset verification results, remaining visual fidelity issues, open business/product questions, recommended next review order. Then wait for owner review.

---

## 4. Working data (non-authoritative, git-ignored)

`.ai-context/`, `.ai-cache/` and `.ai-output/` are working data. They are excluded from Git (`.git/info/exclude`; `tools/` re-adds the entries if missing) and are **never a source of truth**.

- `.ai-context/current-task.md`: the temporary task packet; overwritten for every task; derived, never copied from large documents.
- `.ai-cache/reference/`: Reference measurements keyed by screenshot checksum (`node tools/ref-cache.mjs status|init|set|show|px|bbox`). Reuse a VALID cache instead of re-measuring; a changed checksum invalidates it. A cache never overrides visible Reference evidence, and the final 440 × 956 Draft is still compared with the actual Reference.
- `.ai-cache/verify/`: latest verification output (440 composites).
- `.ai-output/`: historical reports and task output. Do **not** read or scan it during context loading; read one file only when the owner refers to it, the task continues that report, or a prior-audit comparison is necessary.

---

## 5. Design status and protection

Statuses: `Reference`, `Draft`, `Review`, `Approved`, `Master`, `Deprecated`, `To Verify`.

- Never promote a design to `Approved` or `Master` without explicit owner approval. Be conservative with Master.
- **Reference** files (`reference-ui/`) and every `versions.reference` block are never modified.
- Drafts are `Draft / Provisional`. Shared prototype components are Draft / Provisional, not authoritative Design System components.
- No `handoff.json` or handoff data until the owner asks.

### Design philosophy (locked by the owner)

The existing Mr Pork UI (`Reference`) is the **visual source of truth**. Modularization and responsive design are implementation strategies, not permission to redesign.

**Reference UI → faithful responsive implementation → reusable modules → easier maintenance**, never *generic components → restyled UI*.

- "Modularize" means: preserve the UI, reconstruct it faithfully, split repeated visual patterns into modules, make them easier to update, and reuse them to support other device sizes.
- 440 × 956 is the baseline; other sizes adapt the same design. Do not create a separate tablet design language.
- Do not redesign, normalize, simplify, modernize or restyle the existing UI unless the owner explicitly approves that change. If a shared component makes a screen less faithful, use a variant or screen-level value; the Reference does not conform to the component.
- Keep visible Reference sample content (mark it SAMPLE DATA / NOT BUSINESS RULE); do not swap it for cleaner copy. Exception: never reproduce real personal information (names, phones, emails, addresses) verbatim; use fictional values of similar length and format so wrapping stays representative.
- Inter is the Draft / Provisional typeface (Typeface To Verify). Match the Reference through size, weight, line height, spacing and alignment; do not introduce a second font.

## 6. Do not invent

Do not invent business rules, points conversion, reward eligibility, membership tiers, referral or credit rules, voucher stacking, payment methods, delivery rules, order statuses, CMS capabilities or design tokens. Unknown items are marked `To Verify`, `Open Question`, `CMS Rule Required` or `Backend Dependency Unknown`.

## 7. Fixed product facts

- Administrative operations belong to the existing in-house CMS. Do not design a new Admin Portal.
- The Staff Membership POS is for membership operations only, not a retail cashier POS.
- The Design Explorer hierarchy (`Parent → Child → Sub-child → Screen / Review View → State`) is for review; it is not the customer App navigation.
- Delivery is Future Scope.
- Reuse before creation: check the component registry, prefer a variant, create a component only when a screen first needs it.

## 8. Draft / prototype work (short checklist)

- Registry: `design-explorer/prototypes/_components/README.md`. Runtime and presets: `DESIGN-EXPLORER-IMPLEMENTATION.md` section 31.
- Every Draft renders at 375 × 667, 440 × 956, 744 × 1133 and 1024 × 1366 with no horizontal overflow (measure it; `base.css` hides `overflow-x`), Reference untouched, temporary assets marked `data-asset="temporary-placeholder"`, sample data marked, and differences recorded in `versions.draft.notes`.
- **Incremental verification** (`node tools/affected.mjs` → `node tools/verify.mjs`): Level 1 = affected screens only (default); Level 2 = every Draft of the current module / batch (`--level 2`, batch checkpoint); Level 3 = every Draft, optionally `--baseline <commit>` (`--level 3`, milestone). Never skipped at any level: Reference unchanged, no hidden horizontal overflow, correct Draft / state / device, and the 440 × 956 comparison with the actual Reference (look at the composite the tool writes; it cannot judge fidelity).
- Draft-only colour roles: `_ui-kit/reference-roles.css` (not tokens). Inter is a provisional Draft font.

## 9. Documentation discipline

When an approved decision changes repository truth, update the canonical document (navigation → `APP-STRUCTURE.md` and inventory entries; new screen → `SCREEN-INVENTORY.md` and the Explorer hierarchy; global component → `DESIGN-SYSTEM.md`), then the matching `docs/modules/*.md` summary. Do not let implementation and documentation drift apart.

Protect approved work. Label proposals as proposals until approved.

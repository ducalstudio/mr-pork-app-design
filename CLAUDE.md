# Mr Pork App — Claude Code Instructions

Mr Pork App design system, UI structure, review workflow, Design Explorer and responsive Drafts.

`CLAUDE.md` is the **context-loading protocol and navigation guide**, not project documentation. Project truth lives in the canonical documents it points to.

---

## 1. Context Loading Protocol (read this first)

Use **Relevant Context Only**. A normal task must start from a small, targeted set of files.

1. **Determine the task scope first**: Module, Screen (Explorer key or screen ID), State, and task type (audit, proposal, Draft, fix, docs).
2. **Load only what that scope needs.** Route through `docs/CONTEXT-MAP.md`, then the one module file in `docs/modules/`.
3. Read the target screen's metadata, its Reference screenshot(s), and only the specs of components the screen actually uses.
4. **Expand only when** a conflict, a dependency or a missing fact requires it, and only to the specific section needed.

Do **not**, by default:

- read every project document (the eight canonical documents listed in section 2);
- inspect every module or every `design-explorer/data/modules/*.js` file;
- inspect every Reference screenshot;
- read all component specs;
- read `.ai-output/` (see section 4);
- re-read documents already read in this session.

Prefer `rg -n` with an exact key, screen ID or heading and read only the matching section over reading whole files.

### Default startup sequence for UI work

1. `CLAUDE.md`
2. `docs/CONTEXT-MAP.md`
3. the relevant `docs/modules/<MODULE>.md`
4. target screen metadata (`rg -n 'key: "<explorer-key>"' design-explorer/data/modules/<file>.js -A 40`)
5. target Reference screenshot (plus only directly relevant sibling states)
6. component registry (`design-explorer/prototypes/_components/README.md`) and specs of the components actually used
7. expand only if required

`DESIGN-EXPLORER-IMPLEMENTATION.md` § 30 ("read nine documents before implementation") applied to the initial Phase 1 Explorer build. It is not the routine task-start rule; this section governs.

A **full project baseline read** (the eight canonical documents) happens only when the owner asks for a project-wide audit, when core project rules have changed, or when a contradiction cannot be settled from the relevant sections.

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

**Relevant Context → Inspect → Audit → Proposal → Owner Approval → Implement → Verify**

- Do not redesign freely. Existing designs are imported as `Reference` first and never replaced or edited.
- Wait for owner approval before product-level UI/UX changes; implement only the approved scope.
- Finish with: files changed, what and why, open questions, decisions needing approval.
- Do not commit unless asked. Never merge to main.

### Major changes require a proposal first

Primary navigation, information architecture, authentication flow, membership logic, rewards logic, checkout flow, order flow, global design tokens, shared component architecture, responsive strategy, CMS/backend assumptions. A proposal is not approved until the owner says so.

Work only within the requested scope: changing one screen does not license changes to other modules, navigation, global tokens or shared components.

---

## 4. `.ai-output/`

`.ai-output/` holds **historical working reports and temporary task output**. It is excluded from Git and is **not** part of normal context.

- Do **not** read or scan it during context loading.
- Read one specific file only when the owner refers to it, the current task continues that report, or a comparison with a prior audit is necessary.
- New long reports are saved there (as the owner requests); show only a short summary and the path in the terminal.

---

## 5. Design status and protection

Statuses: `Reference`, `Draft`, `Review`, `Approved`, `Master`, `Deprecated`, `To Verify`.

- Never promote a design to `Approved` or `Master` without explicit owner approval. Be conservative with Master.
- **Reference** files (`reference-ui/`) and every `versions.reference` block are never modified.
- Drafts are `Draft / Provisional`. Shared prototype components are Draft / Provisional, not authoritative Design System components.
- No `handoff.json` or handoff data until the owner asks.

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
- Draft-only colour roles: `_ui-kit/reference-roles.css` (not tokens). Inter is a provisional Draft font.

## 9. Documentation discipline

When an approved decision changes repository truth, update the canonical document (navigation → `APP-STRUCTURE.md` and inventory entries; new screen → `SCREEN-INVENTORY.md` and the Explorer hierarchy; global component → `DESIGN-SYSTEM.md`), then the matching `docs/modules/*.md` summary. Do not let implementation and documentation drift apart.

Protect approved work. Label proposals as proposals until approved.

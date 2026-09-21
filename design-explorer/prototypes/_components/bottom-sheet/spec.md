# bottom-sheet

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 1 (Fulfilment Selector, Logout confirmation).

Panel family used for sheets, popups and confirmations: optional head (title + close), text or body, optional two-button actions. Sits in an `overlay`.

- **Name note:** the Reference panels seen so far are vertically centered, not anchored to the bottom. The folder keeps the approved name `bottom-sheet`; a rename (for example `sheet`) is To Verify. The bottom-anchored placement (`--overlay-align: flex-end`) is supported by the overlay but is **not exercised or verified yet**; it will be tested when the first Reference sheet that needs it is built.
- **Plan change (evidence-based):** the plan listed a separate `confirmation-dialog`. The Logout capture uses exactly the sheet chrome (18px bold title, close, muted message), so it reuses this component (`sheet--floating`, `sheet__actions`). No `confirmation-dialog` component was created.
- **Variants:** default = edge to edge, square corners (Reference: Fulfilment Selector); `--floating` = inset by `--sheet-margin`, 8px radius (Logout, position To Verify). `sheet__title--center` = large centered heading.
- **Tier behavior (Draft tablet presentation, not in the Reference):** medium / expanded = centered panel, max width 480, 12px radius.
- **Spacing:** `--sheet-pad`, `--sheet-body-gap`, `--sheet-actions-gap` are set by the screen from Reference measurements.
- **Accessibility:** `role="dialog"`, `aria-modal="true"`, labelled by its title; focus trapped by `overlay`.
- **Open (To Verify):** dialog vs bottom-sheet presentation of the Logout capture, dismissal, sheet maximum height and internal scrolling (first needed in Batch 5).

# Shared Prototype Components

**Status: Draft / Provisional.** These are reusable building blocks for responsive prototypes. They are **not** approved global Design System components. Only Approved / Master components become authoritative in `DESIGN-SYSTEM.md`.

Rules:
1. Reuse before creation: check this folder and `_ui-kit/` first, then use a variant if one fits.
2. Colors come from the semantic role variables in `_ui-kit/tokens.css` (`--proto-accent`, `--proto-accent-soft`, …). A screen overrides them; components never hard-code brand values.
3. Respond to size with `[data-tier="…"]` in the **screen's** `responsive.css`, never with numeric breakpoints.
4. Every component folder has `component.css`, `spec.md` (status, variants, states, accessibility) and, if it needs behavior, `component.js` (a classic script that attaches to `window.MPProto`).
5. Icons and illustrations are temporary placeholders (`data-asset="temporary-placeholder"`, Not Source Asset) until the owner supplies assets. The Home Draft uses Inter as a provisional Draft font (To Verify, not a brand font or token); see `_ui-kit/font-inter.css`.

| Component | First used by | Variants |
|---|---|---|
| `app-header` | Home — Member | greeting + bell (Account variant later) |
| `summary-stat` | Home — Member | bordered box (inline variant later) |
| `fulfilment-option` | Home — Member | tile (row variant later); `interactive` / `future-scope` |
| `promo-carousel` | Home — Member | 1:1 scroll-snap |
| `section-header` | Home — Member | default |
| `card-row` | Home — Member | horizontal peek row |
| `bottom-nav-reference` | Home — Member | Reference Navigation only (not Master) |
| `image-placeholder` | Home — Member | square / fill |

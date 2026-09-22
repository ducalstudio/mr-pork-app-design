# Shared Prototype Components

**Status: Draft / Provisional.** These are reusable building blocks for responsive prototypes. They are **not** approved global Design System components. Only Approved / Master components become authoritative in `DESIGN-SYSTEM.md`.

Rules:
0. **Components reproduce the Reference; they do not restyle it.** If a component makes a screen less faithful, add a variant or a screen-level value instead (see `CLAUDE.md` section 5, Design philosophy).
1. Reuse before creation: check this folder and `_ui-kit/` first, then use a variant if one fits.
2. Colors come from the semantic role variables in `_ui-kit/tokens.css` (`--proto-accent`, `--proto-accent-soft`, …). A screen overrides them; components never hard-code brand values.
3. Respond to size with `[data-tier="…"]`, never with numeric breakpoints or width `@media`. A screen does it in its own `responsive.css`. A component may also carry its own tier behavior (for example `app-shell` column width, sheet panel width) using low-specificity `:where([data-tier="…"])` selectors so a screen can override it.
4. Every component folder has `component.css`, `spec.md` (status, variants, states, accessibility) and, if it needs behavior, `component.js` (a classic script that attaches to `window.MPProto`).
5. Icons and illustrations are temporary placeholders (`data-asset="temporary-placeholder"`, Not Source Asset) until the owner supplies assets. The Home Draft uses Inter as a provisional Draft font (To Verify, not a brand font or token); see `_ui-kit/font-inter.css`.

| Component | First used by | Variants |
|---|---|---|
| `app-header` | Home — Member | greeting + bell; `back-title` (Batch 1); `account-actions` (Batch 2) |
| `summary-stat` | Home — Member | bordered box; `inline` (Batch 2) |
| `fulfilment-option` | Home — Member | tile; `row` (Batch 1); `interactive` / `future-scope` |
| `promo-carousel` | Home — Member | 1:1 scroll-snap |
| `section-header` | Home — Member | default; `menu` (Batch 2) |
| `card-row` | Home — Member | horizontal peek row |
| `bottom-nav-reference` | Home — Member | Reference Navigation only (not Master); review view render (Batch 1) |
| `image-placeholder` | Home — Member | square / fill; `circle` (Batch 2) |
| `app-shell` | Batch 1 (Network Error, Legal) | `--band`, `--page`, centered body; screens supply `--shell-gutter` / inset / nav zone |
| `button` | Batch 1 (Network Error, Logout) | primary, neutral; `--block`; `pale` (Batch 3) |
| `icon-button` | Batch 1 (Legal, Logout) | 44px hit area; flush start / end |
| `overlay` | Batch 1 (internal base) | underlay + scrim + layer + focus / dismiss |
| `bottom-sheet` | Batch 1 (Fulfilment Selector, Logout) | edge-to-edge, `--floating` |
| `media-overlay` | Batch 1 (Promotion Popup, Interstitial) | popup, `--screen` with Skip pill |
| `state-panel` | Batch 1 (Network Error) | error; `empty` (Batch 2); processing later |
| `rich-content` | Batch 1 (Privacy, Terms) | headings, paragraphs, lists |
| `chip` | Batch 2 (Notifications) | `tab` role (filter / option added at first use) |
| `notification-row` | Batch 2 (Notifications) | unread / read, optional call-to-action text |
| `menu-row` | Batch 2 (Account Home) | label + chevron, single column |
| `profile-card` | Batch 2 (Account Home) | avatar, name, phone, inline stats |
| `text-field` | Batch 3 (Login, Registration form) | pale-filled pill (prefix + divider + value); `--inline` label/value row |
| `otp-input` | Batch 3 (Login / Registration OTP) | 6-box code entry, real inputs, auto-advance |
| `link-button` | Batch 3 (Authentication) | blue underlined link; `--muted` plain text action |
| `legal-footnote` | Batch 3 (Authentication) | bottom disclaimer, pinned via `margin-top: auto` |
| `voucher-card` | Batch 4 (My Rewards, Voucher Detail) | valid (bordered, CTA); `--spent` (grey, no CTA) |
| `radio-row` | Batch 5 (Credit: Transaction Type, Select Bank, Top-Up payment method) | label + red radio (real `<input>`) |
| `store-card` | Batch 6 (Store Selection) | one card, two containers: `--scroll` (map), `--stack` (list); `--selected` |

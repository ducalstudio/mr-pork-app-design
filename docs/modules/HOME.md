# Module context: Home & Navigation
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** the member's landing screen, the entry overlays over it, and the Reference bottom navigation.

**Explorer keys** (`design-explorer/data/modules/home-navigation.js`)
- `home-and-navigation/home-member` (MP-HOME-001), `home-and-navigation/promotion-popup`, `home-and-navigation/fulfilment-selector`, `home-and-navigation/bottom-navigation` (review view, same screenshot as Home).
- Account Home keys live in the same file: see `ACCOUNT.md`.

**Status**
- Reference: all four. Drafts: Home — Member (committed `a40fe29`), Promotion Popup, Fulfilment Selector, Bottom Navigation review (committed `458c51e`). All Draft / Provisional, not Approved.
- Prototypes: `design-explorer/prototypes/home-navigation/{MP-HOME-001,promotion-popup,fulfilment-selector,bottom-navigation}/`.

**Approved decisions (Home Draft, must stay intact)**
- Pickup / Delivery sit above the Promotion (approved IA change). Delivery is Future Scope: inert tile and inert selector row (`aria-disabled`, not focusable, no navigation, no added copy).
- Credit / Points / Rewards: numeric only, no currency symbol (proposed formatting, To Verify). Promotion 1:1, manual scroll-snap, no autoplay, max about 480 on tablet. Bottom bar: full-width background, inner container about 720. Home does not reopen the selector after Pickup was chosen.
- Overlay panels: tablet panel about 480, sheet radius 12 (provisional). Inter is Draft / Provisional / To Verify.
- The Home Draft predates `_ui-kit/reference-roles.css` and keeps its own local colour values. It is regression-checked as pixel-identical; do not edit its files casually.

**Major To Verify:** greeting / time-of-day rules; unread-dot source; banner tap and slide count (CMS Rule Required); "Shop & more" content type; popup trigger, frequency, dismissal; selector dismissal and Shop-tab behavior; safe-area handling; Master Navigation (not decided).

**Shared components used:** `app-header`, `summary-stat`, `fulfilment-option` (tile, `row`), `promo-carousel`, `section-header`, `card-row`, `bottom-nav-reference`, `image-placeholder`, `app-shell`, `overlay`, `bottom-sheet`, `media-overlay`.

**Reference quirks**
- Home Reference is 440 x 958 (2px taller than other captures) and is cut off at "Shop & more".
- Popup and Selector show the dimmed Home behind them; the Selector shows the Shop tab highlighted; the Popup has no close control; the Selector panel is vertically centered.
- Fulfilment Selector sample copy and both illustrations are not source assets.

**Authoritative sources:** `APP-STRUCTURE.md` § 7 and § 21 to 22; `SCREEN-INVENTORY.md` § 4.3; Draft decisions in `versions.draft.notes` of `home-navigation.js`; specs `_components/{app-header,summary-stat,fulfilment-option,bottom-nav-reference}/spec.md` (read only those you use).

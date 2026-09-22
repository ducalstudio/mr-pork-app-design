# Module context: Shop & Ordering
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** store selection, product search, product detail, checkout (Pickup), payment returns, orders.

**Explorer keys** (`shop-ordering.js`)
- With Reference: `shop-and-ordering/store-selection/{map-view,list-view}` (MP-CHECKOUT-006), `shop-and-ordering/search-results` (MP-SHOP-005), `shop-and-ordering/product-detail` (MP-PRODUCT-001), `shop-and-ordering/checkout/review-order-pickup` (MP-CHECKOUT-001).
- No UI supplied: `checkout/payment-failed` (MP-CHECKOUT-010), `checkout/payment-success`, `checkout/pay-at-outlet`, `orders/order-history` (MP-ORDER-003), `orders/order-status-detail` (MP-ORDER-004).

**Status:** Draft built for all 5 Current-Scope screens with Reference: `prototypes/ordering/store-selection/` (state-driven map/list, covers 2 entries), `prototypes/ordering/search-results/`, `prototypes/ordering/product-detail/`, `prototypes/ordering/review-order-pickup/`. Batch 6 complete, verified 184/184, uncommitted pending checkpoint. The 5 no-UI entries (payment-failed, payment-success, pay-at-outlet, order-history, order-status-detail) remain correctly **UI NOT SUPPLIED / BLOCKED** — not built, not invented.

**Approved decisions (D-05):** Review Order — Pickup is a **layout-only** Draft: no calculations, no SST / voucher / payment / time-slot / order rules, clearly labelled neutral sample data, nothing treated as a business rule. Screens without UI stay undesigned. Store Selection's two titles ("Select Your Store" / "Select Your Outlet") are kept per-state, not unified, per the Reference's own inconsistency.

**Major To Verify:** Store vs Outlet wording; "Add To Cart" vs "Place the order" priority; weight-based pricing; nearest-store rule; cart total behavior (Search Results' total does not match its 3 sample rows, reproduced as-is); payment methods and return screens; Pay At Outlet scope; order statuses (Backend Dependency Unknown).

**Shared components used now:** `app-shell`, `app-header` (`back-title`), `icon-button`, `image-placeholder`, `button`. New (Batch 6): `store-card` (one card, two containers: `--scroll` map / `--stack` list; `--selected`).

**Reference quirks:** sample data is not real ("MacBook Neo", a pig-head photo); Review Order figures are inconsistent (item RM 15.90, Pay RM 39.30) and payment rows have labels but no values; map view is a flat grey area with a pin; the delivery Shop variant is in `DELIVERY-FUTURE.md`.

**Authoritative sources:** `APP-STRUCTURE.md` § 8, 9, 12, 16; `SCREEN-INVENTORY.md` § 4.4, 4.5, 4.8, 4.13; notes in `shop-ordering.js`.

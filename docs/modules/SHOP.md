# Module context: Shop & Ordering
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** store selection, product search, product detail, checkout (Pickup), payment returns, orders.

**Explorer keys** (`shop-ordering.js`)
- With Reference: `shop-and-ordering/store-selection/{map-view,list-view}` (MP-CHECKOUT-006), `shop-and-ordering/search-results` (MP-SHOP-005), `shop-and-ordering/product-detail` (MP-PRODUCT-001), `shop-and-ordering/checkout/review-order-pickup` (MP-CHECKOUT-001).
- No UI supplied: `checkout/payment-failed` (MP-CHECKOUT-010), `checkout/payment-success`, `checkout/pay-at-outlet`, `orders/order-history` (MP-ORDER-003), `orders/order-status-detail` (MP-ORDER-004).

**Status:** Reference only. **Batch 6 planned, not started.**

**Approved decisions (D-05):** Review Order — Pickup becomes a **layout-only** Draft candidate: no calculations, no SST / voucher / payment / time-slot / order rules, clearly labelled neutral sample data, nothing treated as a business rule. Screens without UI stay undesigned.

**Major To Verify:** Store vs Outlet wording; "Add To Cart" vs "Place the order" priority; weight-based pricing; nearest-store rule; cart total behavior; payment methods and return screens; Pay At Outlet scope; order statuses (Backend Dependency Unknown).

**Shared components:** existing: `app-shell`, `app-header`, `bottom-nav-reference`, `image-placeholder`, `bottom-sheet`. **Planned (build at first use):** `outlet-card` (list / map-card), `map-placeholder`, `search-field`, `select-field`, `product-row`, `media-hero`, `quantity-stepper`, `status-banner`, `key-value-row`, `sticky-action-bar` (`total + action`), chip `option`.

**Reference quirks:** sample data is not real ("MacBook Neo", a pig-head photo); Review Order figures are inconsistent (item RM 15.90, Pay RM 39.30) and payment rows have labels but no values; map view is a flat grey area with a pin; the delivery Shop variant is in `DELIVERY-FUTURE.md`.

**Authoritative sources:** `APP-STRUCTURE.md` § 8, 9, 12, 16; `SCREEN-INVENTORY.md` § 4.4, 4.5, 4.8, 4.13; notes in `shop-ordering.js`.

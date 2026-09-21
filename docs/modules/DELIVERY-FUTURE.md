# Module context: Delivery (Future Scope)
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** delivery ordering and address management. **Future Scope**: not part of Current Scope.

**Explorer keys** (`delivery-future.js`): `delivery-future-scope/delivery-shop`, `delivery-future-scope/address/{saved-addresses,selected-address,edit-address}`, `delivery-future-scope/address/new-address/{empty,filled}` (MP-CHECKOUT-003 / 004 / 005).

**Status:** Reference only (6 entries). **No Draft. Built last, and only if the owner unlocks Future Scope.**

**Approved decisions:** Delivery stays inert wherever it already appears (Home tile, Fulfilment Selector row): Reference look kept, `aria-disabled`, not focusable, no navigation, no added copy. Do not build Delivery Drafts, and do not add Delivery destinations elsewhere.

**Major To Verify:** whether and when Delivery enters scope; delivery rules, fees, areas (CMS Rule Required); address data model and map provider; the "Preparing orders" banner logic.

**Shared components (if unlocked):** would reuse `choice-row`, `text-field`, `search-field`, `select-field`, `map-placeholder`, `product-row`, `status-banner`, `sticky-action-bar`; only `category-rail` would be new. Classification would move from D to B.

**Reference quirks:** the delivery Shop is a variant of Shop with a vertical category rail and a "Pick up / Delivery" toggle; the address list uses radio circles with edit and delete icons; the address form places a map above the fields.

**Authoritative sources:** `DESIGN-EXPLORER-IMPLEMENTATION.md` § 20; `APP-STRUCTURE.md` § 12.2 (Address); `SCREEN-INVENTORY.md` § 4.8; notes in `delivery-future.js`.

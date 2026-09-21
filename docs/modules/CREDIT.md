# Module context: Membership / Credit
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** My Credit balance and history, transaction and date filters, Top-Up (amount, payment method, bank), payment processing; Member Card entry.

**Explorer keys**
- `membership-credit.js`: `membership/credit/my-credit/{all-transactions,buy-product,order-refund,top-up,date-filter-applied}`; `membership/credit/transaction-type-filter/{all-types,buy-product,order-refund,top-up}`; `membership/credit/date-range-filter/{default,selected,complete}`; `membership/credit/credit-description`; `membership/credit/top-up-credit/payment-method/{default,online-banking}`; `.../select-bank/{default,search,selected}`; `.../processing`; `.../external-bank-redirect` (External UI).
- `membership-member-card.js`: `membership/member-card-member-qr` (MP-MEMBER-002, no UI supplied).

**Status:** Reference only (20 entries; Member Card has none). **Batch 5 planned, not started.**

**Approved decisions:** static sample values only; no amount, fee, limit or gateway logic; external bank redirect is third-party UI and stays Reference-only; Member Card needs a product brief before any Draft.

**Major To Verify:** "Pay At Outlet" meaning; Top-Up presets, payment methods, limits, validation, gateway (Payex) and "Powered by" mark usage; bank list source and logos; date-range limits and "today"; Credit Description content (CMS Rule Required); currency display (balance has no symbol, rows show "RM"); negative-amount formatting.

**Shared components:** existing: `bottom-sheet`, `overlay`, `app-shell`, `app-header` (`back-title`), `state-panel`, `chip`, `rich-content`. **Planned:** `record-row` (transaction), `select-field` (All types / All dates), `choice-row` (transaction type, payment method, bank), `date-range-picker`, `amount-input`, `search-field`, `sticky-action-bar` (Pay At Outlet + Top-Up), state-panel `processing`, chip `option` role.

**Reference quirks:** most credit screens are partial-screen sheet captures (capture size To Verify); the five My Credit states share one page; Credit Description and the Point Rules sheet reuse placeholder text ("Introduction / You haven't collected any coupon or voucher yet"); the calendar greys dates after the selected end.

**Authoritative sources:** `APP-STRUCTURE.md` § 13.2, 13.6; `SCREEN-INVENTORY.md` § 4.9; notes in `membership-credit.js`.

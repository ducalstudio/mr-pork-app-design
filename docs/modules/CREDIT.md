# Module context: Membership / Credit
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** My Credit balance and history, transaction and date filters, Top-Up (amount, payment method, bank), payment processing; Member Card entry.

**Explorer keys**
- `membership-credit.js`: `membership/credit/my-credit/{all-transactions,buy-product,order-refund,top-up,date-filter-applied}`; `membership/credit/transaction-type-filter/{all-types,buy-product,order-refund,top-up}`; `membership/credit/date-range-filter/{default,selected,complete}`; `membership/credit/credit-description`; `membership/credit/top-up-credit/payment-method/{default,online-banking}`; `.../select-bank/{default,search,selected}`; `.../processing`; `.../external-bank-redirect` (External UI).
- `membership-member-card.js`: `membership/member-card-member-qr` (MP-MEMBER-002, no UI supplied).

**Status:** Draft built for all 19 Current-Scope screens with Reference (`external-bank-redirect` stays Reference-only, External UI, correctly untouched). 7 prototypes: `prototypes/credit/MP-MEMBER-009/` (state-driven, covers the 5 My Credit entries), `transaction-type-filter/` (state-driven, 4 entries), `date-range-filter/` (state-driven calendar, 3 entries), `credit-description/`, `top-up-credit/payment-method/` (state-driven, 2 entries), `top-up-credit/select-bank/` (state-driven, 3 entries), `top-up-credit/processing/`. Batch 5 complete, verified 621/621, uncommitted pending checkpoint. Member Card (`membership-member-card.js`) still has no UI supplied — correctly untouched, not invented.

**Approved decisions:** static sample values only; no amount, fee, limit or gateway logic; external bank redirect is third-party UI and stays Reference-only; Member Card needs a product brief before any Draft. The calendar (Date Selection) is static sample markup for July 2026, not a real date computation. "Confirm" on Select Bank and Top-Up's payment-method sheet reuse the "pale / disabled-looking, not a real disabled state" convention (grey until a choice is made, red once one is).

**Major To Verify:** "Pay At Outlet" meaning; Top-Up presets, payment methods, limits, validation, gateway (Payex) and "Powered by" mark usage (Draft: reproduced as text, not a real vendor integration); bank list source and logos; date-range limits and "today"; Credit Description content (CMS Rule Required, reuses the same placeholder-filler pattern as Point Reward Rules); currency display (balance has no symbol, rows show "RM"); negative-amount formatting; Credit transaction sample sign inconsistencies (known review item).

**Shared components used now:** `bottom-sheet` (`--floating`), `overlay`, `app-shell` (`--band`), `app-header` (`back-title`), `state-panel`, `rich-content`, `button` (+ `--primary`), `icon-button`. New (Batch 5): `radio-row` (label + red radio, real `<input>`).

**Reference quirks:** most credit screens are partial-screen sheet captures (capture size To Verify); the five My Credit states share one page; Credit Description and the Point Rules sheet reuse placeholder text ("Introduction / You haven't collected any coupon or voucher yet"); the calendar greys dates after the selected end.

**Authoritative sources:** `APP-STRUCTURE.md` § 13.2, 13.6; `SCREEN-INVENTORY.md` § 4.9; notes in `membership-credit.js`.

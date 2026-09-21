# Module context: Rewards
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** the member's coupons / vouchers (My Rewards), voucher detail, and redemption sheets.

**Explorer keys** (`rewards.js`)
- `rewards/my-rewards/valid/with-rewards/variant-a`, `.../variant-b`, `rewards/my-rewards/valid/empty`, `rewards/my-rewards/invalid/{with-rewards,empty}`, `rewards/my-rewards/used/{with-rewards,empty}` (MP-REWARD-005).
- `rewards/voucher-detail` (MP-REWARD-006); `rewards/redemption/{active-qr-code,successful,failed}`.

**Status:** Reference only (all 11). **Batch 4 planned, not started** (with Points).

**Approved decisions:** D-07: My Rewards Valid Variant A is the primary Draft; Variant B reuses the same prototype where visually identical (confirm with `cmp` on the two PNGs before assuming).

**Major To Verify:** Reward / Coupon / Voucher terminology; "Invalid" tab naming; promo-code Claim rules (CMS Rule Required); Use Now destination; QR content, countdown and refresh (Backend Dependency Unknown); success message copy ("You have successfully redeem"); voucher T&C source.

**Shared components:** existing and reusable: `chip` (tab), `state-panel` (`empty`), `bottom-sheet`, `rich-content`, `app-shell`, `app-header` (`back-title`), `bottom-nav-reference`. **Planned (build at first use):** `voucher-card` (list / hero), `key-value-row`, `qr-panel` (placeholder QR), `sticky-action-bar`, `text-field` `with-action` (promo code + Claim), `button`.

**Reference quirks:** My Rewards uses the red-tinted "Valid" tab (different from Notifications' solid red chips); list ends with "- THE END -"; redemption sheets are partial captures; voucher T&C is cut off with a dotted line; sample voucher text (20% OFF) is placeholder.

**Authoritative sources:** `APP-STRUCTURE.md` § 14; `SCREEN-INVENTORY.md` § 4.10; `versions.reference` notes in `rewards.js`.

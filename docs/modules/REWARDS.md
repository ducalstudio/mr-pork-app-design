# Module context: Rewards
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** the member's coupons / vouchers (My Rewards), voucher detail, and redemption sheets.

**Explorer keys** (`rewards.js`)
- `rewards/my-rewards/valid/with-rewards/variant-a`, `.../variant-b`, `rewards/my-rewards/valid/empty`, `rewards/my-rewards/invalid/{with-rewards,empty}`, `rewards/my-rewards/used/{with-rewards,empty}` (MP-REWARD-005).
- `rewards/voucher-detail` (MP-REWARD-006); `rewards/redemption/{active-qr-code,successful,failed}`.

**Status:** Reference: all 11. Draft: **all 11** — 3 prototypes: `prototypes/rewards/MP-REWARD-005/` (state-driven, 6 tab/mode states, covers the 7 My Rewards entries), `prototypes/rewards/MP-REWARD-006/` (Voucher Detail), `prototypes/rewards/redemption/` (state-driven, covers the 3 redemption entries). Batch 4 complete, verified 609/609 (with Authentication + Points in the same run), uncommitted pending checkpoint.

**Approved decisions:** D-07: My Rewards Valid Variant A is the primary Draft; Variant B reuses the same prototype (the two PNGs are visually identical). My Rewards tabs use a tonal pill selected style (pale pink fill + red text), overridden at screen level rather than the Notifications chip's solid-red selected style — fidelity over reuse. Redemption sheets (partial captures, no position evidence) are centered floating dialogs, following the Fulfilment Selector precedent (see `bottom-sheet/spec.md`), dimmed over Voucher Detail.

**Major To Verify:** Reward / Coupon / Voucher terminology; "Invalid" tab naming; promo-code Claim rules (CMS Rule Required); Use Now destination; QR content, countdown and refresh (Backend Dependency Unknown, countdown does not run in the Draft); success message copy ("You have successfully redeem"); voucher T&C source.

**Shared components used now:** `chip` (tab), `state-panel` (`empty`), `bottom-sheet` (`--floating`), `rich-content`, `app-shell`, `app-header` (`back-title`), `bottom-nav-reference` (Rewards selected), `button` (+ `--primary`), `link-button` (+ `--muted`), `image-placeholder` (QR placeholder). New (Batch 4): `voucher-card` (default bordered + CTA; `--spent` grey, no CTA).

**Reference quirks:** My Rewards uses the red-tinted "Valid" tab (different from Notifications' solid red chips); list ends with "- THE END -"; redemption sheets are partial captures; voucher T&C is cut off with a dotted line; sample voucher text (20% OFF) is placeholder.

**Authoritative sources:** `APP-STRUCTURE.md` § 14; `SCREEN-INVENTORY.md` § 4.10; `versions.reference` notes in `rewards.js`.

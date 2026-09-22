# Module context: Membership / Points
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** point-reward detail and redemption entry, reward rules, exchange records, points summary and history.

**Explorer keys** (`membership-points.js`)
- `membership/points/point-reward-detail/{redeemable,insufficient-points}` (MP-REWARD-002); `membership/points/point-reward-rules`; `membership/points/exchange-records`.
- No UI supplied: `membership/points/points-summary` (MP-MEMBER-006), `membership/points/points-earning-history` (MP-MEMBER-007).

**Status:** Draft built for all 4 screens with Reference (`prototypes/points/MP-REWARD-002/` state-driven, covers redeemable + insufficient; `prototypes/points/point-reward-rules/`; `prototypes/points/exchange-records/`). Batch 4 complete, verified 609/609 (with Authentication + Rewards in the same run), uncommitted pending checkpoint. The two no-UI entries (`points-summary`, `points-earning-history`) remain **UI NOT SUPPLIED / BLOCKED**, unchanged — not built, per the existing note in `membership-points.js`.

**Approved decisions:** do not invent points conversion, limits or eligibility; sample numbers are labelled sample. Summary / History need a product brief or Reference first (still blocked). Point Reward Rules (a partial sheet capture, no position evidence) is a centered floating dialog, following the Fulfilment Selector precedent (see `bottom-sheet/spec.md`), dimmed over Point Reward Detail. "Insufficient Points" is a real `button--neutral` marked `aria-disabled`, with its opacity overridden back to 1 so it stays the Reference's solid grey (not the component's default disabled dimming) — fidelity over the component default.

**Major To Verify:** disabled vs blocked wording for insufficient points; rule text (CMS Rule Required, includes Reference placeholder filler reused verbatim — "1. Introduction / You haven't collected any coupon or voucher yet." repeated); exchange status vocabulary beyond "successful / cancel"; Home links to Points Summary, which has no design (still blocked).

**Shared components used now:** `bottom-sheet` (`--floating`), `rich-content`, `app-shell` (`--band`), `app-header` (`back-title`), `button` (+ `--primary` / `--neutral`).

**Reference quirks:** the reward card has a vertical "MR.PORK" mark and large "RM 3 OFF" type; sample T&C contains typos ("Not apll"); exchange status "successful" is amber and "cancel" is black; rules sheet is a partial capture.

**Authoritative sources:** `APP-STRUCTURE.md` § 13.4; `SCREEN-INVENTORY.md` § 4.9; notes in `membership-points.js`.

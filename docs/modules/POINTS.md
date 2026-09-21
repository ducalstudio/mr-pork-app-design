# Module context: Membership / Points
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** point-reward detail and redemption entry, reward rules, exchange records, points summary and history.

**Explorer keys** (`membership-points.js`)
- `membership/points/point-reward-detail/{redeemable,insufficient-points}` (MP-REWARD-002); `membership/points/point-reward-rules`; `membership/points/exchange-records`.
- No UI supplied: `membership/points/points-summary` (MP-MEMBER-006), `membership/points/points-earning-history` (MP-MEMBER-007).

**Status:** Reference only for four entries; two have no UI. **Batch 4 planned, not started** (with Rewards).

**Approved decisions:** do not invent points conversion, limits or eligibility; sample numbers are labelled sample. Summary / History need a product brief or Reference first.

**Major To Verify:** disabled vs blocked wording for insufficient points (the insufficient Reference was not individually inspected by the last audit; open it before building); rule text (CMS Rule Required); exchange status vocabulary beyond "successful / cancel"; Home links to Points Summary, which has no design.

**Shared components:** existing: `bottom-sheet`, `rich-content`, `app-shell`, `app-header`. **Planned:** `voucher-card` (`points-reward`), `key-value-row`, `sticky-action-bar`, `record-row` (exchange records).

**Reference quirks:** the reward card has a vertical "MR.PORK" mark and large "RM 3 OFF" type; sample T&C contains typos ("Not apll"); exchange status "successful" is amber and "cancel" is black; rules sheet is a partial capture.

**Authoritative sources:** `APP-STRUCTURE.md` § 13.4; `SCREEN-INVENTORY.md` § 4.9; notes in `membership-points.js`.

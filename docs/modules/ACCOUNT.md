# Module context: Account
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** the Account tab: profile summary, account menu, header actions. (Logout confirmation is in `AUTHENTICATION.md`.)

**Explorer keys** (`home-navigation.js`)
- `home-and-navigation/account-home/variant-a`, `home-and-navigation/account-home/variant-b` (both MP-ACCOUNT-001).

**Status**
- Reference: both. Draft: one prototype `prototypes/home-navigation/MP-ACCOUNT-001/` with `?state=variant-a|variant-b` (Migration Batch 2). Batch 2 was implemented and is awaiting owner visual review; check `git log` / `git status` for commit state. Draft / Provisional, not Approved.

**Approved decisions**
- Variant A is the primary Draft; Variant B reuses the same prototype (the two Reference PNGs are byte-identical).
- Menu items are only those visible in the Reference; nothing below "General" is invented.
- Single column at every tier; centered column cap about 600 / 720; bottom bar full-width with a centered inner container; `--shell-gutter` 20px from Reference evidence.

**Major To Verify:** which variant is authoritative; everything below "General"; targets of every menu row; what EN (language) does; whether the profile stats are tappable; edit-profile behavior; maximum name and value lengths (known 375 limit for about 14+ character Credit values); unread-dot rule; Delivery-related items would be Future Scope.

**Shared components used:** `app-shell`, `app-header` (`account-actions`), `profile-card`, `summary-stat` (`inline`), `section-header` (`menu`), `menu-row`, `image-placeholder` (`circle`), `icon-button`, `bottom-nav-reference` (Account selected).

**Reference quirks:** header has no title and no tan band; stats show the value above the label; the Reference is cut off at the "General" heading; sample profile photo and name are placeholder content.

**Authoritative sources:** `APP-STRUCTURE.md` § 18; `SCREEN-INVENTORY.md` § 4.15; Draft notes in `home-navigation.js`.

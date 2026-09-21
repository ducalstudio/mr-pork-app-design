# Module context: Notifications
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** the notification list with four tabs and read / unread / empty states.

**Explorer keys** (`notifications.js`): 12 entries `notifications/notification-list/<tab>/<mode>` with tab = `all | orders | promotions | announcements` and mode = `unread-content | read | empty` (all MP-NOTIFY-001).

**Status**
- Reference: all 12. Draft: ONE state-driven prototype `prototypes/notifications/MP-NOTIFY-001/index.html?state=<tab>-<mode>` (Migration Batch 2, awaiting owner visual review; check git for commit state). Sample data in `states/samples.js`. Draft / Provisional.

**Approved decisions**
- Keep the Reference spelling "Annoucements" and flag it Copy To Verify (do not silently correct).
- Deep-link behavior To Verify; "Mark all as read" is Backend Dependency Unknown (not wired).
- Read / unread styling follows Reference evidence (dark vs muted text) and is marked To Verify.
- Single column list at every tier (no grid); centered column cap about 600 / 720.

**Major To Verify:** tab set vs `APP-STRUCTURE.md`; deep links; what read / unread mean; why "Mark all as read" is red on All and black elsewhere; the call-to-action text (only on All / unread in the Reference); empty copy per tab; narrow-phone tab wrap vs scroll.

**Shared components used:** `app-shell`, `app-header` (`back-title`), `chip` (tab role), `notification-row`, `state-panel` (`empty`), `image-placeholder` (`circle`), `icon-button`.

**Reference quirks:** all sample copy is placeholder ("It's Mother Day", "Call to Action", "xxxx"); row 2 wraps mid-word (a design artefact); thumbnails are solid red discs; tan header band.

**Authoritative sources:** `APP-STRUCTURE.md` § 17; `SCREEN-INVENTORY.md` § 4.14; Draft notes in `notifications.js`.

/* Notifications — screen data (Reference designs). Metadata only; no business logic.
 * screen = canonical product definition; versions.* = design-specific definition (+ optional overrides). */
import { defineModule, screen, devices, phase1 } from "../helpers.js";

export default defineModule({
  id: "notifications",
  label: "Notifications",
  screens: [
    screen({
      key: "notifications/notification-list/all/unread-content",
      id: "MP-NOTIFY-001",
      path: ["Notifications", "Notification List", "All", "Unread / Content"],
      scope: "Current Scope",
      state: "Unread / Content",
      flow: {
        entryPoint: "Header notification bell",
        nextStep: "Related destination (order, promotion, announcement — To Verify)"
      },
      dependencies: ["CMS: Notifications", "CMS: Promotions"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing notification list, All tab — Unread / Content state.",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [],
          notes: [
            "Tabs shown differ from the notification types in APP-STRUCTURE.md; reconciliation is To Verify."
          ],
          devices: devices({ mobile: phase1("notifications/MP-NOTIFY-001_all-unread_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/notifications/MP-NOTIFY-001/index.html?state=all-unread",
          description: "Responsive Draft of the notification list: All tab, Unread / content state. One shared state-driven prototype (?state=all-unread).",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [
            "Switch tab",
            "Mark all as read (Backend Dependency Unknown)"
          ],
          notes: [
            "ONE responsive prototype for all 12 notification states, state-driven: the entry opens the same page with ?state=<tab>-<mode> (all | orders | promotions | announcements, unread | read | empty). Tapping a tab in the prototype keeps the current mode. No screen HTML is duplicated.",
            "Copy To Verify: the fourth tab is labelled 'Annoucements' exactly as in the Reference. It is an obvious spelling error and is deliberately NOT corrected in this pass; it is not approved final copy.",
            "SAMPLE DATA / NOT BUSINESS RULE: the strings are the Reference's own placeholder copy ('It's Mother Day', 'Make your day extra special with a xxxx', 'Call to Action', '22 Jun'), kept verbatim because visible text length drives wrapping, row height and density. They are not content and not a business rule.",
            "Notification tap destination (deep link) is To Verify; rows record a placeholder destination only and nothing navigates. 'Mark all as read' is not wired: Backend Dependency Unknown.",
            "Read / unread styling follows the Reference evidence: unread rows use dark text, read rows use muted grey text (the thumbnail and date look the same). What counts as read and how it is set is To Verify. A visually hidden 'Read.' / 'Unread.' prefix is added for assistive technology (Draft addition).",
            "Reference evidence kept and marked To Verify: 'Mark all as read' is red on all-unread and all-read, black on orders-unread, promotions and announcements, and ABSENT on orders-read (its list then starts 32px higher); the call-to-action text appears only on all-unread, right-aligned with a per-row inset. Why these vary is To Verify.",
            "Row geometry is content-driven and follows the Reference at 440: single rows are 70px; the wrapped row (a narrow sample row: the title breaks inside the word at about 66px, the body wraps at about 124px in Inter) is 98px. Per-state structure was verified against all twelve Reference screenshots: the wrapped row appears in all-unread and every read state, not in orders / promotions / announcements unread. Rows never overflow; the date column never shrinks.",
            "Intentional differences vs Reference: row thumbnails are the Reference's solid red disc, marked as a temporary placeholder; chips are 25px high visually inside a 44px touch target; 'Mark all as read' keeps its Reference position inside a 44px hit area that overlaps the chips' lower hit padding by about 5px; on narrow phones (375) the four tabs wrap to a second line; on medium / expanded the list stays a single centered column capped at about 600 / 720 (no grid).",
            "TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS: the back glyph and the row thumbnails.",
            "Tab set differs from the notification types in APP-STRUCTURE.md; reconciliation remains To Verify (unchanged).",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 2, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). The Reference tan band over the status-bar region is kept where shown; its meaning is To Verify."
          ]
        }
      }
    }),
    screen({
      key: "notifications/notification-list/all/read",
      id: "MP-NOTIFY-001",
      path: ["Notifications", "Notification List", "All", "Read"],
      scope: "Current Scope",
      state: "Read",
      flow: {
        entryPoint: "Header notification bell",
        nextStep: "Related destination (order, promotion, announcement — To Verify)"
      },
      dependencies: ["CMS: Notifications", "CMS: Promotions"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing notification list, All tab — Read state.",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [],
          notes: [
            "Tabs shown differ from the notification types in APP-STRUCTURE.md; reconciliation is To Verify."
          ],
          devices: devices({ mobile: phase1("notifications/MP-NOTIFY-001_all-read_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/notifications/MP-NOTIFY-001/index.html?state=all-read",
          description: "Responsive Draft of the notification list: All tab, Read state. One shared state-driven prototype (?state=all-read).",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [
            "Switch tab",
            "Mark all as read (Backend Dependency Unknown)"
          ],
          notes: [
            "ONE responsive prototype for all 12 notification states, state-driven: the entry opens the same page with ?state=<tab>-<mode> (all | orders | promotions | announcements, unread | read | empty). Tapping a tab in the prototype keeps the current mode. No screen HTML is duplicated.",
            "Copy To Verify: the fourth tab is labelled 'Annoucements' exactly as in the Reference. It is an obvious spelling error and is deliberately NOT corrected in this pass; it is not approved final copy.",
            "SAMPLE DATA / NOT BUSINESS RULE: the strings are the Reference's own placeholder copy ('It's Mother Day', 'Make your day extra special with a xxxx', 'Call to Action', '22 Jun'), kept verbatim because visible text length drives wrapping, row height and density. They are not content and not a business rule.",
            "Notification tap destination (deep link) is To Verify; rows record a placeholder destination only and nothing navigates. 'Mark all as read' is not wired: Backend Dependency Unknown.",
            "Read / unread styling follows the Reference evidence: unread rows use dark text, read rows use muted grey text (the thumbnail and date look the same). What counts as read and how it is set is To Verify. A visually hidden 'Read.' / 'Unread.' prefix is added for assistive technology (Draft addition).",
            "Reference evidence kept and marked To Verify: 'Mark all as read' is red on all-unread and all-read, black on orders-unread, promotions and announcements, and ABSENT on orders-read (its list then starts 32px higher); the call-to-action text appears only on all-unread, right-aligned with a per-row inset. Why these vary is To Verify.",
            "Row geometry is content-driven and follows the Reference at 440: single rows are 70px; the wrapped row (a narrow sample row: the title breaks inside the word at about 66px, the body wraps at about 124px in Inter) is 98px. Per-state structure was verified against all twelve Reference screenshots: the wrapped row appears in all-unread and every read state, not in orders / promotions / announcements unread. Rows never overflow; the date column never shrinks.",
            "Intentional differences vs Reference: row thumbnails are the Reference's solid red disc, marked as a temporary placeholder; chips are 25px high visually inside a 44px touch target; 'Mark all as read' keeps its Reference position inside a 44px hit area that overlaps the chips' lower hit padding by about 5px; on narrow phones (375) the four tabs wrap to a second line; on medium / expanded the list stays a single centered column capped at about 600 / 720 (no grid).",
            "TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS: the back glyph and the row thumbnails.",
            "Tab set differs from the notification types in APP-STRUCTURE.md; reconciliation remains To Verify (unchanged).",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 2, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). The Reference tan band over the status-bar region is kept where shown; its meaning is To Verify."
          ]
        }
      }
    }),
    screen({
      key: "notifications/notification-list/all/empty",
      id: "MP-NOTIFY-001",
      path: ["Notifications", "Notification List", "All", "Empty"],
      scope: "Current Scope",
      state: "Empty",
      flow: {
        entryPoint: "Header notification bell",
        nextStep: "Related destination (order, promotion, announcement — To Verify)"
      },
      dependencies: ["CMS: Notifications", "CMS: Promotions"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing notification list, All tab — Empty state.",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [],
          notes: [
            "Tabs shown differ from the notification types in APP-STRUCTURE.md; reconciliation is To Verify."
          ],
          devices: devices({ mobile: phase1("notifications/MP-NOTIFY-001_all-empty_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/notifications/MP-NOTIFY-001/index.html?state=all-empty",
          description: "Responsive Draft of the notification list: All tab, Empty state. One shared state-driven prototype (?state=all-empty).",
          primaryAction: "None (empty state).",
          secondaryActions: [
            "Switch tab"
          ],
          notes: [
            "ONE responsive prototype for all 12 notification states, state-driven: the entry opens the same page with ?state=<tab>-<mode> (all | orders | promotions | announcements, unread | read | empty). Tapping a tab in the prototype keeps the current mode. No screen HTML is duplicated.",
            "Copy To Verify: the fourth tab is labelled 'Annoucements' exactly as in the Reference. It is an obvious spelling error and is deliberately NOT corrected in this pass; it is not approved final copy.",
            "SAMPLE DATA / NOT BUSINESS RULE: the strings are the Reference's own placeholder copy ('It's Mother Day', 'Make your day extra special with a xxxx', 'Call to Action', '22 Jun'), kept verbatim because visible text length drives wrapping, row height and density. They are not content and not a business rule.",
            "Notification tap destination (deep link) is To Verify; rows record a placeholder destination only and nothing navigates. 'Mark all as read' is not wired: Backend Dependency Unknown.",
            "Read / unread styling follows the Reference evidence: unread rows use dark text, read rows use muted grey text (the thumbnail and date look the same). What counts as read and how it is set is To Verify. A visually hidden 'Read.' / 'Unread.' prefix is added for assistive technology (Draft addition).",
            "Reference evidence kept and marked To Verify: 'Mark all as read' is red on all-unread and all-read, black on orders-unread, promotions and announcements, and ABSENT on orders-read (its list then starts 32px higher); the call-to-action text appears only on all-unread, right-aligned with a per-row inset. Why these vary is To Verify.",
            "Row geometry is content-driven and follows the Reference at 440: single rows are 70px; the wrapped row (a narrow sample row: the title breaks inside the word at about 66px, the body wraps at about 124px in Inter) is 98px. Per-state structure was verified against all twelve Reference screenshots: the wrapped row appears in all-unread and every read state, not in orders / promotions / announcements unread. Rows never overflow; the date column never shrinks.",
            "Intentional differences vs Reference: row thumbnails are the Reference's solid red disc, marked as a temporary placeholder; chips are 25px high visually inside a 44px touch target; 'Mark all as read' keeps its Reference position inside a 44px hit area that overlaps the chips' lower hit padding by about 5px; on narrow phones (375) the four tabs wrap to a second line; on medium / expanded the list stays a single centered column capped at about 600 / 720 (no grid).",
            "TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS: the back glyph and the row thumbnails.",
            "Tab set differs from the notification types in APP-STRUCTURE.md; reconciliation remains To Verify (unchanged).",
            "Empty copy ('This page is empty.' / 'Any updates or alerts we send will be saved right here.') is the Reference wording. Whether empty states differ per tab is To Verify.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 2, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). The Reference tan band over the status-bar region is kept where shown; its meaning is To Verify."
          ]
        }
      }
    }),
    screen({
      key: "notifications/notification-list/orders/unread-content",
      id: "MP-NOTIFY-001",
      path: ["Notifications", "Notification List", "Orders", "Unread / Content"],
      scope: "Current Scope",
      state: "Unread / Content",
      flow: {
        entryPoint: "Header notification bell",
        nextStep: "Related destination (order, promotion, announcement — To Verify)"
      },
      dependencies: ["CMS: Notifications", "CMS: Promotions"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing notification list, Orders tab — Unread / Content state.",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [],
          notes: [
            "Tabs shown differ from the notification types in APP-STRUCTURE.md; reconciliation is To Verify."
          ],
          devices: devices({ mobile: phase1("notifications/MP-NOTIFY-001_orders-unread_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/notifications/MP-NOTIFY-001/index.html?state=orders-unread",
          description: "Responsive Draft of the notification list: Orders tab, Unread / content state. One shared state-driven prototype (?state=orders-unread).",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [
            "Switch tab",
            "Mark all as read (Backend Dependency Unknown)"
          ],
          notes: [
            "ONE responsive prototype for all 12 notification states, state-driven: the entry opens the same page with ?state=<tab>-<mode> (all | orders | promotions | announcements, unread | read | empty). Tapping a tab in the prototype keeps the current mode. No screen HTML is duplicated.",
            "Copy To Verify: the fourth tab is labelled 'Annoucements' exactly as in the Reference. It is an obvious spelling error and is deliberately NOT corrected in this pass; it is not approved final copy.",
            "SAMPLE DATA / NOT BUSINESS RULE: the strings are the Reference's own placeholder copy ('It's Mother Day', 'Make your day extra special with a xxxx', 'Call to Action', '22 Jun'), kept verbatim because visible text length drives wrapping, row height and density. They are not content and not a business rule.",
            "Notification tap destination (deep link) is To Verify; rows record a placeholder destination only and nothing navigates. 'Mark all as read' is not wired: Backend Dependency Unknown.",
            "Read / unread styling follows the Reference evidence: unread rows use dark text, read rows use muted grey text (the thumbnail and date look the same). What counts as read and how it is set is To Verify. A visually hidden 'Read.' / 'Unread.' prefix is added for assistive technology (Draft addition).",
            "Reference evidence kept and marked To Verify: 'Mark all as read' is red on all-unread and all-read, black on orders-unread, promotions and announcements, and ABSENT on orders-read (its list then starts 32px higher); the call-to-action text appears only on all-unread, right-aligned with a per-row inset. Why these vary is To Verify.",
            "Row geometry is content-driven and follows the Reference at 440: single rows are 70px; the wrapped row (a narrow sample row: the title breaks inside the word at about 66px, the body wraps at about 124px in Inter) is 98px. Per-state structure was verified against all twelve Reference screenshots: the wrapped row appears in all-unread and every read state, not in orders / promotions / announcements unread. Rows never overflow; the date column never shrinks.",
            "Intentional differences vs Reference: row thumbnails are the Reference's solid red disc, marked as a temporary placeholder; chips are 25px high visually inside a 44px touch target; 'Mark all as read' keeps its Reference position inside a 44px hit area that overlaps the chips' lower hit padding by about 5px; on narrow phones (375) the four tabs wrap to a second line; on medium / expanded the list stays a single centered column capped at about 600 / 720 (no grid).",
            "TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS: the back glyph and the row thumbnails.",
            "Tab set differs from the notification types in APP-STRUCTURE.md; reconciliation remains To Verify (unchanged).",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 2, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). The Reference tan band over the status-bar region is kept where shown; its meaning is To Verify."
          ]
        }
      }
    }),
    screen({
      key: "notifications/notification-list/orders/read",
      id: "MP-NOTIFY-001",
      path: ["Notifications", "Notification List", "Orders", "Read"],
      scope: "Current Scope",
      state: "Read",
      flow: {
        entryPoint: "Header notification bell",
        nextStep: "Related destination (order, promotion, announcement — To Verify)"
      },
      dependencies: ["CMS: Notifications", "CMS: Promotions"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing notification list, Orders tab — Read state.",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [],
          notes: [
            "Tabs shown differ from the notification types in APP-STRUCTURE.md; reconciliation is To Verify."
          ],
          devices: devices({ mobile: phase1("notifications/MP-NOTIFY-001_orders-read_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/notifications/MP-NOTIFY-001/index.html?state=orders-read",
          description: "Responsive Draft of the notification list: Orders tab, Read state. One shared state-driven prototype (?state=orders-read).",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [
            "Switch tab",
            "Mark all as read (Backend Dependency Unknown)"
          ],
          notes: [
            "ONE responsive prototype for all 12 notification states, state-driven: the entry opens the same page with ?state=<tab>-<mode> (all | orders | promotions | announcements, unread | read | empty). Tapping a tab in the prototype keeps the current mode. No screen HTML is duplicated.",
            "Copy To Verify: the fourth tab is labelled 'Annoucements' exactly as in the Reference. It is an obvious spelling error and is deliberately NOT corrected in this pass; it is not approved final copy.",
            "SAMPLE DATA / NOT BUSINESS RULE: the strings are the Reference's own placeholder copy ('It's Mother Day', 'Make your day extra special with a xxxx', 'Call to Action', '22 Jun'), kept verbatim because visible text length drives wrapping, row height and density. They are not content and not a business rule.",
            "Notification tap destination (deep link) is To Verify; rows record a placeholder destination only and nothing navigates. 'Mark all as read' is not wired: Backend Dependency Unknown.",
            "Read / unread styling follows the Reference evidence: unread rows use dark text, read rows use muted grey text (the thumbnail and date look the same). What counts as read and how it is set is To Verify. A visually hidden 'Read.' / 'Unread.' prefix is added for assistive technology (Draft addition).",
            "Reference evidence kept and marked To Verify: 'Mark all as read' is red on all-unread and all-read, black on orders-unread, promotions and announcements, and ABSENT on orders-read (its list then starts 32px higher); the call-to-action text appears only on all-unread, right-aligned with a per-row inset. Why these vary is To Verify.",
            "Row geometry is content-driven and follows the Reference at 440: single rows are 70px; the wrapped row (a narrow sample row: the title breaks inside the word at about 66px, the body wraps at about 124px in Inter) is 98px. Per-state structure was verified against all twelve Reference screenshots: the wrapped row appears in all-unread and every read state, not in orders / promotions / announcements unread. Rows never overflow; the date column never shrinks.",
            "Intentional differences vs Reference: row thumbnails are the Reference's solid red disc, marked as a temporary placeholder; chips are 25px high visually inside a 44px touch target; 'Mark all as read' keeps its Reference position inside a 44px hit area that overlaps the chips' lower hit padding by about 5px; on narrow phones (375) the four tabs wrap to a second line; on medium / expanded the list stays a single centered column capped at about 600 / 720 (no grid).",
            "TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS: the back glyph and the row thumbnails.",
            "Tab set differs from the notification types in APP-STRUCTURE.md; reconciliation remains To Verify (unchanged).",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 2, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). The Reference tan band over the status-bar region is kept where shown; its meaning is To Verify."
          ]
        }
      }
    }),
    screen({
      key: "notifications/notification-list/orders/empty",
      id: "MP-NOTIFY-001",
      path: ["Notifications", "Notification List", "Orders", "Empty"],
      scope: "Current Scope",
      state: "Empty",
      flow: {
        entryPoint: "Header notification bell",
        nextStep: "Related destination (order, promotion, announcement — To Verify)"
      },
      dependencies: ["CMS: Notifications", "CMS: Promotions"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing notification list, Orders tab — Empty state.",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [],
          notes: [
            "Tabs shown differ from the notification types in APP-STRUCTURE.md; reconciliation is To Verify."
          ],
          devices: devices({ mobile: phase1("notifications/MP-NOTIFY-001_orders-empty_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/notifications/MP-NOTIFY-001/index.html?state=orders-empty",
          description: "Responsive Draft of the notification list: Orders tab, Empty state. One shared state-driven prototype (?state=orders-empty).",
          primaryAction: "None (empty state).",
          secondaryActions: [
            "Switch tab"
          ],
          notes: [
            "ONE responsive prototype for all 12 notification states, state-driven: the entry opens the same page with ?state=<tab>-<mode> (all | orders | promotions | announcements, unread | read | empty). Tapping a tab in the prototype keeps the current mode. No screen HTML is duplicated.",
            "Copy To Verify: the fourth tab is labelled 'Annoucements' exactly as in the Reference. It is an obvious spelling error and is deliberately NOT corrected in this pass; it is not approved final copy.",
            "SAMPLE DATA / NOT BUSINESS RULE: the strings are the Reference's own placeholder copy ('It's Mother Day', 'Make your day extra special with a xxxx', 'Call to Action', '22 Jun'), kept verbatim because visible text length drives wrapping, row height and density. They are not content and not a business rule.",
            "Notification tap destination (deep link) is To Verify; rows record a placeholder destination only and nothing navigates. 'Mark all as read' is not wired: Backend Dependency Unknown.",
            "Read / unread styling follows the Reference evidence: unread rows use dark text, read rows use muted grey text (the thumbnail and date look the same). What counts as read and how it is set is To Verify. A visually hidden 'Read.' / 'Unread.' prefix is added for assistive technology (Draft addition).",
            "Reference evidence kept and marked To Verify: 'Mark all as read' is red on all-unread and all-read, black on orders-unread, promotions and announcements, and ABSENT on orders-read (its list then starts 32px higher); the call-to-action text appears only on all-unread, right-aligned with a per-row inset. Why these vary is To Verify.",
            "Row geometry is content-driven and follows the Reference at 440: single rows are 70px; the wrapped row (a narrow sample row: the title breaks inside the word at about 66px, the body wraps at about 124px in Inter) is 98px. Per-state structure was verified against all twelve Reference screenshots: the wrapped row appears in all-unread and every read state, not in orders / promotions / announcements unread. Rows never overflow; the date column never shrinks.",
            "Intentional differences vs Reference: row thumbnails are the Reference's solid red disc, marked as a temporary placeholder; chips are 25px high visually inside a 44px touch target; 'Mark all as read' keeps its Reference position inside a 44px hit area that overlaps the chips' lower hit padding by about 5px; on narrow phones (375) the four tabs wrap to a second line; on medium / expanded the list stays a single centered column capped at about 600 / 720 (no grid).",
            "TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS: the back glyph and the row thumbnails.",
            "Tab set differs from the notification types in APP-STRUCTURE.md; reconciliation remains To Verify (unchanged).",
            "Empty copy ('This page is empty.' / 'Any updates or alerts we send will be saved right here.') is the Reference wording. Whether empty states differ per tab is To Verify.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 2, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). The Reference tan band over the status-bar region is kept where shown; its meaning is To Verify."
          ]
        }
      }
    }),
    screen({
      key: "notifications/notification-list/promotions/unread-content",
      id: "MP-NOTIFY-001",
      path: ["Notifications", "Notification List", "Promotions", "Unread / Content"],
      scope: "Current Scope",
      state: "Unread / Content",
      flow: {
        entryPoint: "Header notification bell",
        nextStep: "Related destination (order, promotion, announcement — To Verify)"
      },
      dependencies: ["CMS: Notifications", "CMS: Promotions"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing notification list, Promotions tab — Unread / Content state.",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [],
          notes: [
            "Tabs shown differ from the notification types in APP-STRUCTURE.md; reconciliation is To Verify."
          ],
          devices: devices({ mobile: phase1("notifications/MP-NOTIFY-001_promotions-unread_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/notifications/MP-NOTIFY-001/index.html?state=promotions-unread",
          description: "Responsive Draft of the notification list: Promotions tab, Unread / content state. One shared state-driven prototype (?state=promotions-unread).",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [
            "Switch tab",
            "Mark all as read (Backend Dependency Unknown)"
          ],
          notes: [
            "ONE responsive prototype for all 12 notification states, state-driven: the entry opens the same page with ?state=<tab>-<mode> (all | orders | promotions | announcements, unread | read | empty). Tapping a tab in the prototype keeps the current mode. No screen HTML is duplicated.",
            "Copy To Verify: the fourth tab is labelled 'Annoucements' exactly as in the Reference. It is an obvious spelling error and is deliberately NOT corrected in this pass; it is not approved final copy.",
            "SAMPLE DATA / NOT BUSINESS RULE: the strings are the Reference's own placeholder copy ('It's Mother Day', 'Make your day extra special with a xxxx', 'Call to Action', '22 Jun'), kept verbatim because visible text length drives wrapping, row height and density. They are not content and not a business rule.",
            "Notification tap destination (deep link) is To Verify; rows record a placeholder destination only and nothing navigates. 'Mark all as read' is not wired: Backend Dependency Unknown.",
            "Read / unread styling follows the Reference evidence: unread rows use dark text, read rows use muted grey text (the thumbnail and date look the same). What counts as read and how it is set is To Verify. A visually hidden 'Read.' / 'Unread.' prefix is added for assistive technology (Draft addition).",
            "Reference evidence kept and marked To Verify: 'Mark all as read' is red on all-unread and all-read, black on orders-unread, promotions and announcements, and ABSENT on orders-read (its list then starts 32px higher); the call-to-action text appears only on all-unread, right-aligned with a per-row inset. Why these vary is To Verify.",
            "Row geometry is content-driven and follows the Reference at 440: single rows are 70px; the wrapped row (a narrow sample row: the title breaks inside the word at about 66px, the body wraps at about 124px in Inter) is 98px. Per-state structure was verified against all twelve Reference screenshots: the wrapped row appears in all-unread and every read state, not in orders / promotions / announcements unread. Rows never overflow; the date column never shrinks.",
            "Intentional differences vs Reference: row thumbnails are the Reference's solid red disc, marked as a temporary placeholder; chips are 25px high visually inside a 44px touch target; 'Mark all as read' keeps its Reference position inside a 44px hit area that overlaps the chips' lower hit padding by about 5px; on narrow phones (375) the four tabs wrap to a second line; on medium / expanded the list stays a single centered column capped at about 600 / 720 (no grid).",
            "TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS: the back glyph and the row thumbnails.",
            "Tab set differs from the notification types in APP-STRUCTURE.md; reconciliation remains To Verify (unchanged).",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 2, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). The Reference tan band over the status-bar region is kept where shown; its meaning is To Verify."
          ]
        }
      }
    }),
    screen({
      key: "notifications/notification-list/promotions/read",
      id: "MP-NOTIFY-001",
      path: ["Notifications", "Notification List", "Promotions", "Read"],
      scope: "Current Scope",
      state: "Read",
      flow: {
        entryPoint: "Header notification bell",
        nextStep: "Related destination (order, promotion, announcement — To Verify)"
      },
      dependencies: ["CMS: Notifications", "CMS: Promotions"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing notification list, Promotions tab — Read state.",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [],
          notes: [
            "Tabs shown differ from the notification types in APP-STRUCTURE.md; reconciliation is To Verify."
          ],
          devices: devices({ mobile: phase1("notifications/MP-NOTIFY-001_promotions-read_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/notifications/MP-NOTIFY-001/index.html?state=promotions-read",
          description: "Responsive Draft of the notification list: Promotions tab, Read state. One shared state-driven prototype (?state=promotions-read).",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [
            "Switch tab",
            "Mark all as read (Backend Dependency Unknown)"
          ],
          notes: [
            "ONE responsive prototype for all 12 notification states, state-driven: the entry opens the same page with ?state=<tab>-<mode> (all | orders | promotions | announcements, unread | read | empty). Tapping a tab in the prototype keeps the current mode. No screen HTML is duplicated.",
            "Copy To Verify: the fourth tab is labelled 'Annoucements' exactly as in the Reference. It is an obvious spelling error and is deliberately NOT corrected in this pass; it is not approved final copy.",
            "SAMPLE DATA / NOT BUSINESS RULE: the strings are the Reference's own placeholder copy ('It's Mother Day', 'Make your day extra special with a xxxx', 'Call to Action', '22 Jun'), kept verbatim because visible text length drives wrapping, row height and density. They are not content and not a business rule.",
            "Notification tap destination (deep link) is To Verify; rows record a placeholder destination only and nothing navigates. 'Mark all as read' is not wired: Backend Dependency Unknown.",
            "Read / unread styling follows the Reference evidence: unread rows use dark text, read rows use muted grey text (the thumbnail and date look the same). What counts as read and how it is set is To Verify. A visually hidden 'Read.' / 'Unread.' prefix is added for assistive technology (Draft addition).",
            "Reference evidence kept and marked To Verify: 'Mark all as read' is red on all-unread and all-read, black on orders-unread, promotions and announcements, and ABSENT on orders-read (its list then starts 32px higher); the call-to-action text appears only on all-unread, right-aligned with a per-row inset. Why these vary is To Verify.",
            "Row geometry is content-driven and follows the Reference at 440: single rows are 70px; the wrapped row (a narrow sample row: the title breaks inside the word at about 66px, the body wraps at about 124px in Inter) is 98px. Per-state structure was verified against all twelve Reference screenshots: the wrapped row appears in all-unread and every read state, not in orders / promotions / announcements unread. Rows never overflow; the date column never shrinks.",
            "Intentional differences vs Reference: row thumbnails are the Reference's solid red disc, marked as a temporary placeholder; chips are 25px high visually inside a 44px touch target; 'Mark all as read' keeps its Reference position inside a 44px hit area that overlaps the chips' lower hit padding by about 5px; on narrow phones (375) the four tabs wrap to a second line; on medium / expanded the list stays a single centered column capped at about 600 / 720 (no grid).",
            "TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS: the back glyph and the row thumbnails.",
            "Tab set differs from the notification types in APP-STRUCTURE.md; reconciliation remains To Verify (unchanged).",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 2, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). The Reference tan band over the status-bar region is kept where shown; its meaning is To Verify."
          ]
        }
      }
    }),
    screen({
      key: "notifications/notification-list/promotions/empty",
      id: "MP-NOTIFY-001",
      path: ["Notifications", "Notification List", "Promotions", "Empty"],
      scope: "Current Scope",
      state: "Empty",
      flow: {
        entryPoint: "Header notification bell",
        nextStep: "Related destination (order, promotion, announcement — To Verify)"
      },
      dependencies: ["CMS: Notifications", "CMS: Promotions"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing notification list, Promotions tab — Empty state.",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [],
          notes: [
            "Tabs shown differ from the notification types in APP-STRUCTURE.md; reconciliation is To Verify."
          ],
          devices: devices({ mobile: phase1("notifications/MP-NOTIFY-001_promotions-empty_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/notifications/MP-NOTIFY-001/index.html?state=promotions-empty",
          description: "Responsive Draft of the notification list: Promotions tab, Empty state. One shared state-driven prototype (?state=promotions-empty).",
          primaryAction: "None (empty state).",
          secondaryActions: [
            "Switch tab"
          ],
          notes: [
            "ONE responsive prototype for all 12 notification states, state-driven: the entry opens the same page with ?state=<tab>-<mode> (all | orders | promotions | announcements, unread | read | empty). Tapping a tab in the prototype keeps the current mode. No screen HTML is duplicated.",
            "Copy To Verify: the fourth tab is labelled 'Annoucements' exactly as in the Reference. It is an obvious spelling error and is deliberately NOT corrected in this pass; it is not approved final copy.",
            "SAMPLE DATA / NOT BUSINESS RULE: the strings are the Reference's own placeholder copy ('It's Mother Day', 'Make your day extra special with a xxxx', 'Call to Action', '22 Jun'), kept verbatim because visible text length drives wrapping, row height and density. They are not content and not a business rule.",
            "Notification tap destination (deep link) is To Verify; rows record a placeholder destination only and nothing navigates. 'Mark all as read' is not wired: Backend Dependency Unknown.",
            "Read / unread styling follows the Reference evidence: unread rows use dark text, read rows use muted grey text (the thumbnail and date look the same). What counts as read and how it is set is To Verify. A visually hidden 'Read.' / 'Unread.' prefix is added for assistive technology (Draft addition).",
            "Reference evidence kept and marked To Verify: 'Mark all as read' is red on all-unread and all-read, black on orders-unread, promotions and announcements, and ABSENT on orders-read (its list then starts 32px higher); the call-to-action text appears only on all-unread, right-aligned with a per-row inset. Why these vary is To Verify.",
            "Row geometry is content-driven and follows the Reference at 440: single rows are 70px; the wrapped row (a narrow sample row: the title breaks inside the word at about 66px, the body wraps at about 124px in Inter) is 98px. Per-state structure was verified against all twelve Reference screenshots: the wrapped row appears in all-unread and every read state, not in orders / promotions / announcements unread. Rows never overflow; the date column never shrinks.",
            "Intentional differences vs Reference: row thumbnails are the Reference's solid red disc, marked as a temporary placeholder; chips are 25px high visually inside a 44px touch target; 'Mark all as read' keeps its Reference position inside a 44px hit area that overlaps the chips' lower hit padding by about 5px; on narrow phones (375) the four tabs wrap to a second line; on medium / expanded the list stays a single centered column capped at about 600 / 720 (no grid).",
            "TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS: the back glyph and the row thumbnails.",
            "Tab set differs from the notification types in APP-STRUCTURE.md; reconciliation remains To Verify (unchanged).",
            "Empty copy ('This page is empty.' / 'Any updates or alerts we send will be saved right here.') is the Reference wording. Whether empty states differ per tab is To Verify.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 2, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). The Reference tan band over the status-bar region is kept where shown; its meaning is To Verify."
          ]
        }
      }
    }),
    screen({
      key: "notifications/notification-list/announcements/unread-content",
      id: "MP-NOTIFY-001",
      path: ["Notifications", "Notification List", "Announcements", "Unread / Content"],
      scope: "Current Scope",
      state: "Unread / Content",
      flow: {
        entryPoint: "Header notification bell",
        nextStep: "Related destination (order, promotion, announcement — To Verify)"
      },
      dependencies: ["CMS: Notifications", "CMS: Promotions"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing notification list, Announcements tab — Unread / Content state.",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [],
          notes: [
            "Tabs shown differ from the notification types in APP-STRUCTURE.md; reconciliation is To Verify."
          ],
          devices: devices({ mobile: phase1("notifications/MP-NOTIFY-001_announcements-unread_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/notifications/MP-NOTIFY-001/index.html?state=announcements-unread",
          description: "Responsive Draft of the notification list: Annoucements tab, Unread / content state. One shared state-driven prototype (?state=announcements-unread).",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [
            "Switch tab",
            "Mark all as read (Backend Dependency Unknown)"
          ],
          notes: [
            "ONE responsive prototype for all 12 notification states, state-driven: the entry opens the same page with ?state=<tab>-<mode> (all | orders | promotions | announcements, unread | read | empty). Tapping a tab in the prototype keeps the current mode. No screen HTML is duplicated.",
            "Copy To Verify: the fourth tab is labelled 'Annoucements' exactly as in the Reference. It is an obvious spelling error and is deliberately NOT corrected in this pass; it is not approved final copy.",
            "SAMPLE DATA / NOT BUSINESS RULE: the strings are the Reference's own placeholder copy ('It's Mother Day', 'Make your day extra special with a xxxx', 'Call to Action', '22 Jun'), kept verbatim because visible text length drives wrapping, row height and density. They are not content and not a business rule.",
            "Notification tap destination (deep link) is To Verify; rows record a placeholder destination only and nothing navigates. 'Mark all as read' is not wired: Backend Dependency Unknown.",
            "Read / unread styling follows the Reference evidence: unread rows use dark text, read rows use muted grey text (the thumbnail and date look the same). What counts as read and how it is set is To Verify. A visually hidden 'Read.' / 'Unread.' prefix is added for assistive technology (Draft addition).",
            "Reference evidence kept and marked To Verify: 'Mark all as read' is red on all-unread and all-read, black on orders-unread, promotions and announcements, and ABSENT on orders-read (its list then starts 32px higher); the call-to-action text appears only on all-unread, right-aligned with a per-row inset. Why these vary is To Verify.",
            "Row geometry is content-driven and follows the Reference at 440: single rows are 70px; the wrapped row (a narrow sample row: the title breaks inside the word at about 66px, the body wraps at about 124px in Inter) is 98px. Per-state structure was verified against all twelve Reference screenshots: the wrapped row appears in all-unread and every read state, not in orders / promotions / announcements unread. Rows never overflow; the date column never shrinks.",
            "Intentional differences vs Reference: row thumbnails are the Reference's solid red disc, marked as a temporary placeholder; chips are 25px high visually inside a 44px touch target; 'Mark all as read' keeps its Reference position inside a 44px hit area that overlaps the chips' lower hit padding by about 5px; on narrow phones (375) the four tabs wrap to a second line; on medium / expanded the list stays a single centered column capped at about 600 / 720 (no grid).",
            "TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS: the back glyph and the row thumbnails.",
            "Tab set differs from the notification types in APP-STRUCTURE.md; reconciliation remains To Verify (unchanged).",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 2, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). The Reference tan band over the status-bar region is kept where shown; its meaning is To Verify."
          ]
        }
      }
    }),
    screen({
      key: "notifications/notification-list/announcements/read",
      id: "MP-NOTIFY-001",
      path: ["Notifications", "Notification List", "Announcements", "Read"],
      scope: "Current Scope",
      state: "Read",
      flow: {
        entryPoint: "Header notification bell",
        nextStep: "Related destination (order, promotion, announcement — To Verify)"
      },
      dependencies: ["CMS: Notifications", "CMS: Promotions"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing notification list, Announcements tab — Read state.",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [],
          notes: [
            "Tabs shown differ from the notification types in APP-STRUCTURE.md; reconciliation is To Verify."
          ],
          devices: devices({ mobile: phase1("notifications/MP-NOTIFY-001_announcements-read_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/notifications/MP-NOTIFY-001/index.html?state=announcements-read",
          description: "Responsive Draft of the notification list: Annoucements tab, Read state. One shared state-driven prototype (?state=announcements-read).",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [
            "Switch tab",
            "Mark all as read (Backend Dependency Unknown)"
          ],
          notes: [
            "ONE responsive prototype for all 12 notification states, state-driven: the entry opens the same page with ?state=<tab>-<mode> (all | orders | promotions | announcements, unread | read | empty). Tapping a tab in the prototype keeps the current mode. No screen HTML is duplicated.",
            "Copy To Verify: the fourth tab is labelled 'Annoucements' exactly as in the Reference. It is an obvious spelling error and is deliberately NOT corrected in this pass; it is not approved final copy.",
            "SAMPLE DATA / NOT BUSINESS RULE: the strings are the Reference's own placeholder copy ('It's Mother Day', 'Make your day extra special with a xxxx', 'Call to Action', '22 Jun'), kept verbatim because visible text length drives wrapping, row height and density. They are not content and not a business rule.",
            "Notification tap destination (deep link) is To Verify; rows record a placeholder destination only and nothing navigates. 'Mark all as read' is not wired: Backend Dependency Unknown.",
            "Read / unread styling follows the Reference evidence: unread rows use dark text, read rows use muted grey text (the thumbnail and date look the same). What counts as read and how it is set is To Verify. A visually hidden 'Read.' / 'Unread.' prefix is added for assistive technology (Draft addition).",
            "Reference evidence kept and marked To Verify: 'Mark all as read' is red on all-unread and all-read, black on orders-unread, promotions and announcements, and ABSENT on orders-read (its list then starts 32px higher); the call-to-action text appears only on all-unread, right-aligned with a per-row inset. Why these vary is To Verify.",
            "Row geometry is content-driven and follows the Reference at 440: single rows are 70px; the wrapped row (a narrow sample row: the title breaks inside the word at about 66px, the body wraps at about 124px in Inter) is 98px. Per-state structure was verified against all twelve Reference screenshots: the wrapped row appears in all-unread and every read state, not in orders / promotions / announcements unread. Rows never overflow; the date column never shrinks.",
            "Intentional differences vs Reference: row thumbnails are the Reference's solid red disc, marked as a temporary placeholder; chips are 25px high visually inside a 44px touch target; 'Mark all as read' keeps its Reference position inside a 44px hit area that overlaps the chips' lower hit padding by about 5px; on narrow phones (375) the four tabs wrap to a second line; on medium / expanded the list stays a single centered column capped at about 600 / 720 (no grid).",
            "TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS: the back glyph and the row thumbnails.",
            "Tab set differs from the notification types in APP-STRUCTURE.md; reconciliation remains To Verify (unchanged).",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 2, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). The Reference tan band over the status-bar region is kept where shown; its meaning is To Verify."
          ]
        }
      }
    }),
    screen({
      key: "notifications/notification-list/announcements/empty",
      id: "MP-NOTIFY-001",
      path: ["Notifications", "Notification List", "Announcements", "Empty"],
      scope: "Current Scope",
      state: "Empty",
      flow: {
        entryPoint: "Header notification bell",
        nextStep: "Related destination (order, promotion, announcement — To Verify)"
      },
      dependencies: ["CMS: Notifications", "CMS: Promotions"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing notification list, Announcements tab — Empty state.",
          primaryAction: "Open a notification (deep link — To Verify).",
          secondaryActions: [],
          notes: [
            "Tabs shown differ from the notification types in APP-STRUCTURE.md; reconciliation is To Verify."
          ],
          devices: devices({ mobile: phase1("notifications/MP-NOTIFY-001_announcements-empty_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/notifications/MP-NOTIFY-001/index.html?state=announcements-empty",
          description: "Responsive Draft of the notification list: Annoucements tab, Empty state. One shared state-driven prototype (?state=announcements-empty).",
          primaryAction: "None (empty state).",
          secondaryActions: [
            "Switch tab"
          ],
          notes: [
            "ONE responsive prototype for all 12 notification states, state-driven: the entry opens the same page with ?state=<tab>-<mode> (all | orders | promotions | announcements, unread | read | empty). Tapping a tab in the prototype keeps the current mode. No screen HTML is duplicated.",
            "Copy To Verify: the fourth tab is labelled 'Annoucements' exactly as in the Reference. It is an obvious spelling error and is deliberately NOT corrected in this pass; it is not approved final copy.",
            "SAMPLE DATA / NOT BUSINESS RULE: the strings are the Reference's own placeholder copy ('It's Mother Day', 'Make your day extra special with a xxxx', 'Call to Action', '22 Jun'), kept verbatim because visible text length drives wrapping, row height and density. They are not content and not a business rule.",
            "Notification tap destination (deep link) is To Verify; rows record a placeholder destination only and nothing navigates. 'Mark all as read' is not wired: Backend Dependency Unknown.",
            "Read / unread styling follows the Reference evidence: unread rows use dark text, read rows use muted grey text (the thumbnail and date look the same). What counts as read and how it is set is To Verify. A visually hidden 'Read.' / 'Unread.' prefix is added for assistive technology (Draft addition).",
            "Reference evidence kept and marked To Verify: 'Mark all as read' is red on all-unread and all-read, black on orders-unread, promotions and announcements, and ABSENT on orders-read (its list then starts 32px higher); the call-to-action text appears only on all-unread, right-aligned with a per-row inset. Why these vary is To Verify.",
            "Row geometry is content-driven and follows the Reference at 440: single rows are 70px; the wrapped row (a narrow sample row: the title breaks inside the word at about 66px, the body wraps at about 124px in Inter) is 98px. Per-state structure was verified against all twelve Reference screenshots: the wrapped row appears in all-unread and every read state, not in orders / promotions / announcements unread. Rows never overflow; the date column never shrinks.",
            "Intentional differences vs Reference: row thumbnails are the Reference's solid red disc, marked as a temporary placeholder; chips are 25px high visually inside a 44px touch target; 'Mark all as read' keeps its Reference position inside a 44px hit area that overlaps the chips' lower hit padding by about 5px; on narrow phones (375) the four tabs wrap to a second line; on medium / expanded the list stays a single centered column capped at about 600 / 720 (no grid).",
            "TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS: the back glyph and the row thumbnails.",
            "Tab set differs from the notification types in APP-STRUCTURE.md; reconciliation remains To Verify (unchanged).",
            "Empty copy ('This page is empty.' / 'Any updates or alerts we send will be saved right here.') is the Reference wording. Whether empty states differ per tab is To Verify.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 2, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). The Reference tan band over the status-bar region is kept where shown; its meaning is To Verify."
          ]
        }
      }
    })
  ]
});

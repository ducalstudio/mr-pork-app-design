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
        }
      }
    })
  ]
});

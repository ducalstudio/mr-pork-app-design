/*
 * Notifications: SAMPLE DATA / NOT BUSINESS RULE. The strings are the Reference's own placeholder copy ("It's Mother Day",
 * "Make your day extra special with a xxxx", "Call to Action", "22 Jun"), kept verbatim because visible text length drives wrapping,
 * row height and density. Nothing here is a business rule. Classic script (a sandboxed iframe cannot fetch a JSON file without CORS headers).
 *
 * State name = <tab>-<mode> chosen with ?state= (for example ?state=orders-read). Modes: unread, read, empty.
 * Test-only overrides: ?long=1 (long title, body and an unbroken token), ?rows=<n> (row count, default 4).
 *
 * STATE MATRIX, verified against the twelve Reference screenshots (440 x 956):
 *   narrow (wrapped) 2nd row : all-unread, all-read, orders-read, promotions-read, announcements-read
 *   "Mark all as read"       : red on all-unread and all-read; black on orders-unread, promotions-*, announcements-*; ABSENT on orders-read
 *   call-to-action text      : all-unread only, right-aligned with a per-row inset (Reference: it ends 22 / 34 / 36 / 26 px short of the text column)
 *   body                     : all-unread rows 1, 3, 4 are shorter strings (the CTA follows them); every other row uses the long string
 * Why these vary is To Verify; they are reproduced, not normalized.
 */
window.NOTIFY_SAMPLES = {
  // Tab labels are the Reference labels. "Annoucements" is the Reference spelling: Copy To Verify, deliberately NOT corrected.
  tabs: [
    { key: "all", label: "All" },
    { key: "orders", label: "Orders" },
    { key: "promotions", label: "Promotions" },
    { key: "announcements", label: "Annoucements" }
  ],
  modes: ["unread", "read", "empty"],
  title: "It’s Mother Day",
  bodyLong: "Make your day extra special with a xxxx",
  // all-unread only: body shortened where the call-to-action follows, plus the CTA inset from the text column's right edge
  allUnreadRows: [
    { body: "Make your day extra special with a", ctaInset: 22 },
    { body: "Make your day extra special with a xxxx", ctaInset: 34 },
    { body: "Make your day extra special", ctaInset: 36 },
    { body: "Make your day extra special", ctaInset: 26 }
  ],
  ctaLabel: "Call to Action",
  date: "22 Jun",
  narrowRow: ["all-unread", "all-read", "orders-read", "promotions-read", "announcements-read"],
  markAll: { "all-unread": "accent", "all-read": "accent", "orders-unread": "plain", "orders-read": "none", "promotions-unread": "plain", "promotions-read": "plain", "announcements-unread": "plain", "announcements-read": "plain" },
  emptyTitle: "This page is empty.",
  emptyText: "Any updates or alerts we send will be saved right here."
};

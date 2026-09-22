/*
 * Home — Member: DEFAULT state sample data (Draft).
 * These are prototype sample values copied from the Reference screenshot. They are NOT business rules.
 * Classic script (a sandboxed iframe cannot fetch a JSON file without CORS headers).
 * Any value can be overridden with a query string on the prototype page itself, for testing only:
 *   ?name=…&credit=12345.67&points=12345&rewards=1200&unread=1&slides=5&cards=4
 */
window.HOME_STATE = {
  displayName: "Ivan",   // FICTIONAL sample: replaces a real person's name shown in the Reference (similar length); preferred display name (no first-name / surname rule)
  credit: 100,           // shown as 100.00, numeric only, no currency symbol or code (proposed formatting rule, To Verify)
  points: 15,            // integer, thousands separators where needed
  rewards: 2,            // integer, thousands separators where needed
  hasUnreadNotifications: false,
  slides: 5,             // real count is CMS-driven (CMS Rule Required)
  cards: 4,              // Shop & more content type is To Verify
  cardLabel: "Outlet A Name"  // the Reference's own sample label (visible in the Popup and Selector References); SAMPLE DATA / NOT BUSINESS RULE
};

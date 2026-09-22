/*
 * Account Home: SAMPLE DATA / NOT BUSINESS RULE (Draft). Personal details are fictional and sized like the Reference; credit / points / rewards are the Reference's own. Classic script.
 * Test-only overrides on the prototype URL: ?name=…&phone=…&credit=…&points=…&rewards=…&unread=1
 * ?state=variant-a | variant-b selects the Explorer variant; both render identically (the two Reference captures are byte-identical).
 */
window.ACCOUNT_STATE = {
  displayName: "Kelvin Tan",   // fictional: replaces a real person's name shown in the Reference (similar length and width)
  phone: "0171120210",         // fictional: replaces a real phone number (same 10-digit format)
  credit: 100,      // two decimals, no currency symbol (proposed formatting, To Verify)
  points: 15,
  rewards: 2,
  hasUnreadNotifications: false
};

/*
 * My Rewards: SAMPLE DATA / NOT BUSINESS RULE. Card copy ("20% OFF", "Enjoy 20% Off on Wed", "Valid Until 31/12/2026 23:59",
 * "Terms & Conditions applied") is the Reference's own placeholder content, kept verbatim.
 * State = <tab>-<mode> chosen with ?state= (for example ?state=invalid-content). Modes: content, empty.
 * Card counts per the Reference captures: valid = 2, invalid = 2, used = 1.
 */
window.REWARDS_SAMPLES = {
  tabs: [
    { key: "valid", label: "Valid" },
    { key: "invalid", label: "Invalid" },
    { key: "used", label: "Used" }
  ],
  card: { title: "20% OFF", subtitle: "Enjoy 20% Off on Wed", meta: "Valid Until 31/12/2026 23:59", terms: "Terms & Conditions applied" },
  counts: { valid: 2, invalid: 2, used: 1 },
  emptyTitle: "No coupon or voucher",
  emptyText: "You haven’t collected any coupon or voucher yet."
};

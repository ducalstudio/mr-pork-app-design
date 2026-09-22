/*
 * My Credit: SAMPLE DATA / NOT BUSINESS RULE. Row copy (Order ID, timestamps, amounts) is the Reference's own placeholder
 * content, kept verbatim. State = ?state=<type>-<date> (type: all | buy-product | order-refund | top-up; date: all | ranged).
 * ranged always shows "No records" (matches the one Reference date-filter capture).
 */
window.CREDIT_SAMPLES = {
  balance: "0.00",
  rows: {
    all: [
      { title: "Buy product", amount: "-RM13.90", negative: true },
      { title: "Top-up", amount: "-RM13.90", negative: true },
      { title: "Order refund", amount: "+RM13.90", negative: false },
      { title: "Buy product", amount: "-RM13.90", negative: true }
    ],
    "buy-product": [
      { title: "Buy product", amount: "-RM13.90", negative: true },
      { title: "Buy product", amount: "-RM13.90", negative: true }
    ],
    "order-refund": [
      { title: "Order refund", amount: "+RM13.90", negative: false },
      { title: "Order refund", amount: "+RM13.90", negative: false }
    ],
    "top-up": [
      { title: "Top-up", amount: "-RM13.90", negative: true },
      { title: "Top-up", amount: "-RM13.90", negative: true }
    ]
  },
  orderId: "Order ID: RP123131311A131311",
  date: "24/08/2024 17:05:01",
  typeLabels: { all: "All types", "buy-product": "Buy product", "order-refund": "Order refund", "top-up": "Top-up" },
  dateLabels: { all: "All dates", ranged: "01/07-11/07,2026" }
};

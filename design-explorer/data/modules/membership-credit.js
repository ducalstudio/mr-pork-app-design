/* Membership / Credit — screen data (Reference designs). Metadata only; no business logic.
 * screen = canonical product definition; versions.* = design-specific definition (+ optional overrides). */
import { defineModule, screen, devices, phase1, TO_VERIFY_PRESET } from "../helpers.js";
import { EXTERNAL_UI_NOTE } from "../shared.js";

export default defineModule({
  id: "membership-credit",
  label: "Membership / Credit",
  screens: [
    screen({
      key: "membership/credit/my-credit/all-transactions",
      id: "MP-MEMBER-009",
      path: ["Membership", "Credit", "My Credit", "All Transactions"],
      scope: "Current Scope",
      state: "All Transactions",
      flow: {
        entryPoint: "Home / Account credit box",
        nextStep: "Top-Up Credit, filters"
      },
      dependencies: ["Backend: Member credit ledger", "CMS: Membership / Credit rules (CMS Rule Required)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing My Credit screen showing the credit balance and transaction list (all types).",
          primaryAction: "Top up credit",
          secondaryActions: ["Filter by transaction type", "Filter by date range", "View credit description"],
          notes: [
            "Credit transaction sample values contain possible sign inconsistencies (known review item)."
          ],
          devices: devices({ mobile: phase1("credit/MP-MEMBER-009_my-credit-all_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/MP-MEMBER-009/index.html?state=all-all",
          description: "Responsive Draft of My Credit: balance, two filter pills, transaction rows, Pay At Outlet / Top-Up actions.",
          primaryAction: "Top up credit",
          secondaryActions: ["Filter by transaction type", "Filter by date range"],
          notes: [
            "ONE prototype, state-driven (prototypes/credit/MP-MEMBER-009/), shared by all 5 My Credit entries via ?state=<type>-<date> (type: all | buy-product | order-refund | top-up; date: all | ranged) — same pattern as Notifications / My Rewards.",
            "Measured from the Reference (440 x 956) with tools/lib/png.mjs: band header 106 total (63 + 43); balance 32px / 700 red; two bordered filter pills; rows on an about 92px pitch (measured by eye below the first row, a faster pass than the pixel-per-row measurement used in earlier batches); bottom actions pinned via margin-top: auto rather than the Reference's fixed y.",
            "New shared component (Batch 5): radio-row (label + red radio, reused by the Transaction Type filter, Select Bank and Top-Up payment method). The two filter pills open the Transaction Type / Date Range sheet Drafts.",
            "SAMPLE DATA / NOT BUSINESS RULE: row copy (Order ID, timestamps, amounts) is the Reference's own placeholder content, kept verbatim. Credit transaction sample values contain possible sign inconsistencies (known review item, unchanged from the Reference note).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the back glyph and the info glyph next to ‘Credit Balance’.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 5, provisional. Built from Shared Prototype Components under prototypes/_components/.",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify). No OS status bar is drawn (Phase A rule)."
          ]
        }
      }
    }),
    screen({
      key: "membership/credit/my-credit/buy-product",
      id: "MP-MEMBER-010",
      path: ["Membership", "Credit", "My Credit", "Buy Product"],
      scope: "Current Scope",
      state: "Buy Product",
      flow: {
        entryPoint: "My Credit — type filter",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Member credit ledger", "CMS: Membership / Credit rules (CMS Rule Required)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing credit history filtered to Buy Product transactions.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Credit transaction sample values contain possible sign inconsistencies (known review item)."
          ],
          devices: devices({ mobile: phase1("credit/MP-MEMBER-010_credit-history-buy-product_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/MP-MEMBER-009/index.html?state=buy-product-all",
          description: "Responsive Draft of My Credit filtered to Buy Product. Shares the state-driven prototype with All Transactions; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: []
        }
      }
    }),
    screen({
      key: "membership/credit/my-credit/order-refund",
      id: "MP-MEMBER-010",
      path: ["Membership", "Credit", "My Credit", "Order Refund"],
      scope: "Current Scope",
      state: "Order Refund",
      flow: {
        entryPoint: "My Credit — type filter",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Member credit ledger", "CMS: Membership / Credit rules (CMS Rule Required)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing credit history filtered to Order Refund transactions.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Credit transaction sample values contain possible sign inconsistencies (known review item)."
          ],
          devices: devices({ mobile: phase1("credit/MP-MEMBER-010_credit-history-order-refund_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/MP-MEMBER-009/index.html?state=order-refund-all",
          description: "Responsive Draft of My Credit filtered to Order Refund. Shares the state-driven prototype with All Transactions; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: []
        }
      }
    }),
    screen({
      key: "membership/credit/my-credit/top-up",
      id: "MP-MEMBER-010",
      path: ["Membership", "Credit", "My Credit", "Top-Up"],
      scope: "Current Scope",
      state: "Top-Up",
      flow: {
        entryPoint: "My Credit — type filter",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Member credit ledger", "CMS: Membership / Credit rules (CMS Rule Required)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing credit history filtered to Top-Up transactions.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Credit transaction sample values contain possible sign inconsistencies (known review item)."
          ],
          devices: devices({ mobile: phase1("credit/MP-MEMBER-010_credit-history-topup_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/MP-MEMBER-009/index.html?state=top-up-all",
          description: "Responsive Draft of My Credit filtered to Top-Up. Shares the state-driven prototype with All Transactions; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: []
        }
      }
    }),
    screen({
      key: "membership/credit/my-credit/date-filter-applied",
      id: "MP-MEMBER-010",
      path: ["Membership", "Credit", "My Credit", "Date Filter Applied"],
      scope: "Current Scope",
      state: "Date Filter Applied",
      flow: {
        entryPoint: "My Credit — date filter",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Member credit ledger", "CMS: Membership / Credit rules (CMS Rule Required)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing credit history with a date range filter applied.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Credit transaction sample values contain possible sign inconsistencies (known review item)."
          ],
          devices: devices({ mobile: phase1("credit/MP-MEMBER-010_credit-history-date-filter_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/MP-MEMBER-009/index.html?state=all-ranged",
          description: "Responsive Draft of My Credit with a date range applied: date pill shows the range, list shows 'No records' (matches the one Reference capture). Shares the state-driven prototype with All Transactions; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: []
        }
      }
    }),
    screen({
      key: "membership/credit/transaction-type-filter/all-types",
      id: "To Verify",
      path: ["Membership", "Credit", "Transaction Type Filter", "All Types"],
      scope: "Current Scope",
      state: "All Types",
      flow: {
        entryPoint: "My Credit — Filter",
        nextStep: "My Credit (filtered)"
      },
      dependencies: ["Backend: Member credit ledger"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing transaction type filter sheet, All Types selected (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("credit/credit-filter-all-types_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/transaction-type-filter/index.html?state=all-types",
          description: "Responsive Draft of the Transaction Type filter sheet, All Types selected: title, close, 4 radio-row options, Submit.",
          primaryAction: "Submit",
          secondaryActions: [],
          notes: [
            "ONE prototype, state-driven (prototypes/credit/transaction-type-filter/), shared by all 4 Transaction Type entries via ?state=<option>.",
            "Partial Reference capture (400 wide, no position evidence): centered floating dialog, dimmed over the My Credit Draft, following the Fulfilment Selector precedent (see bottom-sheet/spec.md), the same decision already applied to Logout.",
            "New shared component (Batch 5): radio-row (real radio input styled as the Reference's red outline / filled circle).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the close glyph.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 5, provisional."
          ]
        }
      }
    }),
    screen({
      key: "membership/credit/transaction-type-filter/buy-product",
      id: "To Verify",
      path: ["Membership", "Credit", "Transaction Type Filter", "Buy Product"],
      scope: "Current Scope",
      state: "Buy Product",
      flow: {
        entryPoint: "My Credit — Filter",
        nextStep: "My Credit (filtered)"
      },
      dependencies: ["Backend: Member credit ledger"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing transaction type filter sheet, Buy Product selected (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("credit/credit-filter-buy-product_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/transaction-type-filter/index.html?state=buy-product",
          description: "Responsive Draft of the Transaction Type filter sheet, Buy Product selected. Shares the state-driven prototype with All Types; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "Submit",
          secondaryActions: [],
          notes: []
        }
      }
    }),
    screen({
      key: "membership/credit/transaction-type-filter/order-refund",
      id: "To Verify",
      path: ["Membership", "Credit", "Transaction Type Filter", "Order Refund"],
      scope: "Current Scope",
      state: "Order Refund",
      flow: {
        entryPoint: "My Credit — Filter",
        nextStep: "My Credit (filtered)"
      },
      dependencies: ["Backend: Member credit ledger"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing transaction type filter sheet, Order Refund selected (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("credit/credit-filter-order-refund_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/transaction-type-filter/index.html?state=order-refund",
          description: "Responsive Draft of the Transaction Type filter sheet, Order Refund selected. Shares the state-driven prototype with All Types; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "Submit",
          secondaryActions: [],
          notes: []
        }
      }
    }),
    screen({
      key: "membership/credit/transaction-type-filter/top-up",
      id: "To Verify",
      path: ["Membership", "Credit", "Transaction Type Filter", "Top-Up"],
      scope: "Current Scope",
      state: "Top-Up",
      flow: {
        entryPoint: "My Credit — Filter",
        nextStep: "My Credit (filtered)"
      },
      dependencies: ["Backend: Member credit ledger"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing transaction type filter sheet, Top-Up selected (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("credit/credit-filter-topup_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/transaction-type-filter/index.html?state=top-up",
          description: "Responsive Draft of the Transaction Type filter sheet, Top-Up selected. Shares the state-driven prototype with All Types; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "Submit",
          secondaryActions: [],
          notes: []
        }
      }
    }),
    screen({
      key: "membership/credit/date-range-filter/default",
      id: "To Verify",
      path: ["Membership", "Credit", "Date Range Filter", "Default"],
      scope: "Current Scope",
      state: "Default",
      flow: {
        entryPoint: "My Credit — Filter",
        nextStep: "My Credit (filtered)"
      },
      dependencies: ["Backend: Member credit ledger"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing date range picker in its default state (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("credit/date-range-default_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/date-range-filter/index.html?state=default",
          description: "Responsive Draft of the Date Selection calendar sheet, no date chosen yet (11 Jul 2026 outlined as the Reference's sample date): weekday row, month/year nav, day grid, Submit.",
          primaryAction: "Submit",
          secondaryActions: [],
          notes: [
            "ONE prototype, state-driven (prototypes/credit/date-range-filter/), shared by all 3 Date Range entries via ?state=default|selected|complete.",
            "SAMPLE DATA / NOT BUSINESS RULE: July 2026 is the Reference's own sample month; the calendar grid is static markup, not a real date computation (month / year arrows are recorded destinations only).",
            "Partial Reference capture (400 wide, no position evidence): centered floating dialog, dimmed over the My Credit Draft, following the Fulfilment Selector precedent (see bottom-sheet/spec.md).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the close glyph and the month / year chevrons.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 5, provisional."
          ]
        }
      }
    }),
    screen({
      key: "membership/credit/date-range-filter/selected",
      id: "To Verify",
      path: ["Membership", "Credit", "Date Range Filter", "Selected"],
      scope: "Current Scope",
      state: "Selected",
      flow: {
        entryPoint: "My Credit — Filter",
        nextStep: "My Credit (filtered)"
      },
      dependencies: ["Backend: Member credit ledger"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing date range picker with a range partly selected (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("credit/date-range-selected_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/date-range-filter/index.html?state=selected",
          description: "Responsive Draft of the Date Selection calendar sheet, one date filled (selected). Shares the state-driven prototype with Default; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "Submit",
          secondaryActions: [],
          notes: []
        }
      }
    }),
    screen({
      key: "membership/credit/date-range-filter/complete",
      id: "To Verify",
      path: ["Membership", "Credit", "Date Range Filter", "Complete"],
      scope: "Current Scope",
      state: "Complete",
      flow: {
        entryPoint: "My Credit — Filter",
        nextStep: "My Credit (filtered)"
      },
      dependencies: ["Backend: Member credit ledger"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing date range picker with a complete range selected (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("credit/date-range-complete_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/date-range-filter/index.html?state=complete",
          description: "Responsive Draft of the Date Selection calendar sheet, two dates filled (a range's endpoints; no fill shown for the days between them in the Reference, reproduced as-is). Shares the state-driven prototype with Default; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "Submit",
          secondaryActions: [],
          notes: []
        }
      }
    }),
    screen({
      key: "membership/credit/credit-description",
      id: "To Verify",
      path: ["Membership", "Credit", "Credit Description"],
      scope: "Current Scope",
      flow: {
        entryPoint: "My Credit",
        nextStep: "Back to My Credit"
      },
      dependencies: ["CMS: Membership / Credit rules (CMS Rule Required)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing credit description popup (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: { image: phase1("credit/credit-description_reference.png"), capturePreset: TO_VERIFY_PRESET } })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/credit-description/index.html",
          description: "Responsive Draft of the Credit Description sheet: title, close, a repeated placeholder content block (rich-content).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Partial Reference capture (400 wide, no position evidence): centered floating dialog, dimmed over the My Credit Draft, following the Fulfilment Selector precedent (see bottom-sheet/spec.md).",
            "SAMPLE DATA / NOT BUSINESS RULE: the Reference's own placeholder content is kept verbatim, including the repeated '1. Introduction / You haven't collected any coupon or voucher yet.' blocks — the same CMS placeholder filler seen on Point Reward Rules, not a Draft mistake.",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the close glyph.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 5, provisional."
          ]
        }
      }
    }),
    screen({
      key: "membership/credit/top-up-credit/payment-method/default",
      id: "To Verify",
      path: ["Membership", "Credit", "Top-Up Credit", "Payment Method", "Default"],
      scope: "Current Scope",
      state: "Default",
      flow: {
        entryPoint: "My Credit — Top Up",
        nextStep: "Select Bank (Online Banking)"
      },
      dependencies: [
        "Backend: Payment",
        "External payment gateway",
        "CMS Rule Required (credit top-up rules)"
      ],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing Top-Up Credit sheet before a payment method is chosen (partial-screen capture).",
          primaryAction: "Choose amount and payment method",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("credit/top-up-credit-default_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/top-up-credit/payment-method/index.html?state=default",
          description: "Responsive Draft of the Top-Up Credit sheet before a method is chosen: amount display, 4 quick amounts, radio-row payment methods, Submit.",
          primaryAction: "Choose amount and payment method",
          secondaryActions: [],
          notes: [
            "ONE prototype, state-driven (prototypes/credit/top-up-credit/payment-method/), shared with Online Banking via ?state=default|online-banking (selecting Online Banking reveals a bank-picker row and changes the action label Submit -> Confirm).",
            "Measured from the Reference (440 x 603 content) with tools/lib/png.mjs: this capture has no side inset at compact width (full 440, unlike the other Credit sheets' 400 x 20-margin pattern) — a --sheet-margin: 0 at compact, 20 at medium/expanded, screen-specific per Reference evidence. Amount display 400 x 56 grey fill with large amber/gold text; 4 pale-pink quick-amount chips; radio-row methods below.",
            "SAMPLE DATA / NOT BUSINESS RULE: quick amounts (RM 50/100/500/1,000) are the Reference's own sample content.",
            "Partial Reference capture (no full-screen position evidence): centered floating dialog, dimmed over the My Credit Draft, following the Fulfilment Selector precedent (see bottom-sheet/spec.md).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the close glyph.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 5, provisional."
          ]
        }
      }
    }),
    screen({
      key: "membership/credit/top-up-credit/payment-method/online-banking",
      id: "To Verify",
      path: ["Membership", "Credit", "Top-Up Credit", "Payment Method", "Online Banking"],
      scope: "Current Scope",
      state: "Online Banking",
      flow: {
        entryPoint: "My Credit — Top Up",
        nextStep: "Select Bank"
      },
      dependencies: [
        "Backend: Payment",
        "External payment gateway",
        "CMS Rule Required (credit top-up rules)"
      ],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing Top-Up Credit sheet with Online Banking chosen (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: ["Other payment methods are not shown; do not assume any (To Verify)."],
          devices: devices({ mobile: phase1("credit/top-up-credit-online-banking_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/top-up-credit/payment-method/index.html?state=online-banking",
          description: "Responsive Draft of the Top-Up Credit sheet with Online Banking chosen: a Maybank2u bank-picker row appears, action label reads Confirm. Shares the state-driven prototype with Default; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: ["Other payment methods are not shown; do not assume any (unchanged from the Reference note)."]
        }
      }
    }),
    screen({
      key: "membership/credit/top-up-credit/select-bank/default",
      id: "To Verify",
      path: ["Membership", "Credit", "Top-Up Credit", "Select Bank", "Default"],
      scope: "Current Scope",
      state: "Default",
      flow: {
        entryPoint: "My Credit — Top Up",
        nextStep: "Payment Processing"
      },
      dependencies: [
        "Backend: Payment",
        "External payment gateway",
        "CMS Rule Required (credit top-up rules)"
      ],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing bank selection list, default (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("credit/select-bank-default_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/top-up-credit/select-bank/index.html?state=default",
          description: "Responsive Draft of the Select Bank sheet, full list, no selection: search field, radio-row bank list, Confirm (pale grey, “disabled-looking” until a bank is checked).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "ONE prototype, state-driven (prototypes/credit/top-up-credit/select-bank/), shared with Search / Selected via ?state=default|search|selected.",
            "SAMPLE DATA / NOT BUSINESS RULE: bank names and the sample search query (“May”) are the Reference's own content; the search field does not actually filter beyond reproducing the one captured query.",
            "Confirm reuses the button --pale convention (a screen-level grey override here since the Reference's inactive state is a *different* grey than any existing button variant, not the same pale pink as Authentication's Send OTP) — fidelity over forcing an existing variant.",
            "Partial Reference capture (no full-screen position evidence): centered floating dialog, dimmed over the Top-Up Credit (Online Banking) Draft, following the Fulfilment Selector precedent (see bottom-sheet/spec.md).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the close glyph and the search icon.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 5, provisional."
          ]
        }
      }
    }),
    screen({
      key: "membership/credit/top-up-credit/select-bank/search",
      id: "To Verify",
      path: ["Membership", "Credit", "Top-Up Credit", "Select Bank", "Search"],
      scope: "Current Scope",
      state: "Search",
      flow: {
        entryPoint: "My Credit — Top Up",
        nextStep: "To Verify"
      },
      dependencies: [
        "Backend: Payment",
        "External payment gateway",
        "CMS Rule Required (credit top-up rules)"
      ],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing bank selection list with a search in progress (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("credit/select-bank-search_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/top-up-credit/select-bank/index.html?state=search",
          description: "Responsive Draft of the Select Bank sheet filtered by a search query. Shares the state-driven prototype with Default; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: []
        }
      }
    }),
    screen({
      key: "membership/credit/top-up-credit/select-bank/selected",
      id: "To Verify",
      path: ["Membership", "Credit", "Top-Up Credit", "Select Bank", "Selected"],
      scope: "Current Scope",
      state: "Selected",
      flow: {
        entryPoint: "My Credit — Top Up",
        nextStep: "To Verify"
      },
      dependencies: [
        "Backend: Payment",
        "External payment gateway",
        "CMS Rule Required (credit top-up rules)"
      ],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing bank selection list with a bank selected (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("credit/select-bank-selected_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/top-up-credit/select-bank/index.html?state=selected",
          description: "Responsive Draft of the Select Bank sheet with Maybank2U selected, Confirm active (red). Shares the state-driven prototype with Default; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "Confirm the selected bank",
          secondaryActions: [],
          notes: []
        }
      }
    }),
    screen({
      key: "membership/credit/top-up-credit/processing",
      id: "To Verify",
      path: ["Membership", "Credit", "Top-Up Credit", "Processing"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Select Bank",
        nextStep: "External Bank Redirect"
      },
      dependencies: [
        "Backend: Payment",
        "External payment gateway",
        "CMS Rule Required (credit top-up rules)"
      ],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing payment processing screen shown while the payment is prepared.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Payment success / failure / cancellation return screens have not been supplied (To Verify)."
          ],
          devices: devices({ mobile: phase1("credit/payment-processing_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/credit/top-up-credit/processing/index.html",
          description: "Responsive Draft of the payment processing screen: band header (back only, no title), centered state-panel message, a 'Powered by Payex' badge.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "SAMPLE DATA / NOT BUSINESS RULE: 'Powered by Payex' is the Reference's own badge, reproduced as text (not a real vendor integration); the actual payment processor is To Verify / Backend Dependency Unknown.",
            "No spinner or animation: the Reference is a static capture of this state. Payment success / failure / cancellation return screens have not been supplied (To Verify, unchanged from the Reference note).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the back glyph.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 5, provisional."
          ]
        }
      }
    }),
    screen({
      key: "membership/credit/top-up-credit/external-bank-redirect",
      id: "To Verify",
      path: ["Membership", "Credit", "Top-Up Credit", "External Bank Redirect"],
      scope: "External UI",
      flow: {
        entryPoint: "Payment Processing",
        nextStep: "Return to app (return screens not supplied — To Verify)"
      },
      dependencies: ["External payment gateway"],
      scopeNote: EXTERNAL_UI_NOTE,
      versions: {
        reference: {
          status: "Reference",
          description: "Existing capture of an external bank / payment page reached during top-up.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("credit/external-bank-redirect_reference.png") })
        }
      }
    })
  ]
});

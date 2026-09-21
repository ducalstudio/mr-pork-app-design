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

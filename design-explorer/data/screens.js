/*
 * Mr Pork Design Explorer — Phase 1 screen manifest.
 *
 * Metadata only. No business logic lives here.
 * Every entry is a Reference design (or a "To Verify" placeholder for UI that has not been supplied).
 * Hierarchy source: REFERENCE-UI-PHASE-1.md.
 *
 * Screen IDs:
 *   - `id` is only filled where an ID is already documented (Reference filenames / SCREEN-INVENTORY.md).
 *   - Everything else is "To Verify". The Explorer's internal `key` (derived from `path`) is NOT a product Screen ID.
 *
 * Fields: id, path[], state, status, scope, device, image, description, primaryAction,
 *         secondaryActions[], entryPoint, nextStep, dependencies[], notes[], scopeNote, missing
 */
(function () {
  "use strict";

  var IMG = "../reference-ui/phase-1/";
  var TBV = "To Verify";
  var screens = [];

  var FUTURE_NOTE =
    "This UI is preserved as a future Delivery reference. Delivery is not part of the current required implementation unless explicitly activated by the owner.";
  var HOME_DELIVERY_NOTE =
    "The Delivery action shown in this Reference UI is Future Scope and is not part of the current required implementation. " +
    "The screenshot is preserved unchanged. Home itself and Pickup remain Current Scope.";
  var EXTERNAL_NOTE =
    "This screen represents an external payment/banking page and is not a Mr Pork-owned UI to be recreated.";

  var BASE = {
    id: TBV,
    state: "",
    status: "Reference",
    scope: "Current Scope",
    device: "Mobile",
    image: null,
    description: "",
    primaryAction: TBV,
    secondaryActions: [],
    entryPoint: TBV,
    nextStep: TBV,
    dependencies: [TBV],
    notes: [],
    scopeNote: "",
    missing: false
  };

  function add(defaults, list) {
    list.forEach(function (e) {
      var s = {};
      Object.keys(BASE).forEach(function (k) { s[k] = BASE[k]; });
      Object.keys(defaults).forEach(function (k) { s[k] = defaults[k]; });
      Object.keys(e).forEach(function (k) { s[k] = e[k]; });
      if (s.image) s.image = IMG + s.image;
      screens.push(s);
    });
  }

  function missing(list) {
    list.forEach(function (e) {
      e.status = TBV;
      e.missing = true;
      e.image = null;
      e.notes = (e.notes || []).concat(["UI not supplied yet. Do not generate a design automatically."]);
    });
    add({}, list);
  }

  /* ---------------------------------------------------------------- App Foundation */
  add({ dependencies: ["Backend: Session / configuration (To Verify)"] }, [
    {
      id: "MP-FOUND-001",
      path: ["App Foundation", "Splash"],
      image: "app-foundation/MP-FOUND-001_splash_reference.png",
      description: "Existing brand splash shown on app launch while the app starts up.",
      primaryAction: "None (automatic)",
      entryPoint: "App launch",
      nextStep: "Launch promotion, authentication or Home (session dependent — To Verify)"
    },
    {
      path: ["App Foundation", "Launch Promotion Interstitial"],
      image: "app-foundation/launch-promotion-interstitial_reference.png",
      description: "Existing full-screen promotion shown at launch before the user reaches the main app.",
      entryPoint: "After Splash (To Verify)",
      nextStep: "Home / Authentication (To Verify)",
      dependencies: ["CMS: Promotions (To Verify)"]
    },
    {
      id: "MP-FOUND-005",
      path: ["App Foundation", "System States", "Network Error"],
      image: "system-states/MP-FOUND-005_network-error_reference.png",
      description: "Existing full-screen network error state (inventory name: Offline).",
      primaryAction: "Retry (To Verify)",
      entryPoint: "Any screen that needs the network",
      nextStep: "Returns to the previous screen after retry (To Verify)",
      dependencies: ["Connectivity"]
    }
  ]);

  /* ---------------------------------------------------------------- Home & Navigation */
  add({}, [
    {
      id: "MP-HOME-001",
      path: ["Home & Navigation", "Home — Member"],
      image: "home-navigation/MP-HOME-001_home-member_reference.png",
      description:
        "Existing member Home showing a greeting and notification bell, Credit / Points / Rewards summary boxes, a promotion banner carousel, " +
        "Pickup and Delivery entry tiles, the start of a 'Shop & more' section, and the current 4-tab bottom navigation.",
      primaryAction: "Choose Pickup (Current Scope) to start ordering.",
      secondaryActions: ["Open notifications", "Choose Delivery (Future Scope)", "Browse promotion banner", "Use bottom navigation"],
      entryPoint: "Authenticated app entry",
      nextStep: "Shop, Rewards, Account, Notifications, or fulfilment flow",
      dependencies: ["Backend: Member (credit, points, rewards counts)", "CMS: Promotions"],
      scopeNote: HOME_DELIVERY_NOTE,
      notes: [
        "Bottom navigation shown here (Home, Shop, Rewards, Account) is Reference Navigation only — not a re-approved Master Navigation.",
        "Whether the Reference image is captured mid-scroll is To Verify (the 'Shop & more' section is cut off)."
      ]
    },
    {
      path: ["Home & Navigation", "Promotion Popup"],
      image: "home-navigation/home-promotion-popup_reference.png",
      description: "Existing promotion popup layered over Home.",
      primaryAction: TBV,
      secondaryActions: ["Dismiss (To Verify)"],
      entryPoint: "Opening Home (trigger rules To Verify)",
      nextStep: "Promotion destination or back to Home (To Verify)",
      dependencies: ["CMS: Promotions (To Verify)"]
    },
    {
      path: ["Home & Navigation", "Fulfilment Selector"],
      image: "home-navigation/fulfilment-selector-modal_reference.png",
      description: "Existing modal over Home asking 'How would you like to get your order?' with Pickup and Delivery options.",
      primaryAction: "Choose Pickup (Current Scope).",
      secondaryActions: ["Choose Delivery (Future Scope)"],
      entryPoint: "Home Pickup / Delivery tiles or Shop tab",
      nextStep: "Store selection (Pickup) — Delivery flow is Future Scope",
      dependencies: ["Backend: Fulfilment options (To Verify)"],
      scopeNote: HOME_DELIVERY_NOTE
    },
    {
      id: "MP-ACCOUNT-001",
      path: ["Home & Navigation", "Account Home", "Variant A"],
      state: "Variant A",
      image: "home-navigation/MP-ACCOUNT-001_account-home_reference-a.png",
      description:
        "Existing Account home with profile card (name, phone, Credit / Points / Rewards), language, settings and notification icons, " +
        "and lists: My Purchase (Order), Exclusive For You (Daily Check-In, Coupons & Vouchers, Invite Your Friends), Need Help? (Help Centre, Feedback, Settings), General.",
      primaryAction: TBV,
      secondaryActions: ["Order", "Daily Check-In", "Coupons & Vouchers", "Invite Your Friends", "Help Centre", "Feedback", "Settings"],
      entryPoint: "Bottom navigation: Account",
      nextStep: "Selected account destination",
      dependencies: ["Backend: Member profile", "CMS: Rewards (To Verify)"],
      notes: [
        "Two Account Home versions were supplied (Variant A and B). They appear visually identical at review; which is authoritative is To Verify.",
        "Daily Check-In and Invite Your Friends (Referral) are not confirmed in the documented app structure — scope To Verify.",
        "Any Delivery-related account items, if present further down the list, are Future Scope."
      ]
    },
    {
      id: "MP-ACCOUNT-001",
      path: ["Home & Navigation", "Account Home", "Variant B"],
      state: "Variant B",
      image: "home-navigation/MP-ACCOUNT-001_account-home_reference-b.png",
      description: "Second supplied version of the existing Account home. See Variant A for content.",
      primaryAction: TBV,
      entryPoint: "Bottom navigation: Account",
      dependencies: ["Backend: Member profile", "CMS: Rewards (To Verify)"],
      notes: ["Duplicate version. Do not assume either is authoritative until confirmed by the owner."]
    },
    {
      path: ["Home & Navigation", "Bottom Navigation"],
      image: "home-navigation/MP-HOME-001_home-member_reference.png",
      description:
        "Reference view of the current 4-tab bottom navigation: Home, Shop, Rewards, Account. Shown on the Home — Member screenshot.",
      primaryAction: "Switch between the four tabs.",
      secondaryActions: ["Home", "Shop", "Rewards", "Account"],
      entryPoint: "Visible on primary screens",
      nextStep: "Selected tab destination",
      dependencies: ["None"],
      notes: [
        "Reference Navigation only. Not newly approved Master Navigation. Do not add a fifth tab or redesign in Phase 1.",
        "Uses the same screenshot as Home — Member. This is a review view, not a separate design."
      ]
    }
  ]);

  /* ---------------------------------------------------------------- Authentication */
  var AUTH_DEP = ["Backend: Authentication / OTP"];
  add({ dependencies: AUTH_DEP }, [
    {
      id: "MP-AUTH-006",
      path: ["Authentication", "Login", "Phone Entry"],
      image: "authentication/MP-AUTH-006_login-phone_reference.png",
      description: "Existing login screen with phone number entry.",
      primaryAction: "Continue with phone number (To Verify).",
      entryPoint: "Logged-out entry",
      nextStep: "Login OTP",
      notes: ["Screen shows password / email alternatives whose full flows have not been supplied."]
    },
    {
      id: "MP-AUTH-007",
      path: ["Authentication", "Login", "OTP"],
      image: "authentication/MP-AUTH-007_login-otp_reference.png",
      description: "Existing OTP verification for login.",
      primaryAction: "Verify OTP",
      secondaryActions: ["Resend OTP (To Verify)"],
      entryPoint: "Login — Phone Entry",
      nextStep: "Home"
    },
    {
      id: "MP-AUTH-002",
      path: ["Authentication", "Register", "Registration Form"],
      image: "authentication/MP-AUTH-002_register_reference.png",
      description: "Existing registration form.",
      primaryAction: "Submit registration",
      entryPoint: "Login / entry",
      nextStep: "Registration OTP",
      notes: ["Requests many fields; flow simplification is a known review item."]
    },
    {
      id: "MP-AUTH-003",
      path: ["Authentication", "Register", "OTP"],
      image: "authentication/MP-AUTH-003_registration-otp_reference.png",
      description: "Existing OTP verification during registration.",
      primaryAction: "Verify OTP",
      secondaryActions: ["Resend OTP (To Verify)"],
      entryPoint: "Registration Form",
      nextStep: "To Verify (Complete Profile / Registration Success not supplied)"
    },
    {
      id: "MP-ACCOUNT-010",
      path: ["Authentication", "Logout Confirmation"],
      image: "authentication/MP-ACCOUNT-010_logout-confirmation_reference.png",
      description: "Existing logout confirmation dialog (partial-screen capture).",
      primaryAction: "Confirm logout",
      secondaryActions: ["Cancel"],
      entryPoint: "Account",
      nextStep: "Logged-out state",
      dependencies: ["Backend: Session"]
    }
  ]);

  /* ---------------------------------------------------------------- Notifications */
  (function () {
    var tabs = [
      ["all", "All"],
      ["orders", "Orders"],
      ["promotions", "Promotions"],
      ["announcements", "Announcements"]
    ];
    var states = [
      ["unread", "Unread / Content"],
      ["read", "Read"],
      ["empty", "Empty"]
    ];
    var list = [];
    tabs.forEach(function (t) {
      states.forEach(function (s) {
        list.push({
          path: ["Notifications", "Notification List", t[1], s[1]],
          state: s[1],
          image: "notifications/MP-NOTIFY-001_" + t[0] + "-" + s[0] + "_reference.png",
          description: "Existing notification list, " + t[1] + " tab — " + s[1] + " state."
        });
      });
    });
    add(
      {
        id: "MP-NOTIFY-001",
        primaryAction: "Open a notification (deep link — To Verify).",
        entryPoint: "Header notification bell",
        nextStep: "Related destination (order, promotion, announcement — To Verify)",
        dependencies: ["CMS: Notifications", "CMS: Promotions"],
        notes: ["Tabs shown differ from the notification types in APP-STRUCTURE.md; reconciliation is To Verify."]
      },
      list
    );
  })();

  /* ---------------------------------------------------------------- Rewards */
  var RW_DEP = ["CMS: Rewards", "Backend: Member vouchers", "Staff Membership POS (redemption)"];
  var RW_NOTE = ["Reward / Coupon / Voucher terminology is inconsistent. 'Invalid' naming may need a user-friendly replacement."];
  add({ id: "MP-REWARD-005", dependencies: RW_DEP, entryPoint: "Bottom navigation: Rewards / Account", nextStep: "Voucher Detail", notes: RW_NOTE }, [
    {
      path: ["Rewards", "My Rewards", "Valid", "With Rewards", "Variant A"],
      state: "Valid — With Rewards (Variant A)",
      image: "rewards/MP-REWARD-005_valid-list_reference-a.png",
      description:
        "Existing My Rewards, Valid tab with vouchers. Includes a promo-code entry field with Claim, and voucher cards with a Use Now button.",
      primaryAction: "Use Now on a voucher",
      secondaryActions: ["Claim promo code", "Switch tab: Invalid / Used"],
      notes: RW_NOTE.concat(["Two supplied versions (A and B) appear visually identical at review; which is authoritative is To Verify."])
    },
    {
      path: ["Rewards", "My Rewards", "Valid", "With Rewards", "Variant B"],
      state: "Valid — With Rewards (Variant B)",
      image: "rewards/MP-REWARD-005_valid-list_reference-b.png",
      description: "Second supplied version of My Rewards, Valid tab with vouchers.",
      primaryAction: "Use Now on a voucher",
      notes: RW_NOTE.concat(["Duplicate version. Do not assume either is authoritative."])
    },
    {
      path: ["Rewards", "My Rewards", "Valid", "Empty"],
      state: "Valid — Empty",
      image: "rewards/MP-REWARD-005_valid-empty_reference.png",
      description: "Existing My Rewards, Valid tab with no vouchers."
    },
    {
      path: ["Rewards", "My Rewards", "Invalid", "With Rewards"],
      state: "Invalid — With Rewards",
      image: "rewards/MP-REWARD-005_invalid-list_reference.png",
      description: "Existing My Rewards, Invalid tab with vouchers."
    },
    {
      path: ["Rewards", "My Rewards", "Invalid", "Empty"],
      state: "Invalid — Empty",
      image: "rewards/MP-REWARD-005_invalid-empty_reference.png",
      description: "Existing My Rewards, Invalid tab with no vouchers."
    },
    {
      path: ["Rewards", "My Rewards", "Used", "With Rewards"],
      state: "Used — With Rewards",
      image: "rewards/MP-REWARD-005_used-list_reference.png",
      description: "Existing My Rewards, Used tab with vouchers."
    },
    {
      path: ["Rewards", "My Rewards", "Used", "Empty"],
      state: "Used — Empty",
      image: "rewards/MP-REWARD-005_used-empty_reference.png",
      description: "Existing My Rewards, Used tab with no vouchers."
    }
  ]);
  add({ dependencies: RW_DEP, notes: RW_NOTE }, [
    {
      id: "MP-REWARD-006",
      path: ["Rewards", "Voucher Detail"],
      image: "rewards/MP-REWARD-006_voucher-detail_reference.png",
      description: "Existing voucher detail view.",
      primaryAction: "Use / redeem the voucher (To Verify).",
      entryPoint: "My Rewards",
      nextStep: "Redemption"
    },
    {
      path: ["Rewards", "Redemption", "Active QR / Code"],
      state: "Active QR / Code",
      image: "rewards/reward-redemption-code_reference.png",
      description: "Existing redemption sheet presenting a code / QR for staff validation (partial-screen capture).",
      primaryAction: "Present code / QR to staff",
      entryPoint: "Voucher Detail",
      nextStep: "Successful or Failed",
      notes: RW_NOTE.concat(["Reward-specific QR vs Member QR vs code mechanism is not confirmed (Open Question)."])
    },
    {
      path: ["Rewards", "Redemption", "Successful"],
      state: "Successful",
      image: "rewards/reward-redemption-success_reference.png",
      description: "Existing redemption success message (partial-screen capture).",
      entryPoint: "Redemption — Active QR / Code"
    },
    {
      path: ["Rewards", "Redemption", "Failed"],
      state: "Failed",
      image: "rewards/reward-redemption-failed_reference.png",
      description: "Existing redemption failure message (partial-screen capture).",
      entryPoint: "Redemption — Active QR / Code"
    }
  ]);

  /* ---------------------------------------------------------------- Membership — Credit */
  var CR_DEP = ["Backend: Member credit ledger", "CMS: Membership / Credit rules (CMS Rule Required)"];
  var CR_NOTE = ["Credit transaction sample values contain possible sign inconsistencies (known review item)."];
  add({ dependencies: CR_DEP }, [
    {
      id: "MP-MEMBER-009",
      path: ["Membership", "Credit", "My Credit", "All Transactions"],
      state: "All Transactions",
      image: "credit/MP-MEMBER-009_my-credit-all_reference.png",
      description: "Existing My Credit screen showing the credit balance and transaction list (all types).",
      primaryAction: "Top up credit",
      secondaryActions: ["Filter by transaction type", "Filter by date range", "View credit description"],
      entryPoint: "Home / Account credit box",
      nextStep: "Top-Up Credit, filters",
      notes: CR_NOTE
    },
    {
      id: "MP-MEMBER-010",
      path: ["Membership", "Credit", "My Credit", "Buy Product"],
      state: "Buy Product",
      image: "credit/MP-MEMBER-010_credit-history-buy-product_reference.png",
      description: "Existing credit history filtered to Buy Product transactions.",
      entryPoint: "My Credit — type filter",
      notes: CR_NOTE
    },
    {
      id: "MP-MEMBER-010",
      path: ["Membership", "Credit", "My Credit", "Order Refund"],
      state: "Order Refund",
      image: "credit/MP-MEMBER-010_credit-history-order-refund_reference.png",
      description: "Existing credit history filtered to Order Refund transactions.",
      entryPoint: "My Credit — type filter",
      notes: CR_NOTE
    },
    {
      id: "MP-MEMBER-010",
      path: ["Membership", "Credit", "My Credit", "Top-Up"],
      state: "Top-Up",
      image: "credit/MP-MEMBER-010_credit-history-topup_reference.png",
      description: "Existing credit history filtered to Top-Up transactions.",
      entryPoint: "My Credit — type filter",
      notes: CR_NOTE
    },
    {
      id: "MP-MEMBER-010",
      path: ["Membership", "Credit", "My Credit", "Date Filter Applied"],
      state: "Date Filter Applied",
      image: "credit/MP-MEMBER-010_credit-history-date-filter_reference.png",
      description: "Existing credit history with a date range filter applied.",
      entryPoint: "My Credit — date filter",
      notes: CR_NOTE
    }
  ]);
  add({ dependencies: ["Backend: Member credit ledger"], entryPoint: "My Credit — Filter", nextStep: "My Credit (filtered)" }, [
    {
      path: ["Membership", "Credit", "Transaction Type Filter", "All Types"],
      state: "All Types",
      image: "credit/credit-filter-all-types_reference.png",
      description: "Existing transaction type filter sheet, All Types selected (partial-screen capture)."
    },
    {
      path: ["Membership", "Credit", "Transaction Type Filter", "Buy Product"],
      state: "Buy Product",
      image: "credit/credit-filter-buy-product_reference.png",
      description: "Existing transaction type filter sheet, Buy Product selected (partial-screen capture)."
    },
    {
      path: ["Membership", "Credit", "Transaction Type Filter", "Order Refund"],
      state: "Order Refund",
      image: "credit/credit-filter-order-refund_reference.png",
      description: "Existing transaction type filter sheet, Order Refund selected (partial-screen capture)."
    },
    {
      path: ["Membership", "Credit", "Transaction Type Filter", "Top-Up"],
      state: "Top-Up",
      image: "credit/credit-filter-topup_reference.png",
      description: "Existing transaction type filter sheet, Top-Up selected (partial-screen capture)."
    },
    {
      path: ["Membership", "Credit", "Date Range Filter", "Default"],
      state: "Default",
      image: "credit/date-range-default_reference.png",
      description: "Existing date range picker in its default state (partial-screen capture)."
    },
    {
      path: ["Membership", "Credit", "Date Range Filter", "Selected"],
      state: "Selected",
      image: "credit/date-range-selected_reference.png",
      description: "Existing date range picker with a range partly selected (partial-screen capture)."
    },
    {
      path: ["Membership", "Credit", "Date Range Filter", "Complete"],
      state: "Complete",
      image: "credit/date-range-complete_reference.png",
      description: "Existing date range picker with a complete range selected (partial-screen capture)."
    },
    {
      path: ["Membership", "Credit", "Credit Description"],
      image: "credit/credit-description_reference.png",
      description: "Existing credit description popup (partial-screen capture).",
      entryPoint: "My Credit",
      nextStep: "Back to My Credit",
      dependencies: ["CMS: Membership / Credit rules (CMS Rule Required)"]
    }
  ]);
  var TOPUP_DEP = ["Backend: Payment", "External payment gateway", "CMS Rule Required (credit top-up rules)"];
  add({ dependencies: TOPUP_DEP, entryPoint: "My Credit — Top Up" }, [
    {
      path: ["Membership", "Credit", "Top-Up Credit", "Payment Method", "Default"],
      state: "Default",
      image: "credit/top-up-credit-default_reference.png",
      description: "Existing Top-Up Credit sheet before a payment method is chosen (partial-screen capture).",
      primaryAction: "Choose amount and payment method",
      nextStep: "Select Bank (Online Banking)"
    },
    {
      path: ["Membership", "Credit", "Top-Up Credit", "Payment Method", "Online Banking"],
      state: "Online Banking",
      image: "credit/top-up-credit-online-banking_reference.png",
      description: "Existing Top-Up Credit sheet with Online Banking chosen (partial-screen capture).",
      nextStep: "Select Bank",
      notes: ["Other payment methods are not shown; do not assume any (To Verify)."]
    },
    {
      path: ["Membership", "Credit", "Top-Up Credit", "Select Bank", "Default"],
      state: "Default",
      image: "credit/select-bank-default_reference.png",
      description: "Existing bank selection list, default (partial-screen capture).",
      nextStep: "Payment Processing"
    },
    {
      path: ["Membership", "Credit", "Top-Up Credit", "Select Bank", "Search"],
      state: "Search",
      image: "credit/select-bank-search_reference.png",
      description: "Existing bank selection list with a search in progress (partial-screen capture)."
    },
    {
      path: ["Membership", "Credit", "Top-Up Credit", "Select Bank", "Selected"],
      state: "Selected",
      image: "credit/select-bank-selected_reference.png",
      description: "Existing bank selection list with a bank selected (partial-screen capture)."
    },
    {
      path: ["Membership", "Credit", "Top-Up Credit", "Processing"],
      image: "credit/payment-processing_reference.png",
      description: "Existing payment processing screen shown while the payment is prepared.",
      entryPoint: "Select Bank",
      nextStep: "External Bank Redirect",
      notes: ["Payment success / failure / cancellation return screens have not been supplied (To Verify)."]
    },
    {
      path: ["Membership", "Credit", "Top-Up Credit", "External Bank Redirect"],
      scope: "External UI",
      image: "credit/external-bank-redirect_reference.png",
      description: "Existing capture of an external bank / payment page reached during top-up.",
      entryPoint: "Payment Processing",
      nextStep: "Return to app (return screens not supplied — To Verify)",
      dependencies: ["External payment gateway"],
      scopeNote: EXTERNAL_NOTE
    }
  ]);

  /* ---------------------------------------------------------------- Membership — Points */
  var PT_DEP = ["Backend: Member points", "CMS: Rewards", "CMS Rule Required (points rules)"];
  add({ dependencies: PT_DEP }, [
    {
      id: "MP-REWARD-002",
      path: ["Membership", "Points", "Point Reward Detail", "Redeemable"],
      state: "Redeemable",
      image: "points/MP-REWARD-002_point-reward-redeemable_reference.png",
      description: "Existing point reward detail where the member has enough points to redeem.",
      primaryAction: "Redeem with points",
      secondaryActions: ["View rules"],
      entryPoint: "Points reward list (list screen not supplied — To Verify)",
      nextStep: "Redemption result / Exchange Records"
    },
    {
      id: "MP-REWARD-002",
      path: ["Membership", "Points", "Point Reward Detail", "Insufficient Points"],
      state: "Insufficient Points",
      image: "points/MP-REWARD-002_point-reward-insufficient_reference.png",
      description: "Existing point reward detail where the member does not have enough points.",
      primaryAction: "Redeem (disabled / blocked — To Verify)",
      entryPoint: "Points reward list (not supplied — To Verify)"
    },
    {
      path: ["Membership", "Points", "Point Reward Rules"],
      image: "points/point-reward-rules_reference.png",
      description: "Existing point reward rules popup (partial-screen capture).",
      entryPoint: "Point Reward Detail",
      nextStep: "Back to Point Reward Detail",
      notes: ["Do not derive any points conversion rule from the screenshot for implementation without owner confirmation."]
    },
    {
      path: ["Membership", "Points", "Exchange Records"],
      image: "points/exchange-records_reference.png",
      description: "Existing list of past point-reward exchanges.",
      entryPoint: "Points reward area (To Verify)",
      nextStep: "To Verify"
    }
  ]);

  /* ---------------------------------------------------------------- Shop & Ordering */
  add({}, [
    {
      id: "MP-CHECKOUT-006",
      path: ["Shop & Ordering", "Store Selection", "Map View"],
      state: "Map View",
      image: "ordering/MP-CHECKOUT-006_select-store-map_reference.png",
      description: "Existing store / outlet selection shown on a map.",
      primaryAction: "Select a store for pickup",
      secondaryActions: ["Switch to List View"],
      entryPoint: "Fulfilment Selector (Pickup)",
      nextStep: "Shop",
      dependencies: ["CMS: Outlets / Settings (To Verify)"],
      notes: ["Shop uses both 'Store' and 'Outlet'; terminology should later be unified."]
    },
    {
      id: "MP-CHECKOUT-006",
      path: ["Shop & Ordering", "Store Selection", "List View"],
      state: "List View",
      image: "ordering/MP-CHECKOUT-006_select-outlet-list_reference.png",
      description: "Existing store / outlet selection shown as a list.",
      primaryAction: "Select a store for pickup",
      secondaryActions: ["Switch to Map View"],
      entryPoint: "Fulfilment Selector (Pickup)",
      nextStep: "Shop",
      dependencies: ["CMS: Outlets / Settings (To Verify)"],
      notes: ["Shop uses both 'Store' and 'Outlet'; terminology should later be unified."]
    },
    {
      id: "MP-SHOP-005",
      path: ["Shop & Ordering", "Search Results"],
      image: "ordering/MP-SHOP-005_search-results_reference.png",
      description: "Existing product search results.",
      primaryAction: "Open a product",
      entryPoint: "Shop search",
      nextStep: "Product Detail",
      dependencies: ["CMS: Products", "CMS: Categories"]
    },
    {
      id: "MP-PRODUCT-001",
      path: ["Shop & Ordering", "Product Detail"],
      image: "ordering/MP-PRODUCT-001_product-detail_reference.png",
      description: "Existing product detail screen.",
      primaryAction: "Add To Cart / Place the order (priority To Verify)",
      entryPoint: "Shop / Search Results",
      nextStep: "Cart / Checkout",
      dependencies: ["CMS: Products", "Backend: Pricing (weight-based logic To Verify)"],
      notes: ["Uses both 'Add To Cart' and 'Place the order'; interaction priority should be reviewed."]
    },
    {
      id: "MP-CHECKOUT-001",
      path: ["Shop & Ordering", "Checkout", "Review Order — Pickup"],
      image: "ordering/MP-CHECKOUT-001_review-order-pickup_reference.png",
      description: "Existing Review Order screen for a Pickup order.",
      primaryAction: "Proceed to place / pay for the order (To Verify)",
      entryPoint: "Cart / Product Detail",
      nextStep: "Payment (not supplied — To Verify)",
      dependencies: ["Backend: Orders", "Backend: Payment (To Verify)", "CMS: Products"],
      notes: ["'Pay At Outlet' flow and payment success / failure returns are not yet supplied."]
    }
  ]);

  /* ---------------------------------------------------------------- Delivery — Future Scope */
  add({ scope: "Future Scope", scopeNote: FUTURE_NOTE, dependencies: ["Backend: Delivery (Backend Dependency Unknown)"] }, [
    {
      path: ["Delivery — Future Scope", "Delivery Shop"],
      image: "delivery-future/delivery-shop_reference.png",
      description: "Existing Shop variant for Delivery ordering.",
      entryPoint: "Fulfilment Selector (Delivery)"
    },
    {
      id: "MP-CHECKOUT-003",
      path: ["Delivery — Future Scope", "Address", "Saved Addresses"],
      state: "Saved Addresses",
      image: "delivery-future/MP-CHECKOUT-003_saved-addresses_reference.png",
      description: "Existing saved address list for delivery.",
      primaryAction: "Select an address",
      secondaryActions: ["Add new address", "Edit address"],
      nextStep: "New Address / Edit Address / Checkout",
      notes: ["Address screens may overlap with Account address screens in the inventory (MP-ACCOUNT-004..006) — reconcile separately."]
    },
    {
      id: "MP-CHECKOUT-003",
      path: ["Delivery — Future Scope", "Address", "Selected Address"],
      state: "Selected Address",
      image: "delivery-future/MP-CHECKOUT-003_saved-addresses-selected_reference.png",
      description: "Existing saved address list with an address selected."
    },
    {
      id: "MP-CHECKOUT-004",
      path: ["Delivery — Future Scope", "Address", "New Address", "Empty"],
      state: "Empty",
      image: "delivery-future/MP-CHECKOUT-004_new-address-empty_reference.png",
      description: "Existing new-address form, empty."
    },
    {
      id: "MP-CHECKOUT-004",
      path: ["Delivery — Future Scope", "Address", "New Address", "Filled"],
      state: "Filled",
      image: "delivery-future/MP-CHECKOUT-004_new-address-filled_reference.png",
      description: "Existing new-address form, filled."
    },
    {
      id: "MP-CHECKOUT-005",
      path: ["Delivery — Future Scope", "Address", "Edit Address"],
      image: "delivery-future/MP-CHECKOUT-005_edit-address_reference.png",
      description: "Existing edit-address form."
    }
  ]);

  /* ---------------------------------------------------------------- Legal */
  add({ dependencies: ["CMS: Settings / legal content (To Verify)"], entryPoint: "Account / Registration" }, [
    {
      id: "MP-SUPPORT-003",
      path: ["Legal", "Privacy Policy"],
      image: "legal/MP-SUPPORT-003_privacy-policy_reference.png",
      description: "Existing Privacy Policy page.",
      nextStep: "Back",
      notes: ["Membership, refund / return, PDPA and other applicable policy screens are still needed (known review item)."]
    },
    {
      id: "MP-SUPPORT-004",
      path: ["Legal", "Terms & Conditions"],
      image: "legal/MP-SUPPORT-004_terms-conditions_reference.png",
      description: "Existing Terms & Conditions page.",
      nextStep: "Back",
      notes: ["Membership, refund / return, PDPA and other applicable policy screens are still needed (known review item)."]
    }
  ]);

  /* ---------------------------------------------------------------- Missing UI (placeholders) */
  missing([
    {
      id: "MP-MEMBER-002",
      path: ["Membership", "Member Card / Member QR"],
      description: "Digital member identity and Member QR presented to staff. Documented in the inventory; no Reference UI supplied.",
      dependencies: ["Backend: Member identity / QR token", "Staff Membership POS (scan)"]
    },
    {
      id: "MP-MEMBER-006",
      path: ["Membership", "Points", "Points Summary"],
      description: "Points balance screen. No Reference UI supplied.",
      dependencies: ["Backend: Member points"]
    },
    {
      id: "MP-MEMBER-007",
      path: ["Membership", "Points", "Points Earning History"],
      description: "Points earning / transaction history. No Reference UI supplied.",
      dependencies: ["Backend: Member points ledger", "Staff Membership POS (earning)"]
    },
    {
      id: "MP-CHECKOUT-010",
      path: ["Shop & Ordering", "Checkout", "Payment Failed"],
      description: "Payment failure return screen. No Reference UI supplied.",
      dependencies: ["Backend: Payment"]
    },
    {
      path: ["Shop & Ordering", "Checkout", "Payment Success"],
      description: "Payment success return screen. No Reference UI supplied.",
      dependencies: ["Backend: Payment"]
    },
    {
      path: ["Shop & Ordering", "Checkout", "Pay At Outlet"],
      description: "Pay At Outlet flow. No Reference UI supplied; existence in scope is To Verify.",
      dependencies: ["Backend: Orders / Payment"]
    },
    {
      id: "MP-ORDER-003",
      path: ["Shop & Ordering", "Orders", "Order History"],
      description: "Past orders list. No Reference UI supplied.",
      dependencies: ["Backend: Orders"]
    },
    {
      id: "MP-ORDER-004",
      path: ["Shop & Ordering", "Orders", "Order Status / Detail"],
      description: "Order detail and status. No Reference UI supplied. Statuses must come from the backend (Backend Dependency Unknown).",
      dependencies: ["Backend: Orders", "CMS: Orders"]
    }
  ]);

  window.MP_SCREENS = screens;
})();

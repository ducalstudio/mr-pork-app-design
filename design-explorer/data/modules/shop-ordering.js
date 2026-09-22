/* Shop & Ordering — screen data (Reference designs). Metadata only; no business logic.
 * screen = canonical product definition; versions.* = design-specific definition (+ optional overrides). */
import { defineModule, screen, devices, phase1 } from "../helpers.js";

export default defineModule({
  id: "shop-ordering",
  label: "Shop & Ordering",
  screens: [
    screen({
      key: "shop-and-ordering/store-selection/map-view",
      id: "MP-CHECKOUT-006",
      path: ["Shop & Ordering", "Store Selection", "Map View"],
      scope: "Current Scope",
      state: "Map View",
      flow: {
        entryPoint: "Fulfilment Selector (Pickup)",
        nextStep: "Shop"
      },
      dependencies: ["CMS: Outlets / Settings (To Verify)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing store / outlet selection shown on a map.",
          primaryAction: "Select a store for pickup",
          secondaryActions: ["Switch to List View"],
          notes: ["Shop uses both 'Store' and 'Outlet'; terminology should later be unified."],
          devices: devices({ mobile: phase1("ordering/MP-CHECKOUT-006_select-store-map_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/ordering/store-selection/index.html?state=map",
          description: "Responsive Draft of the store selection map view: header with locate-me, a static placeholder map with a pin, hint text, a horizontal peek scroll of store cards.",
          primaryAction: "Select a store for pickup",
          secondaryActions: ["Switch to List View"],
          notes: [
            "ONE prototype, state-driven (prototypes/ordering/store-selection/), shared with List View via ?state=map|list. The Reference titles the same flow “Select Your Store” (map) and “Select Your Outlet” (list) — a Reference inconsistency, reproduced per state, not unified (unchanged from the Reference note on terminology).",
            "New shared component (Batch 6): store-card (photo, name, status, address/distance, action), used two ways from one card shape: --scroll (this screen's map view, card-row-style horizontal peek) and --stack (List View).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the map background (flat grey fill, not a real map tile/SDK), the pin, outlet photos and the locate-me glyph. Map rendering, live location and geocoding are Backend Dependency Unknown.",
            "Measured by eye (a faster pass than the pixel measurement used in earlier batches, consistent with the Batch 6 speed rule).",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 6, provisional. Built from Shared Prototype Components under prototypes/_components/.",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify). No OS status bar is drawn (Phase A rule)."
          ]
        }
      }
    }),
    screen({
      key: "shop-and-ordering/store-selection/list-view",
      id: "MP-CHECKOUT-006",
      path: ["Shop & Ordering", "Store Selection", "List View"],
      scope: "Current Scope",
      state: "List View",
      flow: {
        entryPoint: "Fulfilment Selector (Pickup)",
        nextStep: "Shop"
      },
      dependencies: ["CMS: Outlets / Settings (To Verify)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing store / outlet selection shown as a list.",
          primaryAction: "Select a store for pickup",
          secondaryActions: ["Switch to Map View"],
          notes: ["Shop uses both 'Store' and 'Outlet'; terminology should later be unified."],
          devices: devices({ mobile: phase1("ordering/MP-CHECKOUT-006_select-outlet-list_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/ordering/store-selection/index.html?state=list",
          description: "Responsive Draft of the store selection list view: search field, State / City filter pills, stacked store cards (first highlighted). Shares the state-driven prototype with Map View; see that entry for the full component notes (not repeated here).",
          primaryAction: "Select a store for pickup",
          secondaryActions: ["Switch to Map View"],
          notes: [
            "Measured from the Reference (440 x 956) with tools/lib/png.mjs: search field 400 x 20 in a 44px pill at y 150; filter row y 220 to 255; first card 400 x 125 at y 285.",
            "SAMPLE DATA / NOT BUSINESS RULE: the Reference showed what looked like a real personal address reused as sample outlet data; sanitized to a fictional address of similar length/format (CLAUDE.md §5), the same one used in the Registration form Draft, for a consistent fictional identity across the app."
          ]
        }
      }
    }),
    screen({
      key: "shop-and-ordering/search-results",
      id: "MP-SHOP-005",
      path: ["Shop & Ordering", "Search Results"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Shop search",
        nextStep: "Product Detail"
      },
      dependencies: ["CMS: Products", "CMS: Categories"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing product search results.",
          primaryAction: "Open a product",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("ordering/MP-SHOP-005_search-results_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/ordering/search-results/index.html",
          description: "Responsive Draft of product search results: band header with an inline search field, product rows with a small add button, a running total + Check Out, and the Reference bottom navigation (Shop selected).",
          primaryAction: "Open a product",
          secondaryActions: [],
          notes: [
            "SAMPLE DATA / NOT BUSINESS RULE: product rows (“MacBook Neo”, “512 GB Magic Keyboard with Touch ID”, “RM 5,201.30”) and the search query (“zpoaaa”) are the Reference's own placeholder content — an obvious CMS mock, not real Mr Pork products, kept verbatim rather than corrected. The cart total (RM 189.90) does not match the three listed rows: a Reference inconsistency, reproduced as-is.",
            "The add button is a 20px visual square inside a 44px real hit area (padding technique, not a visible size change).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the back / search glyphs, product thumbnails and the four bottom-nav icons.",
            "Measured by eye (a faster pass than the pixel measurement used in earlier batches, consistent with the Batch 6 speed rule).",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 6, provisional."
          ]
        }
      }
    }),
    screen({
      key: "shop-and-ordering/product-detail",
      id: "MP-PRODUCT-001",
      path: ["Shop & Ordering", "Product Detail"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Shop / Search Results",
        nextStep: "Cart / Checkout"
      },
      dependencies: ["CMS: Products", "Backend: Pricing (weight-based logic To Verify)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing product detail screen.",
          primaryAction: "Add To Cart / Place the order (priority To Verify)",
          secondaryActions: [],
          notes: [
            "Uses both 'Add To Cart' and 'Place the order'; interaction priority should be reviewed."
          ],
          devices: devices({ mobile: phase1("ordering/MP-PRODUCT-001_product-detail_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/ordering/product-detail/index.html",
          description: "Responsive Draft of the product detail screen: full-bleed red hero, name/Chinese label, expandable description, size chips, a bottom bar with price, quantity stepper, Add To Cart and Place the order.",
          primaryAction: "Add To Cart / Place the order (priority To Verify)",
          secondaryActions: [],
          notes: [
            "Measured from the Reference (440 x 956) with tools/lib/png.mjs: hero fills y 0 to 392 (red, no status bar drawn); name y 415 (16px / 600); size chips y 548; price y 812 (16px / 700); stepper 92 x 18 at y 811; action buttons 399 x 55 at y 860.",
            "SAMPLE DATA / NOT BUSINESS RULE: product name (“Pala Segala”), its Chinese label, the long repeated-‘a’ placeholder description, size options and price are the Reference's own content, kept verbatim.",
            "‘show more’ expands the truncated description (Draft-interactive, a static Reference capture cannot show this). Quantity stepper and size selection are Draft-interactive; no cart state persists across screens.",
            "Uses both ‘Add To Cart’ and ‘Place the order’; interaction priority should be reviewed (unchanged from the Reference note).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the hero product photo (not cropped from the Reference image) and the back glyph.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 6, provisional."
          ]
        }
      }
    }),
    screen({
      key: "shop-and-ordering/checkout/review-order-pickup",
      id: "MP-CHECKOUT-001",
      path: ["Shop & Ordering", "Checkout", "Review Order — Pickup"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Cart / Product Detail",
        nextStep: "Payment (not supplied — To Verify)"
      },
      dependencies: ["Backend: Orders", "Backend: Payment (To Verify)", "CMS: Products"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing Review Order screen for a Pickup order.",
          primaryAction: "Proceed to place / pay for the order (To Verify)",
          secondaryActions: [],
          notes: ["'Pay At Outlet' flow and payment success / failure returns are not yet supplied."],
          devices: devices({ mobile: phase1("ordering/MP-CHECKOUT-001_review-order-pickup_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/ordering/review-order-pickup/index.html",
          description: "Responsive Draft of the Review Order (Pickup) screen: fulfilment pill, outlet/pickup-time rows, a waiting-time banner, Order Summary, Payment Details / Method rows, Contacts, Order Remarks, and a bottom Pay button.",
          primaryAction: "Proceed to place / pay for the order (To Verify)",
          secondaryActions: [],
          notes: [
            "SAMPLE DATA / NOT BUSINESS RULE: the product row, waiting-time text (including “mintues”, a Reference typo, kept verbatim) and totals are the Reference's own sample content. The Reference showed what looked like a real personal phone number under ‘Contacts’; sanitized to the same fictional number used elsewhere in the Draft (+60 17 112 0210).",
            "Several rows (Total discount, Payment Method value, Order Remarks) show a label with no adjacent value in the Reference: reproduced as label-only rows, not invented values; their layout when a value IS present is To Verify.",
            "‘Pay At Outlet’ flow and payment success / failure returns are not yet supplied (unchanged from the Reference note).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the back glyph, outlet/voucher icons and the product thumbnail.",
            "Measured by eye (a faster pass than the pixel measurement used in earlier batches, consistent with the Batch 6 speed rule).",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 6, provisional."
          ]
        }
      }
    }),
    screen({
      key: "shop-and-ordering/checkout/payment-failed",
      id: "MP-CHECKOUT-010",
      path: ["Shop & Ordering", "Checkout", "Payment Failed"],
      scope: "Current Scope",
      flow: {
        entryPoint: "To Verify",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Payment"],
      designAvailability: "to-verify",
      purpose: "Payment failure return screen.",
      notes: [
        "UI not supplied yet. Do not generate a design automatically."
      ],
      versions: {}
    }),
    screen({
      key: "shop-and-ordering/checkout/payment-success",
      id: "To Verify",
      path: ["Shop & Ordering", "Checkout", "Payment Success"],
      scope: "Current Scope",
      flow: {
        entryPoint: "To Verify",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Payment"],
      designAvailability: "to-verify",
      purpose: "Payment success return screen.",
      notes: [
        "UI not supplied yet. Do not generate a design automatically."
      ],
      versions: {}
    }),
    screen({
      key: "shop-and-ordering/checkout/pay-at-outlet",
      id: "To Verify",
      path: ["Shop & Ordering", "Checkout", "Pay At Outlet"],
      scope: "Current Scope",
      flow: {
        entryPoint: "To Verify",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Orders / Payment"],
      designAvailability: "to-verify",
      purpose: "Pay At Outlet flow.",
      notes: [
        "UI not supplied yet. Do not generate a design automatically.",
        "Whether this flow is in scope is To Verify."
      ],
      versions: {}
    }),
    screen({
      key: "shop-and-ordering/orders/order-history",
      id: "MP-ORDER-003",
      path: ["Shop & Ordering", "Orders", "Order History"],
      scope: "Current Scope",
      flow: {
        entryPoint: "To Verify",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Orders"],
      designAvailability: "to-verify",
      purpose: "Past orders list.",
      notes: [
        "UI not supplied yet. Do not generate a design automatically."
      ],
      versions: {}
    }),
    screen({
      key: "shop-and-ordering/orders/order-status-detail",
      id: "MP-ORDER-004",
      path: ["Shop & Ordering", "Orders", "Order Status / Detail"],
      scope: "Current Scope",
      flow: {
        entryPoint: "To Verify",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Orders", "CMS: Orders"],
      designAvailability: "to-verify",
      purpose: "Order detail and status.",
      notes: [
        "UI not supplied yet. Do not generate a design automatically.",
        "Statuses must come from the backend (Backend Dependency Unknown)."
      ],
      versions: {}
    })
  ]
});

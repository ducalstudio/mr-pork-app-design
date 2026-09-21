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

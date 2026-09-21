/* Delivery — Future Scope — screen data (Reference designs). Metadata only; no business logic.
 * screen = canonical product definition; versions.* = design-specific definition (+ optional overrides). */
import { defineModule, screen, devices, phase1 } from "../helpers.js";
import { FUTURE_DELIVERY_NOTE } from "../shared.js";

export default defineModule({
  id: "delivery-future",
  label: "Delivery — Future Scope",
  screens: [
    screen({
      key: "delivery-future-scope/delivery-shop",
      id: "To Verify",
      path: ["Delivery — Future Scope", "Delivery Shop"],
      scope: "Future Scope",
      flow: {
        entryPoint: "Fulfilment Selector (Delivery)",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Delivery (Backend Dependency Unknown)"],
      scopeNote: FUTURE_DELIVERY_NOTE,
      versions: {
        reference: {
          status: "Reference",
          description: "Existing Shop variant for Delivery ordering.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("delivery-future/delivery-shop_reference.png") })
        }
      }
    }),
    screen({
      key: "delivery-future-scope/address/saved-addresses",
      id: "MP-CHECKOUT-003",
      path: ["Delivery — Future Scope", "Address", "Saved Addresses"],
      scope: "Future Scope",
      state: "Saved Addresses",
      flow: {
        entryPoint: "To Verify",
        nextStep: "New Address / Edit Address / Checkout"
      },
      dependencies: ["Backend: Delivery (Backend Dependency Unknown)"],
      scopeNote: FUTURE_DELIVERY_NOTE,
      versions: {
        reference: {
          status: "Reference",
          description: "Existing saved address list for delivery.",
          primaryAction: "Select an address",
          secondaryActions: ["Add new address", "Edit address"],
          notes: [
            "Address screens may overlap with Account address screens in the inventory (MP-ACCOUNT-004..006) — reconcile separately."
          ],
          devices: devices({ mobile: phase1("delivery-future/MP-CHECKOUT-003_saved-addresses_reference.png") })
        }
      }
    }),
    screen({
      key: "delivery-future-scope/address/selected-address",
      id: "MP-CHECKOUT-003",
      path: ["Delivery — Future Scope", "Address", "Selected Address"],
      scope: "Future Scope",
      state: "Selected Address",
      flow: {
        entryPoint: "To Verify",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Delivery (Backend Dependency Unknown)"],
      scopeNote: FUTURE_DELIVERY_NOTE,
      versions: {
        reference: {
          status: "Reference",
          description: "Existing saved address list with an address selected.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("delivery-future/MP-CHECKOUT-003_saved-addresses-selected_reference.png") })
        }
      }
    }),
    screen({
      key: "delivery-future-scope/address/new-address/empty",
      id: "MP-CHECKOUT-004",
      path: ["Delivery — Future Scope", "Address", "New Address", "Empty"],
      scope: "Future Scope",
      state: "Empty",
      flow: {
        entryPoint: "To Verify",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Delivery (Backend Dependency Unknown)"],
      scopeNote: FUTURE_DELIVERY_NOTE,
      versions: {
        reference: {
          status: "Reference",
          description: "Existing new-address form, empty.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("delivery-future/MP-CHECKOUT-004_new-address-empty_reference.png") })
        }
      }
    }),
    screen({
      key: "delivery-future-scope/address/new-address/filled",
      id: "MP-CHECKOUT-004",
      path: ["Delivery — Future Scope", "Address", "New Address", "Filled"],
      scope: "Future Scope",
      state: "Filled",
      flow: {
        entryPoint: "To Verify",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Delivery (Backend Dependency Unknown)"],
      scopeNote: FUTURE_DELIVERY_NOTE,
      versions: {
        reference: {
          status: "Reference",
          description: "Existing new-address form, filled.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("delivery-future/MP-CHECKOUT-004_new-address-filled_reference.png") })
        }
      }
    }),
    screen({
      key: "delivery-future-scope/address/edit-address",
      id: "MP-CHECKOUT-005",
      path: ["Delivery — Future Scope", "Address", "Edit Address"],
      scope: "Future Scope",
      flow: {
        entryPoint: "To Verify",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Delivery (Backend Dependency Unknown)"],
      scopeNote: FUTURE_DELIVERY_NOTE,
      versions: {
        reference: {
          status: "Reference",
          description: "Existing edit-address form.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("delivery-future/MP-CHECKOUT-005_edit-address_reference.png") })
        }
      }
    })
  ]
});

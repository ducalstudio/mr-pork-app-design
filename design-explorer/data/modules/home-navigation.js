/* Home & Navigation — screen data (Reference designs). Metadata only; no business logic.
 * screen = canonical product definition; versions.* = design-specific definition (+ optional overrides). */
import { defineModule, screen, devices, phase1 } from "../helpers.js";
import { HOME_DELIVERY_NOTE } from "../shared.js";

export default defineModule({
  id: "home-navigation",
  label: "Home & Navigation",
  screens: [
    screen({
      key: "home-and-navigation/home-member",
      id: "MP-HOME-001",
      path: ["Home & Navigation", "Home — Member"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Authenticated app entry",
        nextStep: "Shop, Rewards, Account, Notifications, or fulfilment flow"
      },
      dependencies: ["Backend: Member (credit, points, rewards counts)", "CMS: Promotions"],
      scopeNote: HOME_DELIVERY_NOTE,
      versions: {
        reference: {
          status: "Reference",
          description: "Existing member Home showing a greeting and notification bell, Credit / Points / Rewards summary boxes, a promotion banner carousel, Pickup and Delivery entry tiles, the start of a 'Shop & more' section, and the current 4-tab bottom navigation.",
          primaryAction: "Choose Pickup (Current Scope) to start ordering.",
          secondaryActions: [
            "Open notifications",
            "Choose Delivery (Future Scope)",
            "Browse promotion banner",
            "Use bottom navigation"
          ],
          notes: [
            "Bottom navigation shown here (Home, Shop, Rewards, Account) is Reference Navigation only — not a re-approved Master Navigation.",
            "Whether the Reference image is captured mid-scroll is To Verify (the 'Shop & more' section is cut off)."
          ],
          devices: devices({ mobile: phase1("home-navigation/MP-HOME-001_home-member_reference.png") })
        }
      }
    }),
    screen({
      key: "home-and-navigation/promotion-popup",
      id: "To Verify",
      path: ["Home & Navigation", "Promotion Popup"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Opening Home (trigger rules To Verify)",
        nextStep: "Promotion destination or back to Home (To Verify)"
      },
      dependencies: ["CMS: Promotions (To Verify)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing promotion popup layered over Home.",
          primaryAction: "To Verify",
          secondaryActions: ["Dismiss (To Verify)"],
          notes: [],
          devices: devices({ mobile: phase1("home-navigation/home-promotion-popup_reference.png") })
        }
      }
    }),
    screen({
      key: "home-and-navigation/fulfilment-selector",
      id: "To Verify",
      path: ["Home & Navigation", "Fulfilment Selector"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Home Pickup / Delivery tiles or Shop tab",
        nextStep: "Store selection (Pickup) — Delivery flow is Future Scope"
      },
      dependencies: ["Backend: Fulfilment options (To Verify)"],
      scopeNote: HOME_DELIVERY_NOTE,
      versions: {
        reference: {
          status: "Reference",
          description: "Existing modal over Home asking 'How would you like to get your order?' with Pickup and Delivery options.",
          primaryAction: "Choose Pickup (Current Scope).",
          secondaryActions: ["Choose Delivery (Future Scope)"],
          notes: [],
          devices: devices({ mobile: phase1("home-navigation/fulfilment-selector-modal_reference.png") })
        }
      }
    }),
    screen({
      key: "home-and-navigation/account-home/variant-a",
      id: "MP-ACCOUNT-001",
      path: ["Home & Navigation", "Account Home", "Variant A"],
      scope: "Current Scope",
      state: "Variant A",
      flow: {
        entryPoint: "Bottom navigation: Account",
        nextStep: "Selected account destination"
      },
      dependencies: ["Backend: Member profile", "CMS: Rewards (To Verify)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing Account home with profile card (name, phone, Credit / Points / Rewards), language, settings and notification icons, and lists: My Purchase (Order), Exclusive For You (Daily Check-In, Coupons & Vouchers, Invite Your Friends), Need Help? (Help Centre, Feedback, Settings), General.",
          primaryAction: "To Verify",
          secondaryActions: [
            "Order",
            "Daily Check-In",
            "Coupons & Vouchers",
            "Invite Your Friends",
            "Help Centre",
            "Feedback",
            "Settings"
          ],
          notes: [
            "Two Account Home versions were supplied (Variant A and B). They appear visually identical at review; which is authoritative is To Verify.",
            "Daily Check-In and Invite Your Friends (Referral) are not confirmed in the documented app structure — scope To Verify.",
            "Any Delivery-related account items, if present further down the list, are Future Scope."
          ],
          devices: devices({ mobile: phase1("home-navigation/MP-ACCOUNT-001_account-home_reference-a.png") })
        }
      }
    }),
    screen({
      key: "home-and-navigation/account-home/variant-b",
      id: "MP-ACCOUNT-001",
      path: ["Home & Navigation", "Account Home", "Variant B"],
      scope: "Current Scope",
      state: "Variant B",
      flow: {
        entryPoint: "Bottom navigation: Account",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Member profile", "CMS: Rewards (To Verify)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Second supplied version of the existing Account home. See Variant A for content.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Duplicate version. Do not assume either is authoritative until confirmed by the owner."
          ],
          devices: devices({ mobile: phase1("home-navigation/MP-ACCOUNT-001_account-home_reference-b.png") })
        }
      }
    }),
    screen({
      key: "home-and-navigation/bottom-navigation",
      id: "To Verify",
      path: ["Home & Navigation", "Bottom Navigation"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Visible on primary screens",
        nextStep: "Selected tab destination"
      },
      dependencies: ["None"],
      versions: {
        reference: {
          status: "Reference",
          description: "Reference view of the current 4-tab bottom navigation: Home, Shop, Rewards, Account. Shown on the Home — Member screenshot.",
          primaryAction: "Switch between the four tabs.",
          secondaryActions: ["Home", "Shop", "Rewards", "Account"],
          notes: [
            "Reference Navigation only. Not newly approved Master Navigation. Do not add a fifth tab or redesign in Phase 1.",
            "Uses the same screenshot as Home — Member. This is a review view, not a separate design."
          ],
          devices: devices({ mobile: phase1("home-navigation/MP-HOME-001_home-member_reference.png") })
        }
      }
    })
  ]
});

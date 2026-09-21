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
        },
        /*
         * Responsive Draft (one prototype, all four device presets). The Reference version above and its screenshot are
         * unchanged; everything below is Draft-specific behaviour and is recorded here (overrides / notes), not by
         * rewriting the Reference or any related screen's canonical metadata.
         */
        draft: {
          status: "Draft",
          prototype: "prototypes/home-navigation/MP-HOME-001/index.html",
          description:
            "Responsive Draft of Home — Member (default Member state only). Order: greeting + notification bell, Credit / Points / Rewards, Pickup / Delivery, Promotion (1:1), Shop & more, Reference bottom navigation. Neutral placeholders stand in for images, illustrations and icons.",
          primaryAction: "Choose Pickup (opens Store Selection).",
          secondaryActions: [
            "Open notifications (unread dot when unread exists)",
            "Open My Credit / Points Summary / My Rewards from the summary boxes",
            "Swipe the promotion banner (banner tap: CMS Rule Required)",
            "Use bottom navigation (Reference Navigation)"
          ],
          overrides: {
            flow: {
              entryPoint: "Authenticated app entry",
              nextStep:
                "Pickup → Store Selection. Delivery → Future Scope (no destination in this Draft). Credit → My Credit. Points → Points Summary (no design yet). Rewards → My Rewards. Bell → Notifications."
            },
            scopeNote:
              "Delivery is Future Scope. In this Draft the Delivery tile keeps the Reference visual treatment but is inert: aria-disabled, not focusable, no pressed state, no navigation, no added copy. Pickup and Home remain Current Scope."
          },
          notes: [
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json yet).",
            "Intentional IA change vs Reference (approved): Pickup / Delivery moved above the Promotion. Reason: ordering is the primary Home task and the ordering entry fell below the first viewport on iPhone SE.",
            "Draft behaviour (not a canonical flow change): Home does not reopen the Fulfilment Selector after Pickup was explicitly selected. The Fulfilment Selector Reference metadata is unchanged; it remains for entry points where fulfilment mode has not been chosen (for example the Shop tab).",
            "Proposed formatting (Proposed / To Verify until backend and product requirements confirm it): Credit is a numeric balance only, shown as 'Credit' above '100.00' (two decimals, thousands separators, no currency symbol or code). Points and Rewards are integers with thousands separators. Credit / Points / Rewards stay equal width. This supersedes the earlier 'Credit (RM)' proposal.",
            "Visual Draft v2 (fidelity to the Reference, Draft only): Inter is used as a PROVISIONAL Draft font (Draft / Provisional / To Verify). It is the closest match to the Reference typeface, is not recorded as an approved Mr Pork brand font, and is not a global token. Radii: tiles about 8 px, summary boxes about 5 px. Summary value 16 px. Section heading weight 600. Promotion dots follow the Reference (bottom-left, active about 14 px, inactive about 8 px, no pill; indicators only). Bottom-navigation vertical positions follow the Reference.",
            "TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS: the Pickup and Delivery illustrations, the Promotion artwork, the Shop & more imagery, the bell icon and the four navigation icons (line icons drawn for review, not approved iconography). No original standalone asset exists in the repository yet; replace them when supplied. Nothing was cropped from the Reference screenshot.",
            "Notification indicator: a small unread dot, never a number. Whether Home shows it, and its source, is To Verify.",
            "Greeting uses the preferred display name from the member profile. No first-name / surname rule. Time-of-day greeting rules are To Verify.",
            "Promotion: manual swipe, scroll-snap, no autoplay, no looping; dots are indicators only. Banner tap, real slide count, image size and safe area are CMS Rule Required. Banner is 1:1 at every tier; medium / expanded is centered with a proposed max width of about 480 (adjustable at visual review).",
            "Shop & more: section and horizontal-card structure kept. Content type, source and destination are To Verify; cards are neutral placeholders.",
            "Bottom navigation is Reference Navigation (same four tabs), not Master Navigation. On medium / expanded the bar background is full width and its four items sit in a centered container of about 720. No side rail.",
            "Destinations are recorded here only: a prototype runs in a sandboxed iframe and does not navigate the Explorer.",
            "Colors are values observed in the Reference, for Draft comparison only, not approved tokens. Contrast findings (red on white 4.40:1, red on pink tile 3.75:1, pink box border on white 1.72:1) are logged as a global accessibility / token To Verify item.",
            "Shared prototype components under prototypes/_components/ are Shared Prototype Components, Draft / Provisional, not approved Design System components.",
            "Not included in this Draft: Member QR shortcut, active order, extra voucher section, other potential Home content; Loading, Partial Error, Empty and Guest states."
          ]
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

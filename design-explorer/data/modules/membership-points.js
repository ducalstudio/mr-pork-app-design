/* Membership / Points — screen data (Reference designs). Metadata only; no business logic.
 * screen = canonical product definition; versions.* = design-specific definition (+ optional overrides). */
import { defineModule, screen, devices, phase1, TO_VERIFY_PRESET } from "../helpers.js";

export default defineModule({
  id: "membership-points",
  label: "Membership / Points",
  screens: [
    screen({
      key: "membership/points/point-reward-detail/redeemable",
      id: "MP-REWARD-002",
      path: ["Membership", "Points", "Point Reward Detail", "Redeemable"],
      scope: "Current Scope",
      state: "Redeemable",
      flow: {
        entryPoint: "Points reward list (list screen not supplied — To Verify)",
        nextStep: "Redemption result / Exchange Records"
      },
      dependencies: ["Backend: Member points", "CMS: Rewards", "CMS Rule Required (points rules)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing point reward detail where the member has enough points to redeem.",
          primaryAction: "Redeem with points",
          secondaryActions: ["View rules"],
          notes: [],
          devices: devices({ mobile: phase1("points/MP-REWARD-002_point-reward-redeemable_reference.png") })
        }
      }
    }),
    screen({
      key: "membership/points/point-reward-detail/insufficient-points",
      id: "MP-REWARD-002",
      path: ["Membership", "Points", "Point Reward Detail", "Insufficient Points"],
      scope: "Current Scope",
      state: "Insufficient Points",
      flow: {
        entryPoint: "Points reward list (not supplied — To Verify)",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Member points", "CMS: Rewards", "CMS Rule Required (points rules)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing point reward detail where the member does not have enough points.",
          primaryAction: "Redeem (disabled / blocked — To Verify)",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("points/MP-REWARD-002_point-reward-insufficient_reference.png") })
        }
      }
    }),
    screen({
      key: "membership/points/point-reward-rules",
      id: "To Verify",
      path: ["Membership", "Points", "Point Reward Rules"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Point Reward Detail",
        nextStep: "Back to Point Reward Detail"
      },
      dependencies: ["Backend: Member points", "CMS: Rewards", "CMS Rule Required (points rules)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing point reward rules popup (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Do not derive any points conversion rule from the screenshot for implementation without owner confirmation."
          ],
          devices: devices({ mobile: { image: phase1("points/point-reward-rules_reference.png"), capturePreset: TO_VERIFY_PRESET } })
        }
      }
    }),
    screen({
      key: "membership/points/exchange-records",
      id: "To Verify",
      path: ["Membership", "Points", "Exchange Records"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Points reward area (To Verify)",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Member points", "CMS: Rewards", "CMS Rule Required (points rules)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing list of past point-reward exchanges.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("points/exchange-records_reference.png") })
        }
      }
    }),
    screen({
      key: "membership/points/points-summary",
      id: "MP-MEMBER-006",
      path: ["Membership", "Points", "Points Summary"],
      scope: "Current Scope",
      flow: {
        entryPoint: "To Verify",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Member points"],
      designAvailability: "to-verify",
      purpose: "Points balance screen.",
      notes: [
        "UI not supplied yet. Do not generate a design automatically."
      ],
      versions: {}
    }),
    screen({
      key: "membership/points/points-earning-history",
      id: "MP-MEMBER-007",
      path: ["Membership", "Points", "Points Earning History"],
      scope: "Current Scope",
      flow: {
        entryPoint: "To Verify",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Member points ledger", "Staff Membership POS (earning)"],
      designAvailability: "to-verify",
      purpose: "Points earning / transaction history.",
      notes: [
        "UI not supplied yet. Do not generate a design automatically."
      ],
      versions: {}
    })
  ]
});

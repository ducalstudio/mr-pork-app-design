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
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/points/MP-REWARD-002/index.html?state=redeemable",
          description: "Responsive Draft of the point reward detail screen where the member has enough points: coupon card, reward title/meta, Terms & Conditions, a red 'Redeem Now' action.",
          primaryAction: "Redeem with points",
          secondaryActions: ["View rules (opens the Point Reward Rules sheet Draft)"],
          notes: [
            "ONE prototype, state-driven (prototypes/points/MP-REWARD-002/), shared with Insufficient Points via ?state=redeemable|insufficient (the two Reference captures are structurally identical except the bottom button).",
            "Measured from the Reference (440 x 956) with tools/lib/png.mjs: tan band header 106 total (63 + 43); card 400 x 274 at y 126, white fill, pink border; 'RM' / '3' / 'OFF' stacked left, 'MR.PORK' wordmark re-set as rotated text (not cropped from the Reference image) right-aligned; title/meta rows below; action button 400 x 46, pinned to the bottom via margin-top: auto.",
            "SAMPLE DATA / NOT BUSINESS RULE: reward copy ('RM3 OFF', 'Redemption Limit 99999', 'Redemption Points Required: 300') and the Terms & Conditions list are the Reference's own placeholder content, kept verbatim (including 'Not aplll', a Reference typo).",
            "Do not derive any points conversion rule from this screen for implementation without owner confirmation (unchanged from the Reference note).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the back glyph.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 4, provisional. Built from Shared Prototype Components under prototypes/_components/.",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify). No OS status bar is drawn (Phase A rule)."
          ]
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
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/points/MP-REWARD-002/index.html?state=insufficient",
          description: "Responsive Draft of the point reward detail screen where the member does not have enough points: same content, grey 'Insufficient Points' action. Shares the state-driven prototype with Redeemable; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "Redeem (blocked — the button is “disabled-looking” per the Reference, marked aria-disabled, not a real disabled control)",
          secondaryActions: ["View rules (opens the Point Reward Rules sheet Draft)"],
          notes: []
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
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/points/point-reward-rules/index.html",
          description: "Responsive Draft of the Point Reward Rules sheet: title, close, a numbered rules section (rich-content).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "The Reference is a partial sheet capture (400 wide, 618 tall content, capture size To Verify): a close button, no back button, so this is an overlay, not a pushed page. Centered floating dialog, dimmed over the Point Reward Detail Draft (the most likely entry point; To Verify), same precedent as Logout / redemption (see bottom-sheet/spec.md).",
            "SAMPLE DATA / NOT BUSINESS RULE: the Reference's own placeholder rules content is kept verbatim, including the repeated '1. Introduction / You haven't collected any coupon or voucher yet.' blocks — clearly CMS placeholder filler in the Reference itself, not a Draft mistake. Do not derive any points conversion rule from this screen for implementation without owner confirmation (unchanged from the Reference note).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the close glyph.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 4, provisional. Built from Shared Prototype Components under prototypes/_components/."
          ]
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
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/points/exchange-records/index.html",
          description: "Responsive Draft of the exchange records list: title/status/date rows.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Measured from the Reference (440 x 956) with tools/lib/png.mjs: tan band header 106 total (63 + 43); rows start y 149, title left / status right on one line, date 15px below. Row pitch below the second row is measured by eye (not pixel-verified per row), consistent with the speed-over-perfection pass for this batch.",
            "SAMPLE DATA / NOT BUSINESS RULE: row copy (item names, timestamps, statuses) is the Reference's own sample content. Status colour meaning (amber 'successful' vs dark 'cancel') is To Verify, reproduced as observed. Row tap destinations are not supplied: To Verify.",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the back glyph.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 4, provisional."
          ]
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

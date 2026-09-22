/* Rewards — screen data (Reference designs). Metadata only; no business logic.
 * screen = canonical product definition; versions.* = design-specific definition (+ optional overrides). */
import { defineModule, screen, devices, phase1, TO_VERIFY_PRESET } from "../helpers.js";

export default defineModule({
  id: "rewards",
  label: "Rewards",
  screens: [
    screen({
      key: "rewards/my-rewards/valid/with-rewards/variant-a",
      id: "MP-REWARD-005",
      path: ["Rewards", "My Rewards", "Valid", "With Rewards", "Variant A"],
      scope: "Current Scope",
      state: "Valid — With Rewards (Variant A)",
      flow: {
        entryPoint: "Bottom navigation: Rewards / Account",
        nextStep: "Voucher Detail"
      },
      dependencies: ["CMS: Rewards", "Backend: Member vouchers", "Staff Membership POS (redemption)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing My Rewards, Valid tab with vouchers. Includes a promo-code entry field with Claim, and voucher cards with a Use Now button.",
          primaryAction: "Use Now on a voucher",
          secondaryActions: ["Claim promo code", "Switch tab: Invalid / Used"],
          notes: [
            "Reward / Coupon / Voucher terminology is inconsistent. 'Invalid' naming may need a user-friendly replacement.",
            "Two supplied versions (A and B) appear visually identical at review; which is authoritative is To Verify."
          ],
          devices: devices({ mobile: phase1("rewards/MP-REWARD-005_valid-list_reference-a.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/rewards/MP-REWARD-005/index.html?state=valid-content",
          description: "Responsive Draft of My Rewards, Valid tab with vouchers: promo-code field, voucher cards with Use Now, Reference bottom navigation (Rewards selected).",
          primaryAction: "Use Now on a voucher (opens the redemption sheet Draft)",
          secondaryActions: ["Claim promo code (To Verify)", "Switch tab: Invalid / Used"],
          notes: [
            "ONE prototype, state-driven (prototypes/rewards/MP-REWARD-005/), shared by all 6 My Rewards tab/mode combinations via ?state=<tab>-<mode> (valid | invalid | used) x (content | empty) — same pattern as Notifications. Variant A and Variant B render the same state (the two Reference captures are visually identical; which is authoritative stays To Verify).",
            "Measured from the Reference (440 x 956) with tools/lib/png.mjs: no tan band (header 106 total, reused); tabs y 126 to 151, pill chips with a tonal selected style (pale pink fill + red text) specific to this screen, not the Notifications chip's solid-red selected style — overridden at screen level, not forced into the shared chip look; promo field 400 x 44; voucher-card 400 wide, about 174 tall, 34px gap between stacked cards.",
            "New shared component (Batch 4): voucher-card (default: white / pink border / red 'Use Now'; --spent: grey, no border, no CTA — used by Invalid and Used). Reused: chip (tab role, roving tabindex), state-panel--empty, bottom-nav-reference (Rewards selected, same render() call as Account).",
            "SAMPLE DATA / NOT BUSINESS RULE: card copy ('20% OFF', 'Enjoy 20% Off on Wed', validity date, terms note) is the Reference's own placeholder content, kept verbatim.",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the back glyph, the promo-code scan icon and the four bottom-nav icons.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 4, provisional. Built from Shared Prototype Components under prototypes/_components/. Reference-observed colours come from prototypes/_ui-kit/reference-roles.css.",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify). No OS status bar is drawn (Phase A rule)."
          ]
        }
      }
    }),
    screen({
      key: "rewards/my-rewards/valid/with-rewards/variant-b",
      id: "MP-REWARD-005",
      path: ["Rewards", "My Rewards", "Valid", "With Rewards", "Variant B"],
      scope: "Current Scope",
      state: "Valid — With Rewards (Variant B)",
      flow: {
        entryPoint: "Bottom navigation: Rewards / Account",
        nextStep: "Voucher Detail"
      },
      dependencies: ["CMS: Rewards", "Backend: Member vouchers", "Staff Membership POS (redemption)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Second supplied version of My Rewards, Valid tab with vouchers.",
          primaryAction: "Use Now on a voucher",
          secondaryActions: [],
          notes: [
            "Reward / Coupon / Voucher terminology is inconsistent. 'Invalid' naming may need a user-friendly replacement.",
            "Duplicate version. Do not assume either is authoritative."
          ],
          devices: devices({ mobile: phase1("rewards/MP-REWARD-005_valid-list_reference-b.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/rewards/MP-REWARD-005/index.html?state=valid-content",
          description: "Same Draft state as Variant A (the two Reference captures are visually identical). See rewards/my-rewards/valid/with-rewards/variant-a for the full measurement and component notes (not repeated here).",
          primaryAction: "Use Now on a voucher (opens the redemption sheet Draft)",
          secondaryActions: ["Claim promo code (To Verify)", "Switch tab: Invalid / Used"],
          notes: ["Duplicate version, same Draft. Do not assume either is authoritative (unchanged from the Reference note)."]
        }
      }
    }),
    screen({
      key: "rewards/my-rewards/valid/empty",
      id: "MP-REWARD-005",
      path: ["Rewards", "My Rewards", "Valid", "Empty"],
      scope: "Current Scope",
      state: "Valid — Empty",
      flow: {
        entryPoint: "Bottom navigation: Rewards / Account",
        nextStep: "Voucher Detail"
      },
      dependencies: ["CMS: Rewards", "Backend: Member vouchers", "Staff Membership POS (redemption)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing My Rewards, Valid tab with no vouchers.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Reward / Coupon / Voucher terminology is inconsistent. 'Invalid' naming may need a user-friendly replacement."
          ],
          devices: devices({ mobile: phase1("rewards/MP-REWARD-005_valid-empty_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/rewards/MP-REWARD-005/index.html?state=valid-empty",
          description: "Responsive Draft of My Rewards, Valid tab with no vouchers: promo-code field still shown, empty panel below. See rewards/my-rewards/valid/with-rewards/variant-a for the full measurement and component notes (not repeated here).",
          primaryAction: "To Verify",
          secondaryActions: ["Claim promo code (To Verify)", "Switch tab: Invalid / Used"],
          notes: []
        }
      }
    }),
    screen({
      key: "rewards/my-rewards/invalid/with-rewards",
      id: "MP-REWARD-005",
      path: ["Rewards", "My Rewards", "Invalid", "With Rewards"],
      scope: "Current Scope",
      state: "Invalid — With Rewards",
      flow: {
        entryPoint: "Bottom navigation: Rewards / Account",
        nextStep: "Voucher Detail"
      },
      dependencies: ["CMS: Rewards", "Backend: Member vouchers", "Staff Membership POS (redemption)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing My Rewards, Invalid tab with vouchers.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Reward / Coupon / Voucher terminology is inconsistent. 'Invalid' naming may need a user-friendly replacement."
          ],
          devices: devices({ mobile: phase1("rewards/MP-REWARD-005_invalid-list_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/rewards/MP-REWARD-005/index.html?state=invalid-content",
          description: "Responsive Draft of My Rewards, Invalid tab with vouchers: no promo-code field, grey borderless cards, no CTA. See rewards/my-rewards/valid/with-rewards/variant-a for the full measurement and component notes (not repeated here).",
          primaryAction: "To Verify",
          secondaryActions: ["Switch tab: Valid / Used"],
          notes: []
        }
      }
    }),
    screen({
      key: "rewards/my-rewards/invalid/empty",
      id: "MP-REWARD-005",
      path: ["Rewards", "My Rewards", "Invalid", "Empty"],
      scope: "Current Scope",
      state: "Invalid — Empty",
      flow: {
        entryPoint: "Bottom navigation: Rewards / Account",
        nextStep: "Voucher Detail"
      },
      dependencies: ["CMS: Rewards", "Backend: Member vouchers", "Staff Membership POS (redemption)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing My Rewards, Invalid tab with no vouchers.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Reward / Coupon / Voucher terminology is inconsistent. 'Invalid' naming may need a user-friendly replacement."
          ],
          devices: devices({ mobile: phase1("rewards/MP-REWARD-005_invalid-empty_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/rewards/MP-REWARD-005/index.html?state=invalid-empty",
          description: "Responsive Draft of My Rewards, Invalid tab with no vouchers. See rewards/my-rewards/valid/with-rewards/variant-a for the full measurement and component notes (not repeated here).",
          primaryAction: "To Verify",
          secondaryActions: ["Switch tab: Valid / Used"],
          notes: []
        }
      }
    }),
    screen({
      key: "rewards/my-rewards/used/with-rewards",
      id: "MP-REWARD-005",
      path: ["Rewards", "My Rewards", "Used", "With Rewards"],
      scope: "Current Scope",
      state: "Used — With Rewards",
      flow: {
        entryPoint: "Bottom navigation: Rewards / Account",
        nextStep: "Voucher Detail"
      },
      dependencies: ["CMS: Rewards", "Backend: Member vouchers", "Staff Membership POS (redemption)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing My Rewards, Used tab with vouchers.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Reward / Coupon / Voucher terminology is inconsistent. 'Invalid' naming may need a user-friendly replacement."
          ],
          devices: devices({ mobile: phase1("rewards/MP-REWARD-005_used-list_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/rewards/MP-REWARD-005/index.html?state=used-content",
          description: "Responsive Draft of My Rewards, Used tab with vouchers: no promo-code field, grey borderless cards, no CTA. See rewards/my-rewards/valid/with-rewards/variant-a for the full measurement and component notes (not repeated here).",
          primaryAction: "To Verify",
          secondaryActions: ["Switch tab: Valid / Invalid"],
          notes: []
        }
      }
    }),
    screen({
      key: "rewards/my-rewards/used/empty",
      id: "MP-REWARD-005",
      path: ["Rewards", "My Rewards", "Used", "Empty"],
      scope: "Current Scope",
      state: "Used — Empty",
      flow: {
        entryPoint: "Bottom navigation: Rewards / Account",
        nextStep: "Voucher Detail"
      },
      dependencies: ["CMS: Rewards", "Backend: Member vouchers", "Staff Membership POS (redemption)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing My Rewards, Used tab with no vouchers.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Reward / Coupon / Voucher terminology is inconsistent. 'Invalid' naming may need a user-friendly replacement."
          ],
          devices: devices({ mobile: phase1("rewards/MP-REWARD-005_used-empty_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/rewards/MP-REWARD-005/index.html?state=used-empty",
          description: "Responsive Draft of My Rewards, Used tab with no vouchers. See rewards/my-rewards/valid/with-rewards/variant-a for the full measurement and component notes (not repeated here).",
          primaryAction: "To Verify",
          secondaryActions: ["Switch tab: Valid / Invalid"],
          notes: []
        }
      }
    }),
    screen({
      key: "rewards/voucher-detail",
      id: "MP-REWARD-006",
      path: ["Rewards", "Voucher Detail"],
      scope: "Current Scope",
      flow: {
        entryPoint: "My Rewards",
        nextStep: "Redemption"
      },
      dependencies: ["CMS: Rewards", "Backend: Member vouchers", "Staff Membership POS (redemption)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing voucher detail view.",
          primaryAction: "Use / redeem the voucher (To Verify).",
          secondaryActions: [],
          notes: [
            "Reward / Coupon / Voucher terminology is inconsistent. 'Invalid' naming may need a user-friendly replacement."
          ],
          devices: devices({ mobile: phase1("rewards/MP-REWARD-006_voucher-detail_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/rewards/MP-REWARD-006/index.html",
          description: "Responsive Draft of the voucher detail screen: voucher-card, Validity / Min. Spend / Delivery Method rows, Terms and Conditions, a bottom Use Now button.",
          primaryAction: "Use Now (opens the redemption sheet Draft)",
          secondaryActions: [],
          notes: [
            "Measured from the Reference (440 x 956) with tools/lib/png.mjs: no tan band (header 106 total, reused); voucher-card (reused from My Rewards) 400 x 174 at y 126; three label/value rows on an about 60px pitch; Terms and Conditions heading + numbered list (rich-content); 'Use Now' 400 x 46, pinned to the bottom via margin-top: auto (same technique as legal-footnote), not the Reference's fixed y.",
            "SAMPLE DATA / NOT BUSINESS RULE: voucher copy and the Terms & Conditions list are the Reference's own placeholder content, kept verbatim, including the trailing '...' the Reference's own capture cuts off at.",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the back glyph.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 4, provisional. Built from Shared Prototype Components under prototypes/_components/.",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify). No OS status bar is drawn (Phase A rule)."
          ]
        }
      }
    }),
    screen({
      key: "rewards/redemption/active-qr-code",
      id: "To Verify",
      path: ["Rewards", "Redemption", "Active QR / Code"],
      scope: "Current Scope",
      state: "Active QR / Code",
      flow: {
        entryPoint: "Voucher Detail",
        nextStep: "Successful or Failed"
      },
      dependencies: ["CMS: Rewards", "Backend: Member vouchers", "Staff Membership POS (redemption)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing redemption sheet presenting a code / QR for staff validation (partial-screen capture).",
          primaryAction: "Present code / QR to staff",
          secondaryActions: [],
          notes: [
            "Reward / Coupon / Voucher terminology is inconsistent. 'Invalid' naming may need a user-friendly replacement.",
            "Reward-specific QR vs Member QR vs code mechanism is not confirmed (Open Question)."
          ],
          devices: devices({ mobile: { image: phase1("rewards/reward-redemption-code_reference.png"), capturePreset: TO_VERIFY_PRESET } })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/rewards/redemption/index.html?state=code",
          description: "Responsive Draft of the redemption sheet: 'My Reward' title, countdown, QR placeholder, 6-digit code, 'Scan QR Code'.",
          primaryAction: "Present code / QR to staff (no interaction to verify)",
          secondaryActions: [],
          notes: [
            "ONE prototype, state-driven (prototypes/rewards/redemption/), shared with Successful / Failed via ?state=code|success|failed.",
            "The Reference is a partial-screen capture (400 wide, capture size To Verify), same situation as Logout: kept as a centered floating dialog (not bottom-anchored), following the Fulfilment Selector precedent (see bottom-sheet/spec.md), dimmed over the Voucher Detail Draft (the screen 'Use Now' is reached from; To Verify).",
            "Measured from the Reference (440 x 956 equivalent, 400 wide) with tools/lib/png.mjs: head 44px row, title 20px / 700; '5 minutes' 43px below; QR 150 x 150 about 34px below that; 6-digit code 29px below the QR; 'Scan QR Code' 12px below that.",
            "SAMPLE DATA / NOT BUSINESS RULE: the '5 minutes' countdown and the 6-digit code are the Reference's own sample values; the countdown does not actually run down (Draft convenience, no timer logic).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the QR graphic (image-placeholder, a functional QR is not fabricated) and the close glyph.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 4, provisional."
          ]
        }
      }
    }),
    screen({
      key: "rewards/redemption/successful",
      id: "To Verify",
      path: ["Rewards", "Redemption", "Successful"],
      scope: "Current Scope",
      state: "Successful",
      flow: {
        entryPoint: "Redemption — Active QR / Code",
        nextStep: "To Verify"
      },
      dependencies: ["CMS: Rewards", "Backend: Member vouchers", "Staff Membership POS (redemption)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing redemption success message (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Reward / Coupon / Voucher terminology is inconsistent. 'Invalid' naming may need a user-friendly replacement."
          ],
          devices: devices({ mobile: { image: phase1("rewards/reward-redemption-success_reference.png"), capturePreset: TO_VERIFY_PRESET } })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/rewards/redemption/index.html?state=success",
          description: "Responsive Draft of the redemption success message. Shares the state-driven prototype with Active QR / Code; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: []
        }
      }
    }),
    screen({
      key: "rewards/redemption/failed",
      id: "To Verify",
      path: ["Rewards", "Redemption", "Failed"],
      scope: "Current Scope",
      state: "Failed",
      flow: {
        entryPoint: "Redemption — Active QR / Code",
        nextStep: "To Verify"
      },
      dependencies: ["CMS: Rewards", "Backend: Member vouchers", "Staff Membership POS (redemption)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing redemption failure message (partial-screen capture).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Reward / Coupon / Voucher terminology is inconsistent. 'Invalid' naming may need a user-friendly replacement."
          ],
          devices: devices({ mobile: { image: phase1("rewards/reward-redemption-failed_reference.png"), capturePreset: TO_VERIFY_PRESET } })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/rewards/redemption/index.html?state=failed",
          description: "Responsive Draft of the redemption failure message. Shares the state-driven prototype with Active QR / Code; see that entry for the full measurement and component notes (not repeated here).",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: []
        }
      }
    })
  ]
});

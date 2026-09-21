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
        }
      }
    })
  ]
});

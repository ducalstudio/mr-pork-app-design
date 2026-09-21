/* Legal — screen data (Reference designs). Metadata only; no business logic.
 * screen = canonical product definition; versions.* = design-specific definition (+ optional overrides). */
import { defineModule, screen, devices, phase1 } from "../helpers.js";

export default defineModule({
  id: "legal",
  label: "Legal",
  screens: [
    screen({
      key: "legal/privacy-policy",
      id: "MP-SUPPORT-003",
      path: ["Legal", "Privacy Policy"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Account / Registration",
        nextStep: "Back"
      },
      dependencies: ["CMS: Settings / legal content (To Verify)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing Privacy Policy page.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Membership, refund / return, PDPA and other applicable policy screens are still needed (known review item)."
          ],
          devices: devices({ mobile: phase1("legal/MP-SUPPORT-003_privacy-policy_reference.png") })
        }
      }
    }),
    screen({
      key: "legal/terms-and-conditions",
      id: "MP-SUPPORT-004",
      path: ["Legal", "Terms & Conditions"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Account / Registration",
        nextStep: "Back"
      },
      dependencies: ["CMS: Settings / legal content (To Verify)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing Terms & Conditions page.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [
            "Membership, refund / return, PDPA and other applicable policy screens are still needed (known review item)."
          ],
          devices: devices({ mobile: phase1("legal/MP-SUPPORT-004_terms-conditions_reference.png") })
        }
      }
    })
  ]
});

/* Membership / Member Card — screen data (Reference designs). Metadata only; no business logic.
 * screen = canonical product definition; versions.* = design-specific definition (+ optional overrides). */
import { defineModule, screen, devices, phase1 } from "../helpers.js";

export default defineModule({
  id: "membership-member-card",
  label: "Membership / Member Card",
  screens: [
    screen({
      key: "membership/member-card-member-qr",
      id: "MP-MEMBER-002",
      path: ["Membership", "Member Card / Member QR"],
      scope: "Current Scope",
      flow: {
        entryPoint: "To Verify",
        nextStep: "To Verify"
      },
      dependencies: ["Backend: Member identity / QR token", "Staff Membership POS (scan)"],
      designAvailability: "to-verify",
      purpose: "Digital member identity and Member QR presented to staff.",
      notes: [
        "UI not supplied yet. Do not generate a design automatically.",
        "Documented in the inventory (MP-MEMBER-002); no design has been supplied."
      ],
      versions: {}
    })
  ]
});

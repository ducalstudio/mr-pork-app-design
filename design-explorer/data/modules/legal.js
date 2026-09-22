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
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/legal/MP-SUPPORT-003/index.html",
          description: "Responsive Draft of Privacy Policy: back + title header on the tan band, cream page, rich-content reading layout.",
          primaryAction: "To Verify",
          secondaryActions: [

          ],
          notes: [
            "SAMPLE DATA / NOT BUSINESS RULE: the 'xxxxx / x / xx' filler lines are the Reference's own placeholder text, kept exactly (same lines, same 19px line pitch) because visible text length is part of the design. The real legal text is CMS Rule Required.",
            "Intentional differences vs Reference: only the tablet reading column (centered, about 600 at medium and about 640 at expanded). The 440 render follows the Reference: header title 20px regular at y 85, heading at y 126, 16px text on a 19px line pitch.",
            "Gutter 20px is taken from the Reference (text starts at x 20) through --shell-gutter.",
            "TEMPORARY PLACEHOLDER: the back glyph. The back destination is recorded as metadata only; nothing navigates.",
            "Membership, refund / return, PDPA and other applicable policy screens remain a known review item (unchanged).",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 1, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). Where the Reference shows a tan band over the status-bar region, the band's color is kept and its meaning is To Verify."
          ]
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
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/legal/MP-SUPPORT-004/index.html",
          description: "Responsive Draft of Terms & Conditions: back + title header on the tan band, cream page, rich-content reading layout (same layout as Privacy Policy).",
          primaryAction: "To Verify",
          secondaryActions: [

          ],
          notes: [
            "SAMPLE DATA / NOT BUSINESS RULE: the 'xxxxx / x / xx' filler lines are the Reference's own placeholder text, kept exactly (same lines, same 19px line pitch) because visible text length is part of the design. The real legal text is CMS Rule Required.",
            "Intentional differences vs Reference: only the tablet reading column (centered, about 600 at medium and about 640 at expanded). The 440 render follows the Reference: header title 20px regular at y 85, heading at y 126, 16px text on a 19px line pitch.",
            "Gutter 20px is taken from the Reference through --shell-gutter.",
            "TEMPORARY PLACEHOLDER: the back glyph. The back destination is recorded as metadata only.",
            "Membership, refund / return, PDPA and other applicable policy screens remain a known review item (unchanged).",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 1, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text width (within about 1 to 3%); if the original typeface is confirmed, Inter is replaced.",
            "Reference-fidelity pass: the 440 x 956 render was measured against the Reference (positions, sizes, text extents, colours). What still differs is limited to marked placeholders for missing assets, approved changes, responsive-only changes and To Verify items.",
            "No OS status bar is drawn (Phase A rule). Where the Reference shows a tan band over the status-bar region, the band's color is kept and its meaning is To Verify."
          ]
        }
      }
    })
  ]
});

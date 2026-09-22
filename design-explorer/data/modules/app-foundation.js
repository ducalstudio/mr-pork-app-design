/* App Foundation — screen data (Reference designs). Metadata only; no business logic.
 * screen = canonical product definition; versions.* = design-specific definition (+ optional overrides). */
import { defineModule, screen, devices, phase1 } from "../helpers.js";

export default defineModule({
  id: "app-foundation",
  label: "App Foundation",
  screens: [
    screen({
      key: "app-foundation/splash",
      id: "MP-FOUND-001",
      path: ["App Foundation", "Splash"],
      scope: "Current Scope",
      flow: {
        entryPoint: "App launch",
        nextStep: "Launch promotion, authentication or Home (session dependent — To Verify)"
      },
      dependencies: ["Backend: Session / configuration (To Verify)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing brand splash shown on app launch while the app starts up.",
          primaryAction: "None (automatic)",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("app-foundation/MP-FOUND-001_splash_reference.png") })
        }
      }
    }),
    screen({
      key: "app-foundation/launch-promotion-interstitial",
      id: "To Verify",
      path: ["App Foundation", "Launch Promotion Interstitial"],
      scope: "Current Scope",
      flow: {
        entryPoint: "After Splash (To Verify)",
        nextStep: "Home / Authentication (To Verify)"
      },
      dependencies: ["CMS: Promotions (To Verify)"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing full-screen promotion shown at launch before the user reaches the main app.",
          primaryAction: "To Verify",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("app-foundation/launch-promotion-interstitial_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/app-foundation/launch-promotion-interstitial/index.html",
          description: "Responsive Draft of the launch promotion interstitial: full-screen artwork placeholder with a 'Skip 3 s' pill at the top right.",
          primaryAction: "To Verify",
          secondaryActions: [
            "Skip (destination To Verify)"
          ],
          notes: [
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the full-screen artwork (CMS image). Nothing was cropped from the Reference screenshot. Crop rules and safe area are CMS Rule Required.",
            "'Skip 3 s' is the Reference label, shown statically. There is no live countdown and no auto-advance: timing, skip rule and frequency are CMS Rule Required.",
            "Intentional difference vs Reference: on tablet presets the artwork placeholder fills the whole viewport (no letterboxing rule exists). How a portrait CMS image is cropped on a landscape-ish tablet viewport is CMS Rule Required.",
            "The Skip pill matches the Reference (80 x 28 at x 340, y 20, 16px text); it is a 44px-high hit area around the pill. Safe-area handling is To Verify.",
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
      key: "app-foundation/system-states/network-error",
      id: "MP-FOUND-005",
      path: ["App Foundation", "System States", "Network Error"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Any screen that needs the network",
        nextStep: "Returns to the previous screen after retry (To Verify)"
      },
      dependencies: ["Connectivity"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing full-screen network error state (inventory name: Offline).",
          primaryAction: "Retry (To Verify)",
          secondaryActions: [],
          notes: [],
          devices: devices({ mobile: phase1("system-states/MP-FOUND-005_network-error_reference.png") })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/app-foundation/MP-FOUND-005/index.html",
          description: "Responsive Draft of the full-screen Network Error state: cream page, centered icon, title, message and a Refresh button.",
          primaryAction: "Retry (To Verify).",
          secondaryActions: [

          ],
          notes: [
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the no-signal icon, drawn to the Reference footprint (76 x 83 at x 182, y 362).",
            "The tan band is the Reference's status-bar-region band (Reference y 0 to 54); nothing is drawn in it. Its meaning is To Verify.",
            "Intentional differences vs Reference: on medium / expanded the panel is a centered column capped at about 480 (the Reference is phone-only). The block stays vertically centered in the area below the band.",
            "Refresh behavior (retry the previous request, reload, return destination) is To Verify. The button is not wired.",
            "Whether other connectivity problems (timeout, server error, offline mode) share this screen is To Verify; only the Reference wording is used.",
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

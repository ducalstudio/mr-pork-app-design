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
        }
      }
    })
  ]
});

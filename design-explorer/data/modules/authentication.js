/* Authentication — screen data (Reference designs). Metadata only; no business logic.
 * screen = canonical product definition; versions.* = design-specific definition (+ optional overrides). */
import { defineModule, screen, devices, phase1, TO_VERIFY_PRESET } from "../helpers.js";

export default defineModule({
  id: "authentication",
  label: "Authentication",
  screens: [
    screen({
      key: "authentication/login/phone-entry",
      id: "MP-AUTH-006",
      path: ["Authentication", "Login", "Phone Entry"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Logged-out entry",
        nextStep: "Login OTP"
      },
      dependencies: ["Backend: Authentication / OTP"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing login screen with phone number entry.",
          primaryAction: "Continue with phone number (To Verify).",
          secondaryActions: [],
          notes: ["Screen shows password / email alternatives whose full flows have not been supplied."],
          devices: devices({ mobile: phase1("authentication/MP-AUTH-006_login-phone_reference.png") })
        }
      }
    }),
    screen({
      key: "authentication/login/otp",
      id: "MP-AUTH-007",
      path: ["Authentication", "Login", "OTP"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Login — Phone Entry",
        nextStep: "Home"
      },
      dependencies: ["Backend: Authentication / OTP"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing OTP verification for login.",
          primaryAction: "Verify OTP",
          secondaryActions: ["Resend OTP (To Verify)"],
          notes: [],
          devices: devices({ mobile: phase1("authentication/MP-AUTH-007_login-otp_reference.png") })
        }
      }
    }),
    screen({
      key: "authentication/register/registration-form",
      id: "MP-AUTH-002",
      path: ["Authentication", "Register", "Registration Form"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Login / entry",
        nextStep: "Registration OTP"
      },
      dependencies: ["Backend: Authentication / OTP"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing registration form.",
          primaryAction: "Submit registration",
          secondaryActions: [],
          notes: ["Requests many fields; flow simplification is a known review item."],
          devices: devices({ mobile: phase1("authentication/MP-AUTH-002_register_reference.png") })
        }
      }
    }),
    screen({
      key: "authentication/register/otp",
      id: "MP-AUTH-003",
      path: ["Authentication", "Register", "OTP"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Registration Form",
        nextStep: "To Verify (Complete Profile / Registration Success not supplied)"
      },
      dependencies: ["Backend: Authentication / OTP"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing OTP verification during registration.",
          primaryAction: "Verify OTP",
          secondaryActions: ["Resend OTP (To Verify)"],
          notes: [],
          devices: devices({ mobile: phase1("authentication/MP-AUTH-003_registration-otp_reference.png") })
        }
      }
    }),
    screen({
      key: "authentication/logout-confirmation",
      id: "MP-ACCOUNT-010",
      path: ["Authentication", "Logout Confirmation"],
      scope: "Current Scope",
      flow: {
        entryPoint: "Account",
        nextStep: "Logged-out state"
      },
      dependencies: ["Backend: Session"],
      versions: {
        reference: {
          status: "Reference",
          description: "Existing logout confirmation dialog (partial-screen capture).",
          primaryAction: "Confirm logout",
          secondaryActions: ["Cancel"],
          notes: [],
          devices: devices({ mobile: { image: phase1("authentication/MP-ACCOUNT-010_logout-confirmation_reference.png"), capturePreset: TO_VERIFY_PRESET } })
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/authentication/MP-ACCOUNT-010/index.html",
          description: "Responsive Draft of the Logout confirmation panel: title, close, 'Confirm Logout?' and Yes / No buttons, centered over a dimmed blank backdrop.",
          primaryAction: "Confirm logout",
          secondaryActions: [
            "Cancel"
          ],
          notes: [
            "Button emphasis follows the Reference (D-04): Yes = grey, No = red. The emphasis is To Verify. White text on the grey action is about 2.5:1 (below WCAG AA); logged as a global accessibility / token To Verify item.",
            "The Reference is a partial-screen capture (capture size To Verify). Its on-screen position, the screen behind it and whether it is a centered dialog or a bottom sheet are unknown. The Draft shows a centered floating panel (20px side margin, 8px radius) over a blank dimmed backdrop that stands in for the Account screen (placeholder; the Account Home Draft is a later batch).",
            "Intentional differences vs Reference: on medium / expanded the panel is a centered panel with a maximum width of about 480 and 12px radius. Draft-only review convenience: the close button, Escape and a tap on the dimmed area hide the panel; real dismissal is To Verify.",
            "Yes / No are not wired. Session handling is Backend: Session.",
            "TEMPORARY PLACEHOLDER: the close glyph.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json).",
            "Migration Batch 1, provisional. Built from Shared Prototype Components (Draft / Provisional, not approved Design System components) under prototypes/_components/. Reference-observed colors come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / To Verify), not an approved brand font.",
            "No OS status bar is drawn (Phase A rule). Where the Reference shows a tan band over the status-bar region, the band's color is kept and its meaning is To Verify."
          ]
        }
      }
    })
  ]
});

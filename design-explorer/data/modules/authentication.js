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
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/authentication/MP-AUTH-006/index.html",
          description: "Responsive Draft of the Login phone-entry screen: brand mark, phone field, Send OTP, password/email alternatives and Sign Up link.",
          primaryAction: "Send OTP",
          secondaryActions: ["Use Password login (To Verify)", "Use Email Login (To Verify)", "Sign Up"],
          notes: [
            "Measured from the Reference (440 x 956) with tools/lib/png.mjs, not by eye: header row 106px total (reused from the band screens' 63 + 43, even though this screen has no tan band — the title lands at the same y either way); brand mark 240 x 240 square centered; phone field 400 x 59 (pale fill, measured #ffa8a8); Send OTP button 400 x 59, 10px below the field, same fill (button--pale, text measured #905f5f); alt-login row 13px below (measured text colour #909090); sign-up row 13px below that.",
            "Send OTP navigates to the Login OTP Draft (authentication/login/otp), matching the Reference's implied flow. Sign Up navigates to the Registration Form Draft. Password login, Email login, and the three footnote links are recorded destinations only (To Verify); nothing else navigates.",
            "New shared components (Batch 3, build at first use): text-field (phone field, dial-code prefix + divider + value), link-button (blue Reference links; --muted for the plain-text password/email row), legal-footnote (bottom disclaimer, pinned via margin-top: auto so it stays at the bottom across all four presets and content lengths). Extended: button gained --pale (the Reference's own pale/\"disabled-looking\" fill, reproduced as-is, not a real disabled state).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the brand mark (image-placeholder--square) and the back glyph. The dial-code dropdown's country list is not supplied (To Verify); \"+60\" is fixed sample content, not a working selector.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 3, provisional. Built from Shared Prototype Components under prototypes/_components/. Reference-observed colours come from prototypes/_ui-kit/reference-roles.css (Draft-only role values, not approved tokens).",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify), not an approved brand font. Sizes and weights are matched to the Reference by measured text extents.",
            "No OS status bar is drawn (Phase A rule)."
          ]
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
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/authentication/otp-verification/index.html?state=login",
          description: "Responsive Draft of the Login OTP verification screen: brand mark, instructions, 6-box code entry, Resend code and Contact Us.",
          primaryAction: "Verify OTP (auto-advance is a Draft convenience; not wired to a destination)",
          secondaryActions: ["Resend code (To Verify)", "Contact Us (To Verify)"],
          notes: [
            "ONE prototype, state-driven (prototypes/authentication/otp-verification/), shared with Registration OTP via ?state=login|register: the two Reference captures (MP-AUTH-007, MP-AUTH-003) are structurally identical, only the header title differs (\"Login\" vs \"Sign Up\"). No screen HTML is duplicated.",
            "Measured from the Reference (440 x 956) with tools/lib/png.mjs: header 106px total (reused); brand mark circle 120 x 120, centered; \"Verification\" heading 22px below; instructions 15px below that; 6 otp-input boxes (55 x 54, 11px gap, 1px border) 10px below the instructions; \"Resend code\" 18px below the boxes; help text 15px below that.",
            "SAMPLE DATA / NOT BUSINESS RULE: the phone number was a real-looking number in the Reference; sanitized to a fictional number of the same length/format (+60 17 112 0210), consistent with the Account Draft's sample identity.",
            "New shared component (Batch 3): otp-input (6 real <input> boxes, not styled <div>s — typing advances focus, Backspace on an empty box returns to the previous one; a Draft-only convenience, a static Reference capture cannot show this interaction and it does not change the visual result). Code length (6) is assumed fixed: To Verify.",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the brand mark (image-placeholder--circle) and the back glyph. Resend timing/lockout and the verify destination are To Verify; nothing navigates on submit.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 3, provisional. Built from Shared Prototype Components under prototypes/_components/. Reference-observed colours come from prototypes/_ui-kit/reference-roles.css.",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify). No OS status bar is drawn (Phase A rule)."
          ]
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
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/authentication/MP-AUTH-002/index.html",
          description: "Responsive Draft of the Registration form: brand mark, 8 label/value rows and Send OTP.",
          primaryAction: "Send OTP",
          secondaryActions: [],
          notes: [
            "Measured from the Reference (440 x 956) with tools/lib/png.mjs: header 106px total (reused); brand mark circle 120 x 120, centered; \"Create an account\" heading 8px below; 8 label/value rows (text-field--inline) on a 40px pitch; \"Send OTP\" button 400 x 60, about 171px below the last row — the Reference's own large gap between the form and the button, preserved as measured (not a Draft mistake); its meaning (reserved fields, a notice, unused space) is To Verify.",
            "SAMPLE DATA / NOT BUSINESS RULE: Name, NRIC / Passport / Other and Phone Number are masked in the Reference itself (\"xxxxx\" / \"xxxx\", kept verbatim — not a Draft redaction). Birthday, Address and Email were real-looking un-redacted values in the Reference; sanitized to fictional values of similar length/format (CLAUDE.md §5). Race (\"Chinese\") and City (\"Bintulu\") are generic sample values, not personal to an individual, and are kept as the Reference shows them.",
            "Field values render as static text (a dt/dd row), not editable inputs: the Reference does not show an active edit state for this screen. Which fields are required beyond the shown \"*\" markers, and the input type for each (date picker, free text, dropdown), are To Verify.",
            "Send OTP navigates to the Registration OTP Draft (authentication/register/otp). Field set and simplification remain a known review item (unchanged from the Reference note).",
            "TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET: the brand mark (image-placeholder--circle) and the back glyph.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 3, provisional. Built from Shared Prototype Components under prototypes/_components/. Reference-observed colours come from prototypes/_ui-kit/reference-roles.css.",
            "Inter is used as a PROVISIONAL Draft font (Draft / Provisional / Typeface To Verify). No OS status bar is drawn (Phase A rule)."
          ]
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
        },
        draft: {
          status: "Draft",
          prototype: "prototypes/authentication/otp-verification/index.html?state=register",
          description: "Responsive Draft of the Registration OTP verification screen: same structure as Login OTP, header reads \"Sign Up\".",
          primaryAction: "Verify OTP (auto-advance is a Draft convenience; not wired to a destination)",
          secondaryActions: ["Resend code (To Verify)", "Contact Us (To Verify)"],
          notes: [
            "Shares the ONE state-driven prototype with Login OTP (prototypes/authentication/otp-verification/, ?state=register): the two Reference captures are structurally identical, only the header title differs. See authentication/login/otp for the full measurement and component notes (not repeated here).",
            "Next step after this screen (Complete Profile / Registration Success) is not supplied: To Verify. Nothing navigates on submit.",
            "Draft only. Not Approved or Master, and not a handoff source (no handoff.json). Migration Batch 3, provisional."
          ]
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
          description: "Responsive Draft of the Logout confirmation panel: title, close, 'Confirm Logout?' and Yes / No buttons, centered as a floating dialog over the dimmed Account Home Draft.",
          primaryAction: "Confirm logout",
          secondaryActions: [
            "Cancel"
          ],
          notes: [
            "Button emphasis follows the Reference (D-04): Yes = grey, No = red. The emphasis is To Verify. White text on the grey action is about 2.5:1 (below WCAG AA); logged as a global accessibility / token To Verify item.",
            "The Reference is a partial-screen capture (400 x 269, capture size To Verify). The Draft matches the panel geometry: 400 x 269, radius about 20 on all four corners (a floating card), title centre y 52, message y 114, buttons 168 x 46 with a 22px gap at y 162 (radius about 8), 61px below the buttons. NOT in the capture: its exact vertical offset on screen (still To Verify). RESOLVED BY DECISION, not capture evidence: dialog vs bottom sheet — kept as a centered floating dialog, not bottom-anchored, following the Fulfilment Selector precedent (the only sheet with a full, uncropped Reference capture, which confirms vertical centering — see bottom-sheet/spec.md “Name note”); the screen behind it — the Account Home Draft (Variant A), dimmed and embedded the same way the Fulfilment Selector embeds Home — Member (previously a blank backdrop placeholder).",
            "Intentional differences vs Reference: on medium / expanded the panel is a centered panel with a maximum width of about 480 and 12px radius. Draft-only review convenience: the close button, Escape and a tap on the dimmed area hide the panel; real dismissal is To Verify.",
            "Yes / No are not wired. Session handling is Backend: Session.",
            "TEMPORARY PLACEHOLDER: the close glyph.",
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

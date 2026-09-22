# Module context: Authentication
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** phone-OTP login, registration, and logout confirmation.

**Explorer keys** (`authentication.js`)
- `authentication/login/phone-entry` (MP-AUTH-006), `authentication/login/otp` (MP-AUTH-007), `authentication/register/registration-form` (MP-AUTH-002), `authentication/register/otp` (MP-AUTH-003), `authentication/logout-confirmation` (MP-ACCOUNT-010).

**Status**
- Reference: all five. Draft: **Logout Confirmation only** (Batch 1, `prototypes/authentication/MP-ACCOUNT-010/`, committed `458c51e`).
- Login / Register Drafts are **Batch 3, not started**.

**Approved decisions**
- Logout geometry follows the Reference capture (400 x 269, radius about 20, buttons 168 x 46); centered floating dialog (not bottom-anchored), decided by precedent (Fulfilment Selector is the only sheet with a full capture, and it is centered), dimmed over the Account Home Draft; exact on-screen offset stays To Verify.
- Logout keeps the Reference emphasis: Yes = grey, No = red (To Verify; contrast about 2.5:1). It reuses `bottom-sheet` (`--floating`), not a separate dialog component.
- Batch 3 scope: build from existing Reference, no new business rules.

**Major To Verify:** "Use Password login" and "Use Email Login" flows (not supplied); resend timing, lockout, code length (6 boxes shown); registration field set and input types (Race, Birthday, City), flow simplification is a known review item; next step after Register OTP (Complete Profile / Registration Success not supplied); Account Recovery; session handling (Backend: Session).

**Shared components used now:** `bottom-sheet`, `overlay`, `button`, `icon-button`. **Planned for Batch 3 (build at first use):** `brand-mark`, `text-field` (+ `inline`), `phone-field`, `otp-input`, `link-button`, `legal-footnote`.

**Reference quirks**
- Logo appears in a red square (phone entry) and a red circle (OTP, register): the brand logo is not in the repo; use a placeholder.
- All four screens end with the same agreement footnote. "Send OTP" renders as a pale pink, disabled-looking button.
- Register form is label-left / value-right rows with sample values filled in.
- Logout capture is partial (400 x 269, capture size To Verify).

**Authoritative sources:** `APP-STRUCTURE.md` § 6; `SCREEN-INVENTORY.md` § 4.2; Draft notes in `authentication.js`.

# Module context: Authentication
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** phone-OTP login, registration, and logout confirmation.

**Explorer keys** (`authentication.js`)
- `authentication/login/phone-entry` (MP-AUTH-006), `authentication/login/otp` (MP-AUTH-007), `authentication/register/registration-form` (MP-AUTH-002), `authentication/register/otp` (MP-AUTH-003), `authentication/logout-confirmation` (MP-ACCOUNT-010).

**Status**
- Reference: all five. Draft: **all five** — Logout Confirmation (Batch 1, `prototypes/authentication/MP-ACCOUNT-010/`, committed `458c51e`); Login phone entry (`prototypes/authentication/MP-AUTH-006/`), Login OTP + Registration OTP (one state-driven prototype, `prototypes/authentication/otp-verification/?state=login|register`), Registration form (`prototypes/authentication/MP-AUTH-002/`) — Batch 3, verified 126/126, uncommitted pending checkpoint.
- Batch 3 complete. Authentication module fully migrated to Responsive Draft.

**Approved decisions**
- Logout geometry follows the Reference capture (400 x 269, radius about 20, buttons 168 x 46); centered floating dialog (not bottom-anchored), decided by precedent (Fulfilment Selector is the only sheet with a full capture, and it is centered), dimmed over the Account Home Draft; exact on-screen offset stays To Verify.
- Logout keeps the Reference emphasis: Yes = grey, No = red (To Verify; contrast about 2.5:1). It reuses `bottom-sheet` (`--floating`), not a separate dialog component.
- Batch 3 scope: build from existing Reference, no new business rules. Login OTP and Registration OTP share one state-driven prototype (structurally identical captures). Field values in the Registration form are static text (dt/dd rows), not editable inputs — the Reference shows no active edit state.
- Sanitized SAMPLE DATA (real-looking values in the Reference, replaced with fictional values of similar length/format): OTP phone number (+60 17 112 0210), Registration Birthday (1990-03-14), Address (24, Jalan Selasih 5B…), Email (limwei8820@mailbox.co). Name / NRIC / Phone Number were already masked in the Reference itself ("xxxxx" / "xxxx") and are kept verbatim; Race and City are generic sample values, kept as shown.

**Major To Verify:** "Use Password login" and "Use Email Login" flows (not supplied); resend timing, lockout, code length (6 boxes shown); registration field set and input types (Race, Birthday, City), flow simplification is a known review item; next step after Register OTP (Complete Profile / Registration Success not supplied); Account Recovery; session handling (Backend: Session); the large measured gap between the Registration form and its Send OTP button (Reference's own layout, preserved).

**Shared components used now:** `bottom-sheet`, `overlay`, `button` (+ `--pale`, Batch 3), `icon-button`, `app-shell`, `app-header` (`--back-title`), `image-placeholder` (`--square` / `--circle`), `text-field` (+ `--inline`, Batch 3), `otp-input` (Batch 3), `link-button` (+ `--muted`, Batch 3), `legal-footnote` (Batch 3).

**Reference quirks**
- Logo appears in a red square (phone entry) and a red circle (OTP, register): the brand logo is not in the repo; use a placeholder.
- All four screens end with the same agreement footnote. "Send OTP" renders as a pale pink, disabled-looking button.
- Register form is label-left / value-right rows with sample values filled in.
- Logout capture is partial (400 x 269, capture size To Verify).

**Authoritative sources:** `APP-STRUCTURE.md` § 6; `SCREEN-INVENTORY.md` § 4.2; Draft notes in `authentication.js`.

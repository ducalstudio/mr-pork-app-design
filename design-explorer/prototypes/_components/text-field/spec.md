# text-field

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 3 (Login phone entry, Registration form).

- **Base:** a filled pill (`text-field__prefix` optional + `text-field__divider` optional + `text-field__value`). Login's phone field: `+60` prefix with a chevron, a 1px divider, "Phone Number" placeholder. Fill is `--proto-accent-pale` (measured `#ffa8a8`), the Reference's own pale/"disabled-looking" field treatment — reproduced as-is, not a real disabled state (see `button` `--pale`, the same fill/text pair is used by the adjacent "Send OTP" button).
- **Variant `--inline` (Batch 3):** no fill, label left / value right (Registration form's 8 rows: Name, NRIC / Passport / Other, Race, Birthday, Address, City, Phone Number, Email). Label `--proto-text-muted`, value `--proto-text`, both 14px. Rows are screen-level `text-field--inline` elements on a repeating pitch (Reference: 40px), not a list component, since only one screen uses this composition so far.
- **Measured (Reference, 440 × 956):** phone field 400 × 59 at x 20 (base variant); divider sits about 167px inside the field; registration rows repeat on a 40px pitch starting after the logo.
- **Sizing:** screens set `--field-height`, `--field-radius`, `--field-gap` from Reference measurements; the 46px fallback is generic, not a Reference value.
- **Accessibility:** `text-field__value` is a real `<input>` in the base variant (not a disabled control, despite the pale "disabled-looking" fill — the Reference gives no evidence it is actually non-interactive). Always paired with a visible or `aria-label` name.
- **Open (To Verify):** why the field and the primary action share the same pale/"disabled-looking" fill; the dial-code dropdown's country list (not supplied).

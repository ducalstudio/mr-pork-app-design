# legal-footnote

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 3 (Login phone entry, Login OTP, Registration form, Registration OTP — identical text and position on all four captures).

- Text: "By logging or registering, you agree to our Terms of Service, Privacy Policy and Personal Data Protection Policy." with the three named items as `link-button`. Reference wording kept verbatim (SAMPLE / Reference copy, not confirmed final legal text — CMS Rule Required for the actual policy documents).
- **Position:** pinned to the bottom of the screen via `margin-top: auto` inside `app-shell__body` (a flex column), not a fixed offset — this keeps it at the bottom across all four presets and content lengths, which is the more conservative responsive read of a Reference capture that happens to have a lot of empty space above it (short forms on a tall canvas). Combine the `legal-footnote` class with `app-shell__column` on the same element (see `component.css`).
- **Measured (Reference, 440 × 956):** 12px text, left-aligned, 2 lines, about 24px of clear space above the bottom edge.
- **Open (To Verify):** the three link destinations (Terms of Service, Privacy Policy, Personal Data Protection Policy — the module also has standalone Privacy / Terms Drafts; whether these links go to those same screens is unconfirmed).

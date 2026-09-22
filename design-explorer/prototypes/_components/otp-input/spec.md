# otp-input

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 3 (Login OTP, Registration OTP — one state-driven prototype).

- **Measured (Reference, 440 × 956):** 6 boxes, 55px wide, 54px tall (row bbox 52 to 56, used 54), 11px gap, 1px border (`--proto-accent-border`), 8px radius (estimated, consistent with other Reference-observed radii). The Reference shows a text caret in the first box (an input mid-focus at capture time), not a filled digit.
- **Boxes are real `<input type="tel" maxlength="1">` elements** (not styled `<div>`s): typing a digit advances focus to the next box, Backspace on an empty box returns to the previous one (`component.js`, a Draft-only convenience — a static Reference capture cannot show this interaction; it does not change the visual result).
- **Accessibility:** each box has an `aria-label` ("Digit 1 of 6", etc.); the group has a labelling element pointing at the instruction text above it.
- **Open (To Verify):** code length is 6 in both captures (assumed fixed, not confirmed); paste-to-fill; error / invalid-code state (not supplied).

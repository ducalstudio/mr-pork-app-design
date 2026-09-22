# profile-card

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 2 (Account Home).

Bordered card: avatar (with an edit action), name, phone, divider, then an inline row of `summary-stat--inline`.

- **Long names:** wrap up to 2 lines then truncate (line clamp); very long unbroken names wrap inside the card. Whether the full name is shown elsewhere is To Verify.
- **Large values:** the stat values use the existing `summary-stat` fit (steps the font down to a 12px minimum). Verified up to 123,456,789.99 / 9,876,543 / 1,234,567 at 375. **Known limit:** a value of roughly 14 characters or more at 375 does not fit at 12px (a 100-billion Credit is an unrealistic example); the maximum value lengths are To Verify.
- **Edit action:** a 44px hit area overlapping the avatar corner. Edit-profile behavior is To Verify.
- **Avatar and edit glyph are TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS.**

## Reference-fidelity pass

Padding 11 / 19, divider 11px below the avatar, stats row 7px below the divider, card 400 x 167 at 440. Avatar 80 at x 40. Personal details in the Reference are replaced by fictional values of similar length (see the screen).

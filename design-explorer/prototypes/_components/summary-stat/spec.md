# summary-stat

Status: **Draft / Provisional** (not an approved Design System component).

A small label above a value. Home — Member uses three of them (Credit, Points, Rewards), each tappable.

- **Variant now:** bordered box. **Later:** an inline row variant for the Account Home profile card.
- **Formatting (Proposed / To Verify until backend and product requirements confirm it):** Credit is a numeric balance only: `Credit` above `100.00`, with no currency symbol or code anywhere (not `RM 100.00`, not `Credit (RM)`). The Credit value has two decimals and thousands separators (`1,000.00`, `12,345.67`, `123,456.78`); Points and Rewards are integers with thousands separators. All stats stay equal width. This supersedes the earlier proposal that put `(RM)` in the Credit label.
- **Fitting:** the value steps its font size down from its CSS size (16 px in the Draft v2, matching the Reference; minimum 12 px) if it is too wide for its box. If it still does not fit at 12 px it would overflow (a defect to report, not to hide).
- **Visual (Draft v2, observed in the Reference):** corner radius about 5 px, label 12 px, value 16 px medium, label-to-value gap 3 px, box height 49 px.
- **States:** default, pressed, keyboard focus.
- **Accessible name:** states the destination, for example "Credit 100.00, opens My Credit".
- **Destination:** recorded in metadata; not navigated in the Draft.
- **Open:** maximum value lengths, zero and very large values (`To Verify`).

## Variant inline (Batch 2)

No box; the value sits above the label, both centered (reading order stays label then value, so the accessible name is unchanged: "Credit 100.00"). Minimum height 48 for the touch target. Used in the Account profile card. Whether the stats are tappable there is To Verify (they record the same destinations as Home).

## Reference-fidelity pass

`inline`: 6px gap between value and label, minimum height 44. In the profile card the three stats sit on 80px items justified across the card (centres x 80 / 220 / 360 in the Reference); wider values grow their item up to a third of the row.

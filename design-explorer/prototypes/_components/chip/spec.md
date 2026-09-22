# chip

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 2 (Notifications tabs).

One primitive with roles. **Role now: `tab`** (`role="tab"`, `aria-selected`, roving tabindex, Left / Right / Home / End via `component.js`). `filter` and `option` roles (amount presets, size options) are added at first use, not built speculatively.

- Visible chip: 25px high, 12px text, square corners, 10px label padding, inactive fill `--proto-chip` (Draft-only role), selected fill accent (Reference evidence).
- **Touch target:** the button around the chip is at least 44 × 44 (5px extra padding per side; the row is pulled 5px outward so the first label sits on the gutter and the visible gap stays `--chips-gap`, Reference 20px).
- **Wrapping:** the row wraps instead of overflowing. At 375 the fourth tab wraps to a second line (the Reference is one line at 440).
- **Open (To Verify):** whether tabs scroll or wrap in the real app; tab labels (the Reference spelling "Annoucements" is kept, Copy To Verify).

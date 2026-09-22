# radio-row

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 5 (Credit: Transaction Type filter, Select Bank, Top-Up payment method).

- Label left, a real `<input type="radio">` right, styled as the Reference's red outline / filled circle (22px, `--proto-accent`). One `name` per group so only one row is checked at a time.
- **Measured (Reference, 440 × 956 equivalent sheets):** rows on a roughly 56 to 68px pitch depending on the screen (label size varies 14 to 16px); the indicator sits at the row's right edge.
- Used plainly (a settings-style choice list) and, in Top-Up's payment method list, as the trigger that reveals a sub-row (the bank picker) when its own row is selected — that reveal is screen-level, not part of this component.
- **Accessibility:** real radio semantics, keyboard-operable, `:focus-visible` ring.

# fulfilment-option

Status: **Draft / Provisional** (not an approved Design System component).

An illustration slot above a label. Home — Member uses two (Pickup, Delivery).

- **Variant now:** tile. **Later:** a row variant for the Fulfilment Selector.
- **`--interactive` (Current Scope, Pickup):** a `<button>`. Pressed and keyboard-focus states. Destination Store Selection (recorded in metadata; not navigated in the Draft).
- **`--future` (Future Scope, Delivery):** keeps the Reference visual treatment exactly (no dimming, no "Coming soon" copy) but is **inert**:
  - `role="button"` with `aria-disabled="true"`, no `tabindex`, so it is not in the keyboard order,
  - no pressed or active state, no pointer events, no `href`, no navigation,
  - `data-scope="future"` as the machine-readable marker.
- **Fixed height** 160; width follows the column.
- Corner radius about 8 px (observed in the Reference). Illustration (80 x 72) then label, top-aligned to match the Reference.
- **Illustration is a TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET** (`image-placeholder`, `data-asset="temporary-placeholder"`). Replace when the original standalone Pickup / Delivery illustrations are supplied.

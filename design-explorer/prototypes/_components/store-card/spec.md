# store-card

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 6 (Store Selection: map and list views).

- Photo (`image-placeholder`), name, open/closed status, address with distance, "Get Direction" link, "Select This Store" / "ORDER" action.
- **Two container layouts from the same card markup:** `store-cards--scroll` (map view, horizontal peek scroll, fixed 320px card width, same scroll-snap technique as `card-row`) and `store-cards--stack` (list view, full-width stacked rows, compact 64px square photo). One card DOM shape, reused instead of two different components, per the registry's reuse rule.
- **Variant `--selected`:** pale pink fill (list view's first/nearest result in the Reference). Selection meaning (nearest vs. actually chosen) is To Verify.
- **Open (To Verify):** live distance / open-hours computation (Backend Dependency Unknown); outlet photo source; what selects a store on the map (tapping the pin vs. the card).

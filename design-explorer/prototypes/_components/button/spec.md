# button

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 1 (Refresh, Logout Yes / No).

- **Variants now:** `--primary` (filled accent), `--neutral` (grey action). `--block` fills its container. Outline / tonal / compact variants are added at first use (not built speculatively).
- **Radius:** `--button-radius` (default 8; Logout sets 6, both estimated from the Reference).
- **States:** default, pressed, keyboard focus (screen focus ring), disabled (`disabled` or `aria-disabled`).
- **Touch target:** min height 46.
- **Open (To Verify):** contrast. White on the grey action is about 2.5:1 and white on the red is about 4.4:1, both observed values; logged as a global accessibility / token item.

# button

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 1 (Refresh, Logout Yes / No).

- **Variants now:** `--primary` (filled accent), `--neutral` (grey action), `--pale` (Batch 3: pale pink fill, `--proto-accent-pale` / `--proto-accent-pale-text`; Authentication's "Send OTP", measured `#ffa8a8` fill / `#905f5f` text — the Reference's own "disabled-looking" treatment, kept as-is, not a real disabled state). `--block` fills its container. Outline / tonal / compact variants are added at first use (not built speculatively).
- **Radius:** `--button-radius` (default 8; Logout sets 6, both estimated from the Reference).
- **States:** default, pressed, keyboard focus (screen focus ring), disabled (`disabled` or `aria-disabled`).
- **Touch target:** min height 46.
- **Open (To Verify):** contrast. White on the grey action is about 2.5:1 and white on the red is about 4.4:1, both observed values; logged as a global accessibility / token item. `--pale` text-on-fill contrast is also low (rose text on pale pink); same item.

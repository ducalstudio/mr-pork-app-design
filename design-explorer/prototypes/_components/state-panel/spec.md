# state-panel

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 1 (Network Error). Variant now: **error**. Empty and processing variants are added at first use (Batch 2 / Batch 5).

- Centered column: icon slot (80 × 80), title, message, optional full-width action. Tier: capped at 480 on medium / expanded.
- Vertical centering is done by the shell (`app-shell__body--center`), so the block centers in the area below the band as in the Reference.
- **Icon is a TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET** (`data-asset="temporary-placeholder"`).
- **Open (To Verify):** retry behavior, which failures use this screen, whether an offline mode exists.

## Variant empty (Batch 2)

`state-panel--empty`: no icon, 16px title and 12px text (max 220px wide), fills the remaining height and centers its content. Used by the twelve-state Notifications prototype (Empty states). Copy is the Reference wording; whether empty copy differs per tab is To Verify. The processing variant is still to be added at first use (Batch 5).

## Reference-fidelity pass

Variables for the measured footprint and rhythm: `--state-icon-w/h`, `--state-title-top`, `--state-text-top`, `--state-action-top`, `--state-empty-pad`. `empty`: 16px regular title, 12px text wrapping at about 172px (`max-width` 180), 15px line pitch. Network Error uses a 76 x 83 icon footprint.

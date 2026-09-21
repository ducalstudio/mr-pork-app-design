# state-panel

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 1 (Network Error). Variant now: **error**. Empty and processing variants are added at first use (Batch 2 / Batch 5).

- Centered column: icon slot (80 × 80), title, message, optional full-width action. Tier: capped at 480 on medium / expanded.
- Vertical centering is done by the shell (`app-shell__body--center`), so the block centers in the area below the band as in the Reference.
- **Icon is a TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET** (`data-asset="temporary-placeholder"`).
- **Open (To Verify):** retry behavior, which failures use this screen, whether an offline mode exists.

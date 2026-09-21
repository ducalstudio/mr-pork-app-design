# overlay

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). **Internal foundation** for bottom-sheet and media-overlay (not a visible component by itself; added in Batch 1 so sheets and popups share one dimming / focus / dismiss behavior).

- **Underlay:** a dimmed, inert screen behind the panel: an iframe of another Draft (`.overlay__underlay`, `inert`, `aria-hidden`; used with the Home — Member Draft) or a blank page. Embedded, never copied, so the Home Draft is not duplicated.
- **Scrim:** `--proto-scrim` (Reference: about 60% black).
- **Layer:** places the panel with `--overlay-align` (`center` default; Reference panels are vertically centered) and `--overlay-pad`.
- **Behavior (component.js):** panel gets initial focus (the panel, not a control, so no focus ring appears before interaction); Tab is trapped inside; when `dismissible`, Escape, a tap on the scrim and any `[data-dismiss]` control hide the overlay. Dismissal is a **Draft-only review convenience**; whether the real app dismisses is To Verify and the Reference shows no dismiss control on the popup or selector.

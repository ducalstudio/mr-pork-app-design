# bottom-nav-reference

Status: **Draft / Provisional** (not an approved Design System component).

**Reference Navigation only.** The four tabs of the existing UI: Home, Shop, Rewards, Account. This is not newly approved Master Navigation; `DESIGN-SYSTEM.md` §17 says not to encode a bottom-navigation structure into the design system yet.

- Selected tab: a raised red circle with a white icon and a bold label (`aria-current="page"`).
- **Responsive (layout only, not a navigation redesign):** the bar background is full viewport width; the four items sit in a centered inner container capped at `--nav-inner-max` (Home sets it to 720 on medium / expanded). No side rail.
- In the Draft the selected tab is fixed (Home) and tabs are not wired: taps show a pressed state only.
- Vertical layout matches the Reference (Draft v2): selected circle 44 px, inactive icons about 12 px lower than the circle's icon, labels 6 px below the icon box.
- **Icons are TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS** (`data-asset="temporary-placeholder"`): line icons drawn for review. They are not approved iconography. Replace when the original icon set is supplied.

# promo-carousel

Status: **Draft / Provisional** (not an approved Design System component).

A square (1:1) promotion frame. Compact: the available content width. Medium / expanded: centered, limited by `--promo-max` (set by the screen; Home proposes about 480).

- **Behavior:** manual swipe or scroll, `scroll-snap`, **no autoplay, no looping**. Dots follow the visible slide and are indicators only (not interactive).
- **Accessibility:** the scroller is keyboard focusable (arrow keys scroll). Each slide is labelled "n of N". Dots are `aria-hidden`; a visually hidden live region announces "Slide n of N".
- **Dots (Draft v2, as in the Reference):** plain white dots at the bottom-left, no dark pill. Active about 14 px, inactive about 8 px. Indicators only (`aria-hidden`, no pointer events). A faint shadow keeps them visible on the light placeholder; the Reference artwork has no such shadow (`To Verify` once real artwork exists).
- **Artwork is a TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET** (`data-asset="temporary-placeholder"`). Replace with the CMS image when supplied.
- **No crop rule:** images are a neutral placeholder. Crop rules and safe areas are `CMS Rule Required` and are not invented.
- **Open (`CMS Rule Required`):** banner tap behavior, real slide count, image dimensions and safe area, alt-text source.

# Prototype UI kit

Shared foundations for every responsive prototype. Phase A ships neutral placeholders only.

- `tokens.css` — neutral grey-scale placeholders. **Not** Mr Pork brand tokens. Real tokens come from `DESIGN-SYSTEM.md` or explicit owner approval; until then they are `To Verify`.
- `base.css` — reset, layout primitives and the tier convention.

## Rules

1. **Reuse before creation.** Check `_components/` and this kit before adding anything. Use a variant if one fits.
2. **Tiers, not numbers.** Respond to size with `[data-tier="compact|medium|expanded"]` selectors. Base rules are compact. Never write numeric breakpoints, and never use `@media` width queries for tiers. The thresholds live only in `prototype-runtime/tiers.js`.
3. **Load order in `<head>`:** `tiers.js`, `protocol.js`, `client.js` (classic scripts), then the CSS. This sets `data-tier` before first paint.
4. **Tiers are prototype / design-system tiers**, not a mandatory production framework contract. Programmers may use their own breakpoints to achieve the same behaviour.
5. **No web-font files** until loading them from a sandboxed (opaque-origin) iframe is verified. Use system fonts.
6. A prototype must adapt from 375 to 1024 CSS px wide without horizontal scroll.

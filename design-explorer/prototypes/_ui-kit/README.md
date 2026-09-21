# Prototype UI kit

Shared foundations for every responsive prototype. Phase A ships neutral placeholders only.

- `tokens.css` — neutral grey-scale placeholders. **Not** Mr Pork brand tokens. Real tokens come from `DESIGN-SYSTEM.md` or explicit owner approval; until then they are `To Verify`.
- `font-inter.css` — Inter (variable, latin) embedded for Drafts. Provisional / To Verify. SIL OFL 1.1, see `font-inter.LICENSE.txt`.
- `reference-roles.css` — Draft-only semantic role values OBSERVED in the Reference (colors, scrim, cream page, tan band). Opt-in per screen. **Not** an approved token file; `DESIGN-SYSTEM.md` does not list these values. The Home — Member Draft predates it and keeps its own local values.
- `base.css` — reset, layout primitives and the tier convention.

## Rules

1. **Reuse before creation.** Check `_components/` and this kit before adding anything. Use a variant if one fits.
2. **Tiers, not numbers.** Respond to size with `[data-tier="compact|medium|expanded"]` selectors. Base rules are compact. Never write numeric breakpoints, and never use `@media` width queries for tiers. The thresholds live only in `prototype-runtime/tiers.js`.
3. **Load order in `<head>`:** `tiers.js`, `protocol.js`, `client.js` (classic scripts), then the CSS. This sets `data-tier` before first paint.
4. **Tiers are prototype / design-system tiers**, not a mandatory production framework contract. Programmers may use their own breakpoints to achieve the same behaviour.
5. **Fonts:** default to system fonts. Loading a font file from a sandboxed (opaque-origin) iframe needs CORS headers, so a Draft font is embedded as a data URI. `font-inter.css` embeds Inter as a **provisional Draft font (To Verify)**: not an approved brand font and not a global token. A screen opts in by loading it and setting `--proto-font`.
6. A prototype must adapt from 375 to 1024 CSS px wide without horizontal scroll.

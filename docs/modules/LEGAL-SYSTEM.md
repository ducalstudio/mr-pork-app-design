# Module context: Legal / System States (and App Foundation)
> **Summary / index only, not a source of truth.** If this conflicts with a canonical document, `versions.reference` metadata or an owner approval, use that source and update this file afterwards. Status as of 2026-09-21. Routing: `docs/CONTEXT-MAP.md`.

**Purpose:** legal pages, launch and error system screens.

**Explorer keys**
- `legal.js`: `legal/privacy-policy` (MP-SUPPORT-003), `legal/terms-and-conditions` (MP-SUPPORT-004).
- `app-foundation.js`: `app-foundation/system-states/network-error` (MP-FOUND-005), `app-foundation/launch-promotion-interstitial`, `app-foundation/splash` (MP-FOUND-001).

**Status**
- Drafts (Batch 1, committed `458c51e`): Privacy, Terms, Network Error, Launch Interstitial. Prototypes: `prototypes/legal/{_shared,MP-SUPPORT-003,MP-SUPPORT-004}`, `prototypes/app-foundation/{MP-FOUND-005,launch-promotion-interstitial}`.
- Splash: Reference only (native launch screen; brand assets absent).

**Approved decisions:** Legal pages keep the Reference's own filler lines ("xxxxx / x / xx") exactly, marked SAMPLE; column caps about 600 / 720, Legal reading width about 640, tablet panels about 480 (provisional). Legal sample content is approved for layout testing and must stay marked SAMPLE / CMS Rule Required. Interstitial "Skip 3 s" is static (no countdown).

**Major To Verify:** real legal text and source (CMS Rule Required); Membership, refund / return and PDPA policy screens (known review item); Refresh behavior and which failures use the Network Error screen; interstitial timing, skip rule, frequency and portrait crop on tablet (CMS Rule Required); tan header band meaning.

**Shared components used:** `app-shell`, `app-header` (`back-title`), `rich-content`, `state-panel` (`error`), `media-overlay` (`--screen`), `button`, `icon-button`, `image-placeholder`.

**Reference quirks:** legal pages show "xxxxx" filler lines; the tan band on Network Error covers only the status-bar region (y 0 to 54) with no header; the interstitial artwork is a stock "SALE" image.

**Authoritative sources:** `APP-STRUCTURE.md` § 5, 19, 20; `SCREEN-INVENTORY.md` § 4.1, 4.16; notes in `legal.js` / `app-foundation.js`.

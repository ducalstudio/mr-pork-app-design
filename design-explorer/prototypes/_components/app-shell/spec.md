# app-shell

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 1 (Network Error, Privacy Policy, Terms & Conditions, Bottom Navigation review).

Page frame: optional top band (safe-area stand-in + header), body column, bottom clearance for the Reference bottom navigation. Owns the tier behavior of the frame; screens own their Reference-observed spacing.

- **Screens supply values, the shell does not normalize them.** Each screen sets its own `--shell-gutter` (from Reference evidence; Home is 20px and Batch 1 screens are 20px), `--shell-top-inset` (Home 50, band screens 54), `--shell-nav-zone` (90 where the Reference nav is shown) and, if needed, `--shell-max`. The 20px gutter inside the component is only a fallback. Do not copy one gutter to every screen for reuse's sake.
- **Column width by tier (Draft tablet presentation, not in the Reference):** compact fluid; medium max 600; expanded max 720 (`:where()` so a screen can override, e.g. Legal caps expanded at 640). The column is centered; the band and backdrop stay full width.
- **Variants:** `--band` (tan Reference header band; meaning To Verify; it also colors the safe-area stand-in as in the Reference), `--page` (cream page background), `__body--center` (vertically centers content in the area below the band).
- **Safe area:** `__inset` is blank. No OS status bar is drawn. Real safe-area handling is To Verify.
- No behavior, no JS.

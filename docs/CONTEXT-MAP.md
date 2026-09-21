# Context Map

A **routing index**, not a project document. It tells you which few files to start with. Everything here is a pointer; the canonical documents stay authoritative (see `CLAUDE.md` section 2). If anything below disagrees with a canonical source, trust the source and fix this file afterwards.

## How to use it

1. Find the task's category below.
2. Read the listed module summary, then only the listed sources for the screen you are working on.
3. Find the screen's metadata with one grep, not by reading the data file:
   `rg -n 'key: "<explorer-key>"' design-explorer/data/modules/<file>.js -A 40`
4. Expand only when a conflict, dependency or missing fact requires it.

Never scan `.ai-output/`, all of `reference-ui/`, all of `design-explorer/data/modules/`, or all of `_components/*/spec.md`.

## Task routing

| Task category | Start with | Data file (`design-explorer/data/modules/`) | Reference folder (`reference-ui/phase-1/`) | Detailed sources (grep the heading) |
|---|---|---|---|---|
| **Home** (Home, Promotion Popup, Fulfilment Selector, Bottom Nav) | `docs/modules/HOME.md` | `home-navigation.js` | `home-navigation/` | `APP-STRUCTURE.md` § 7; `SCREEN-INVENTORY.md` § 4.3 |
| **Authentication** (Login, Register, OTP, Logout) | `docs/modules/AUTHENTICATION.md` | `authentication.js` | `authentication/` | `APP-STRUCTURE.md` § 6; `SCREEN-INVENTORY.md` § 4.2 |
| **Account** (Account Home) | `docs/modules/ACCOUNT.md` | `home-navigation.js` (account-home keys) | `home-navigation/` (MP-ACCOUNT-001) | `APP-STRUCTURE.md` § 18; `SCREEN-INVENTORY.md` § 4.15 |
| **Notifications** | `docs/modules/NOTIFICATIONS.md` | `notifications.js` | `notifications/` | `APP-STRUCTURE.md` § 17; `SCREEN-INVENTORY.md` § 4.14 |
| **Rewards** (My Rewards, Voucher Detail, Redemption) | `docs/modules/REWARDS.md` | `rewards.js` | `rewards/` | `APP-STRUCTURE.md` § 14; `SCREEN-INVENTORY.md` § 4.10 |
| **Credit** (My Credit, filters, Top-Up, Member Card) | `docs/modules/CREDIT.md` | `membership-credit.js`, `membership-member-card.js` | `credit/` | `APP-STRUCTURE.md` § 13.2 (Member Card), 13.6 (Credit); `SCREEN-INVENTORY.md` § 4.9 |
| **Points** (Point Reward, Rules, Exchange Records) | `docs/modules/POINTS.md` | `membership-points.js` | `points/` | `APP-STRUCTURE.md` § 13.4; `SCREEN-INVENTORY.md` § 4.9 |
| **Shop & Ordering** (Store, Search, Product, Checkout, Orders) | `docs/modules/SHOP.md` | `shop-ordering.js` | `ordering/` | `APP-STRUCTURE.md` § 8, 9, 12, 16; `SCREEN-INVENTORY.md` § 4.4, 4.5, 4.8, 4.13 |
| **Legal / System States** (Privacy, T&C, Network Error, Splash, Launch Interstitial) | `docs/modules/LEGAL-SYSTEM.md` | `legal.js`, `app-foundation.js` | `legal/`, `system-states/`, `app-foundation/` | `APP-STRUCTURE.md` § 5, 19, 20; `SCREEN-INVENTORY.md` § 4.1, 4.16 |
| **Delivery (Future Scope)** | `docs/modules/DELIVERY-FUTURE.md` | `delivery-future.js` | `delivery-future/` | `DESIGN-EXPLORER-IMPLEMENTATION.md` § 20 |
| **Shared Components** | `design-explorer/prototypes/_components/README.md` (the registry), then `<component>/spec.md` **only for components the task uses** | n/a | n/a | `DESIGN-SYSTEM.md` § 11 (authoritative system; prototype components are not authoritative) |
| **Responsive Runtime** (presets, tiers, renderer, review links) | `DESIGN-EXPLORER-IMPLEMENTATION.md` § 31; `design-explorer/prototype-runtime/tiers.js`; `design-explorer/prototypes/_ui-kit/README.md` | n/a | n/a | `DESIGN-EXPLORER-IMPLEMENTATION.md` § 25 |
| **Navigation / IA** | `APP-STRUCTURE.md` § 4, 21, 22; `_components/bottom-nav-reference/spec.md` | n/a | n/a | `AI-GUIDELINES.md` § 18 (Navigation Protection). No navigation change without a proposal |
| **Screen Inventory** (IDs, availability, status) | `SCREEN-INVENTORY.md` § 4 (the one module section) | n/a | n/a | `SCREEN-INVENTORY.md` § 3, 9, 10 for status, duplicates, missing states |
| **Design Explorer itself** (tree, info panel, rules) | `DESIGN-EXPLORER.md` (section for the part) | n/a | n/a | `DESIGN-EXPLORER-IMPLEMENTATION.md` |
| **Project overview / CMS / Staff POS** | `PROJECT.md` § 2 to 5 | n/a | n/a | `AI-GUIDELINES.md` § 10, 11 |

Locate a section with `rg -n '^# 14\. ' APP-STRUCTURE.md` (headings are `# N.` / `## N.M`) and read only from there to the next heading.

## Where things live

| Thing | Path |
|---|---|
| Screen metadata (Reference + Draft versions, notes, To Verify) | `design-explorer/data/modules/<module>.js` |
| Reference screenshots (never modified) | `reference-ui/phase-1/<folder>/` |
| Draft prototypes | `design-explorer/prototypes/<module-folder>/<SCREEN-ID or slug>/` (`index.html`, `screen.css`, `responsive.css`, `states/`) |
| Component registry and specs | `design-explorer/prototypes/_components/README.md`, `<component>/spec.md` |
| Draft-only colour roles / Inter font / base CSS | `design-explorer/prototypes/_ui-kit/` |
| Device presets, tiers | `design-explorer/js/config.js`, `design-explorer/prototype-runtime/tiers.js` |
| Module context summaries | `docs/modules/` |
| Historical working reports (do not read by default) | `.ai-output/` |

## Authority

- **Authoritative:** the canonical project/product documents listed in `CLAUDE.md` section 2, the `versions.reference` metadata, `reference-ui/`, and explicit owner approvals.
- **Summaries only:** this file and `docs/modules/*.md`.
- **Historical:** `.ai-output/`. Never a source of truth and never scanned.

## `.ai-output/`

Historical working reports and temporary task output. Excluded from Git. **Do not read during normal context loading.** Read one named file only if the user refers to it, the task continues that report, or a prior-audit comparison is necessary. Never scan the folder.

## Normal-task context budget

Target: **about 8 to 11 files, roughly 25 KB of text plus 1 to 3 Reference images** for a normal screen task (CLAUDE.md, this map, one module summary, one grep result from one data file, the registry, 3 to 5 component specs, the Reference image(s)). If you are reading more than that, you are probably loading context you do not need.

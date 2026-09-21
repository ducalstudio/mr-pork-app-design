# Mr Pork App — Design Explorer Implementation

**Document:** `DESIGN-EXPLORER-IMPLEMENTATION.md`  
**Status:** Ready for Implementation  
**Primary Purpose:** Build the first working Mr Pork Design Explorer using the existing Phase 1 Reference UI

---

# 1. Objective

Build a lightweight Design Explorer that allows the owner, designer, AI assistant, and programmer to browse the Mr Pork App design library clearly.

The first implementation should focus on:

- Browsing existing Reference UI
- Showing design hierarchy
- Showing the actual selected UI
- Showing screen information
- Showing design status
- Showing scope labels such as Future Scope
- Preserving the existing UI without redesigning it

The first implementation is a **design review tool**, not the production Customer App.

---

# 2. First Version Technology Direction

For the first version, prefer a lightweight static implementation unless the repository already contains an approved frontend stack.

Recommended:

- HTML
- CSS
- Vanilla JavaScript

Do not add a large framework only for the Design Explorer unless there is a clear approved reason.

Benefits:

- Easy to maintain
- Easy for AI assistants to modify
- No paid service required
- Easy to host later
- Low dependency risk
- Fast loading
- Suitable for static reference images

If an existing approved stack already exists in the repository, follow the existing stack instead of introducing another one.

---

# 3. Important Rule

Do not redesign the uploaded Reference UI during the first implementation.

The screenshots under:

```text
reference-ui/phase-1/
```

must remain unchanged.

The Design Explorer should display them as design references.

Any redesigned version created later must be stored separately and marked:

- Draft
- Review
- Approved
- Master

Never overwrite the original Reference screenshot.

---

# 4. Main Explorer Layout

Desktop review layout:

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ Mr Pork Design Explorer                    [Mobile] [Tablet]   Search    │
├──────────────────┬────────────────────────────────┬──────────────────────┤
│                  │ Breadcrumb                     │                      │
│ DESIGN TREE      │                                │ DESIGN INFO          │
│                  │                                │                      │
│ Home             │                                │ Screen ID            │
│ ├ Member Home    │         UI PREVIEW             │ Status               │
│ ├ Promo Popup    │                                │ Scope                │
│                  │                                │ Purpose              │
│ Rewards          │                                │ Actions              │
│ ├ My Rewards     │                                │ Dependencies         │
│ ...              │                                │ Notes                │
│                  │                                │                      │
├──────────────────┴────────────────────────────────┴──────────────────────┤
│ Optional footer / current reference path                                │
└──────────────────────────────────────────────────────────────────────────┘
```

Recommended layout proportions:

- Left panel: approximately 250–320px
- Center: flexible
- Right panel: approximately 300–360px

Exact values should be implemented cleanly, not treated as permanent design tokens.

---

# 5. Left Panel — Design Tree

The left panel should display:

**Parent → Child → Sub-child → Screen / Review View → State**

Use collapsible tree groups.

Example:

```text
App Foundation
├── Splash
├── Launch Promotion
└── System States
    └── Network Error

Home & Navigation
├── Home — Member
├── Promotion Popup
└── Fulfilment Selector

Authentication
├── Login
│   ├── Phone Entry
│   └── OTP
├── Register
│   ├── Form
│   └── OTP
└── Logout Confirmation
```

Requirements:

- Parent items can expand / collapse
- Child items can expand / collapse where required
- Selected item must be visibly highlighted
- Tree should scroll independently
- Selected path should remain understandable
- Use labels from the manifest, not raw screenshot filenames

---

# 6. Initial Phase 1 Hierarchy

Use the structure from:

`REFERENCE-UI-PHASE-1.md`

Initial top-level groups:

1. App Foundation
2. Home & Navigation
3. Authentication
4. Notifications
5. Rewards
6. Membership
   - Credit
   - Points
7. Shop & Ordering
8. Delivery — Future Scope
9. Legal

Do not reorganize the hierarchy without approval.

---

# 7. Center Panel — UI Preview

The selected Reference UI should appear in the center panel.

Requirements:

- Preserve screenshot aspect ratio
- Do not stretch the screenshot
- Center it horizontally
- Allow vertical scrolling when needed
- Use a subtle preview background
- Do not crop content unintentionally

The preview should represent the selected device.

> **Phase A update:** preview rules are extended by section 31 (device presets, Reference vs Prototype renderers, Fit / 100% reviewer zoom). The rules above still apply to Reference screenshots.

---

# 8. Mobile Preview

Mobile should be the default preview.

Reference screenshots are currently mobile-oriented.

The preview may display them inside a neutral device-sized frame or simple viewport container.

Do not add decorative phone hardware if it reduces readability.

The screenshot itself remains the source of truth for the old Reference UI.

---

# 9. Tablet Preview

> **Superseded by section 31:** the Mobile / Tablet selector is replaced by four device presets. The "do not fabricate / do not scale a mobile screenshot as a tablet design" rule is kept and strengthened.

The top device selector should include:

- Mobile
- Tablet

For Phase 1:

If no tablet design exists for the selected screen, do **not** fabricate one.

Instead display:

```text
Tablet design not available yet.
Mobile Reference shown below.
```

or an equivalent clear message.

Do not scale a mobile screenshot and label it as an approved tablet design.

---

# 10. Breadcrumb

Display the selected design path above the preview.

Examples:

```text
Rewards > My Rewards > Valid > With Rewards
```

```text
Membership > Credit > Top-Up Credit > Select Bank > Selected
```

```text
Delivery — Future Scope > Address > New Address > Filled
```

Breadcrumb must reflect the Design Explorer hierarchy, not the App's real navigation.

---

# 11. Right Panel — Design Info

The right panel should contain structured information.

Recommended sections:

## Identity

- Screen ID
- Design name
- Module
- State
- Device

## Status

Examples:

- Reference
- Draft
- Review
- Approved
- Master
- Deprecated
- To Verify

## Scope

Examples:

- Current Scope
- Future Scope
- Third-Party External UI

## Description

Short explanation of what the screen does.

## Primary Action

Main user action.

## Secondary Actions

Other important actions.

## Entry Point

How the user reaches the screen.

## Next Step

Where the user goes next.

## Dependencies

Examples:

- CMS: Rewards
- CMS: Promotions
- Backend: Member
- Backend: Payment
- Staff Membership POS
- External payment gateway

## Notes

Known issues, missing states, future review notes.

---

# 12. Phase 1 Metadata

The first implementation does not need a complex database.

Use a simple structured file.

Recommended:

```text
design-explorer/data/screens.js
```

or:

```text
design-explorer/data/screens.json
```

Each design entry should contain fields similar to:

```text
id
name
module
parent
state
status
scope
device
image
description
primaryAction
secondaryActions
entryPoint
nextStep
dependencies
notes
```

Example:

```json
{
  "id": "MP-HOME-001",
  "name": "Home — Member",
  "module": "Home & Navigation",
  "state": "Reference",
  "status": "Reference",
  "scope": "Current Scope",
  "device": "Mobile",
  "image": "../reference-ui/phase-1/home-navigation/MP-HOME-001_home-member_reference.png",
  "description": "Existing member Home design showing membership balances, promotion banner, fulfilment shortcuts and current bottom navigation.",
  "primaryAction": "Enter shopping or membership-related destinations.",
  "secondaryActions": ["View notifications", "Choose Pickup", "Choose Delivery"],
  "entryPoint": "Authenticated app entry",
  "nextStep": "Shop, Rewards, Account or fulfilment flow",
  "dependencies": ["Member data", "Promotions"],
  "notes": "Delivery is future scope. Current bottom navigation is Reference only."
}
```

Do not store business logic in this metadata file.

---

# 13. Image Path Rule

All images must continue using the organized semantic paths under:

```text
reference-ui/phase-1/
```

Do not rename or move the Phase 1 images during the initial explorer implementation unless absolutely required.

If a path must change:

- Update the manifest
- Update explorer metadata
- Keep history understandable

---

# 14. Status Badges

Show status prominently.

Suggested badge labels:

```text
REFERENCE
DRAFT
REVIEW
APPROVED
MASTER
DEPRECATED
TO VERIFY
```

Delivery screenshots should show:

```text
REFERENCE
FUTURE SCOPE
```

External bank/payment UI should show:

```text
REFERENCE
EXTERNAL UI
```

Do not imply that External UI is designed by Mr Pork.

---

# 15. Search

Phase 1 search should support:

- Screen name
- Screen ID
- Module
- State

Example searches:

```text
MP-REWARD-005
reward
credit
notification
delivery
```

Search should filter the left tree or present matching results clearly.

---

# 16. Filters

If simple to implement, include:

- All
- Reference
- Future Scope
- To Verify

Advanced filtering can wait.

Do not make Phase 1 unnecessarily complex.

---

# 17. URL / Deep Link

> **Superseded by section 31.5:** review links use a query string (`?screen=…&version=…&device=<preset>&view=<fit|100>`). Legacy hash links are still read and rewritten.

Where practical, preserve selected design through a URL hash.

Example:

```text
#rewards/my-rewards/valid
```

or:

```text
#MP-REWARD-005-valid
```

Requirements:

- Refresh should preserve the selected screen
- Shared URL should reopen the same screen where practical

A full router is not required.

---

# 18. Default Screen

On first load, open:

```text
Home & Navigation > Home — Member
```

Use the existing Phase 1 reference.

Do not default to a future-scope or error screen.

---

# 19. Current Bottom Navigation Reference

The current Reference UI shows:

1. Home
2. Shop
3. Rewards
4. Account

The Explorer should document this.

Do not redesign or add a fifth tab in Phase 1.

Do not treat this as newly approved Master Navigation.

---

# 20. Delivery Future Scope

All designs under:

```text
reference-ui/phase-1/delivery-future/
```

must clearly display:

```text
Future Scope
```

Suggested right-panel message:

> This UI is preserved as a future Delivery reference. Delivery is not part of the current required implementation unless explicitly activated by the owner.

Do not mix Delivery screens into Current Scope without approval.

---

# 21. External Payment UI

The existing bank redirect screenshot is third-party UI.

Display it in the Explorer as part of the flow, but label it:

```text
External UI
```

Description should clarify:

> This screen represents an external payment/banking page and is not a Mr Pork-owned UI to be recreated.

---

# 22. Missing UI

The Explorer should support placeholder entries for important known missing screens.

Examples:

- Member Card / Member QR
- Points Balance / Earning History
- Order History
- Order Status / Order Detail
- Payment Success
- Payment Failed
- Pay At Outlet flow

For these, show:

```text
UI not supplied yet.
Status: To Verify
```

Do not generate a design automatically.

---

# 23. Reference vs Future Master

The first Design Explorer should be able to evolve later.

Recommended future source groups:

```text
reference-ui/
draft-ui/
approved-ui/
master-ui/
```

Phase 1 only requires:

```text
reference-ui/
```

Do not create fake Master UI simply to populate the system.

---

# 24. Accessibility of the Explorer

The Design Explorer itself should be easy to use.

Requirements:

- Readable labels
- Keyboard-accessible buttons where practical
- Clear selected states
- Sufficient contrast
- Scrollable panels
- Avoid tiny controls

This is an internal review tool, but basic usability still matters.

---

# 25. Responsive Behavior of Explorer

The Explorer is primarily intended for desktop browser review.

At narrower widths:

- Left and right panels may become drawers
- Center preview remains primary
- Do not destroy the hierarchy

Phase 1 does not need a sophisticated mobile Explorer experience.

---

# 26. Suggested Project Structure

> **Superseded by the modular structure now in the repository** (`data/modules/`, `js/components/`, `js/utils/`) plus the Phase A additions in section 31.4.

If the repository has no existing implementation structure, use:

```text
design-explorer/
├── index.html
├── css/
│   ├── tokens.css
│   ├── explorer.css
│   └── components.css
├── js/
│   ├── data.js
│   ├── explorer.js
│   └── search.js
└── data/
    └── screens.js
```

Reuse shared CSS/JS if the repository already has an approved equivalent.

Do not create duplicate architecture unnecessarily.

---

# 27. Phase 1 Completion Criteria

Phase 1 is complete when:

- Explorer loads locally
- Home — Member opens by default
- Left hierarchy works
- Phase 1 Reference screenshots can be selected
- Selected screenshot appears correctly
- Breadcrumb updates
- Design Info updates
- Status is visible
- Delivery clearly shows Future Scope
- External bank UI clearly shows External UI
- Search works
- No Reference screenshot is modified
- No existing product design is redesigned
- No new Master Design is created

---

# 28. Do Not Do Yet

Do not do these in Phase 1:

- Redesign Home
- Redesign Bottom Navigation
- Redesign Authentication
- Redesign Rewards
- Redesign Credit
- Redesign Shop
- Create missing Member QR UI
- Create Delivery implementation
- Create tablet designs
- Create new business rules
- Add a frontend framework without approval
- Connect to real CMS/API
- Build production Customer App functionality

Phase 1 is for **visibility and review**.

---

# 29. After Phase 1

After the owner reviews the working Design Explorer:

1. Select one module.
2. Review the existing Reference UI.
3. Identify UX/UI problems.
4. Produce a proposal.
5. Get approval.
6. Build a Draft UI.
7. Show Reference and Draft separately.
8. Review again.
9. Promote approved design to Master.
10. Prepare programmer handoff.

Recommended first review module:

```text
Home & Navigation
```

Then:

```text
Membership
Rewards
Shop & Ordering
```

---

# 30. Claude Code Task Rule

Claude Code should implement this specification without modifying unrelated repository documentation or Reference images.

Before implementation it must read:

1. `PROJECT.md`
2. `APP-STRUCTURE.md`
3. `SCREEN-INVENTORY.md`
4. `DESIGN-EXPLORER.md`
5. `DESIGN-SYSTEM.md`
6. `AI-GUIDELINES.md`
7. `CLAUDE.md`
8. `REFERENCE-UI-PHASE-1.md`
9. `DESIGN-EXPLORER-IMPLEMENTATION.md`

Then it may create the first Design Explorer implementation.

If it finds contradictions, it should report them before making a product-level decision.

---

# 31. Phase A — Responsive Preview and Prototype Runtime

Status: implemented on branch `feat/design-explorer-phase-1`, pending owner visual review. Design status: **Draft** architecture (the Explorer is a review tool, not the Customer App).

## 31.1 Device presets

A preset is a **responsive viewport profile** (CSS px) for design review. It is **not a hardware emulator**: no physical hardware, real device pixel ratio, notch / Dynamic Island, OS status bar, browser chrome or platform safe-area emulation. Future device metadata may add those if required; none is invented.

| Preset id | Label | Viewport | Class |
|---|---|---|---|
| `iphone-se` | iPhone SE | 375 × 667 | mobile |
| `iphone-16-pro-max` (default) | iPhone 16 Pro Max | 440 × 956 | mobile |
| `ipad-mini` | iPad mini | 744 × 1133 | tablet |
| `ipad-pro-12-9` | iPad Pro 12.9 | 1024 × 1366 | tablet |

Presets live in `js/config.js` (`DEVICES`). Legacy `mobile` → `iphone-16-pro-max`, `tablet` → `ipad-mini` (`LEGACY_DEVICE_ALIASES`).

## 31.2 Reference Renderer vs Prototype Renderer

- **Reference Renderer** (`js/components/renderers/referenceRenderer.js`): an unmodified screenshot, displayed **only** for the preset it was captured for (`capturePreset`). Existing Phase 1 Mobile Reference assets are treated as `capturePreset: iphone-16-pro-max` (440 × 956), applied once in `data/helpers.js` (`CLASS_DEFAULT_CAPTURE`) and overridable per asset. A Reference is never reused, stretched, substituted or relabelled for another preset; other presets show "Reference not available". A tablet asset with no explicit `capturePreset` is `To Verify` and shown nowhere.
- **Prototype Renderer** (`js/components/renderers/prototypeRenderer.js`): a live responsive prototype in a sandboxed iframe. One prototype renders at every preset.
- The dispatcher (`js/components/uiPreview.js`) chooses by whether the version has a `prototype` path.

## 31.3 Viewing: Fit-to-pane and 100%

Reviewer zoom only; it never reflows or adapts a design.

- **Fit** (default UI mode): uniform scale, aspect ratio preserved, never above 100%.
- **100%**: prototypes at the exact preset viewport; Reference at its **logical capture size**. The logical capture preset is authoritative: a Reference exported at 2× / 3× density (pixel width an integer multiple of the preset width) is shown at its logical size, not visually enlarged. Source assets are never modified or downsampled.
- Assets whose pixel size does not match the capture preset (`js/utils/assetCheck.js`: `partial-height`, `width-mismatch`) are reported in the info panel and the console.

## 31.4 Prototype runtime and structure

```text
design-explorer/
├── prototype-runtime/   tiers.js (ONLY numeric thresholds) · protocol.js · client.js (runs in iframe)
│                        frame.js · parent-bridge.js · fit.js (Explorer side)
└── prototypes/          _ui-kit/ · _components/ · _handoff/ (schema.json + schema.md)
                         _selftest/ · <module>/<SCREEN-ID>/ (created only after approval)
```

- **Isolation:** `sandbox="allow-scripts"`, no `allow-same-origin`. The Explorer never touches the iframe DOM.
- **Bridge:** the prototype client reads its own viewport, derives the tier, sets `data-tier`, and posts `ready` / `viewport` / `tier`. The Explorer parent checks `event.source`, validates the message shape, and drops anything else.
- **Tiers** (prototype / design-system tiers, **not** a mandatory production framework contract): compact under 600px, medium 600–899px, expanded 900px and above. Thresholds exist only in `prototype-runtime/tiers.js`; prototype CSS uses `[data-tier="…"]` selectors, never numeric breakpoints.
- `tiers.js` and `protocol.js` are classic scripts, not ES modules, because module scripts inside an opaque-origin iframe need CORS headers that a plain static server does not send.

## 31.5 Review Links

`?screen=<key>&version=<version>&device=<preset-id>&view=<fit|100>`

- `device` and `view` are always written explicitly, so a link reproduces the exact review state.
- If the URL carries **any** review state, missing values use deterministic defaults (default screen, its highest-ranked version, `iphone-16-pro-max`, `fit`) and the stored last view is **never** read. The stored last view is restored only when the URL has no review state at all.
- Invalid values fall back to the same defaults with a notice; the URL is rewritten explicitly.

## 31.6 Developer self-test

`?screen=__selftest` opens `prototypes/_selftest/index.html`, a neutral page for verifying the runtime. It is not a screen or a design version, is not in the tree, search or inventory, and is never stored as the last view. Its browser DPR readout is the current browser / runtime `window.devicePixelRatio`, not the selected device's hardware DPR.

## 31.7 Handoff

`prototypes/_handoff/schema.json` (JSON Schema 2020-12) is the machine-readable contract for a future `handoff.json` (Approved / Master only); `schema.md` explains it. No Mr Pork `handoff.json` exists yet.

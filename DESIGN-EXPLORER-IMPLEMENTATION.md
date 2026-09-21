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

---

# 8. Mobile Preview

Mobile should be the default preview.

Reference screenshots are currently mobile-oriented.

The preview may display them inside a neutral device-sized frame or simple viewport container.

Do not add decorative phone hardware if it reduces readability.

The screenshot itself remains the source of truth for the old Reference UI.

---

# 9. Tablet Preview

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

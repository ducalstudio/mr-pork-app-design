# Mr Pork App — Design Explorer

**Document:** `DESIGN-EXPLORER.md`  
**Status:** Draft Structural Baseline  
**Primary Scope:** Customer App UI review and programmer handoff

---

# 1. Purpose

The Mr Pork Design Explorer is a structured way to browse, review, and hand off UI designs.

It should work similarly to the Ducal Game design review system:

- Left: design hierarchy tree
- Center: actual UI preview
- Right: design information and description
- Top: device / viewport selector where applicable

The Design Explorer hierarchy is a **design review structure**.

It is not the same thing as the Customer App's actual navigation.

---

# 2. Core Hierarchy

Use the following hierarchy:

**Parent → Child → Sub-child → Screen / Review View → State**

Not every module needs every level.

Examples:

```text
Membership
└── Member Card
    ├── Default
    ├── QR Refreshing
    └── QR Error
```

A deeper example:

```text
Shop
└── Category
    └── Fresh Pork
        └── Product Listing
            ├── Default
            ├── Empty
            └── Loading
```

Another example:

```text
Orders
└── Order Detail
    ├── Ongoing
    │   ├── Preparing
    │   └── Ready for Pickup
    ├── Completed
    └── Cancelled
```

---

# 3. Design Explorer Layout

## 3.1 Left Panel — Design Tree

The left panel is the main design navigation.

It shows the hierarchy of all UI designs.

Example:

```text
Home
├── Member Home
│   ├── Default
│   ├── Loading
│   └── Partial Error
└── Guest Home
    └── Default

Membership
├── Membership Home
├── Member Card
│   ├── Active
│   ├── QR Refreshing
│   └── QR Error
├── Points
│   ├── Points Summary
│   ├── Points History
│   └── Transaction Detail
└── Credit
    ├── Credit Balance
    └── Credit History

Rewards
├── Rewards Home
│   ├── Available
│   ├── Empty
│   └── Expiring
├── Reward Detail
│   ├── Redeemable
│   ├── Locked
│   └── Expired
└── My Rewards
    ├── Active
    ├── Used
    └── Expired

Shop
├── Shop Home
├── Category
├── Search
│   ├── Search Entry
│   ├── Results
│   └── No Results
└── Product
    └── Product Detail
        ├── Available
        ├── Promotion
        └── Out of Stock

Cart & Checkout
├── Cart
│   ├── Default
│   ├── Empty
│   └── Item Changed
└── Checkout
    ├── Review Order
    ├── Fulfilment
    ├── Address / Outlet
    ├── Payment
    └── Order Success

Orders
├── Orders Home
├── Current Orders
├── Order History
└── Order Detail
    ├── Ongoing
    ├── Completed
    ├── Cancelled
    └── Failed

Account
├── Account Home
├── Profile
├── Addresses
├── Settings
└── Support
```

The tree must support expansion and collapse.

The selected design should always remain visibly highlighted.

---

# 4. Center Panel — UI Preview

The center panel displays the selected UI design.

It should show the real prototype or the closest implementation-ready representation available.

Preferred sources:

1. Approved HTML / UI prototype
2. Approved coded design preview
3. Approved exported design
4. Reference screenshot only when no interactive design exists

Do not use a random placeholder if an approved design exists.

---

# 5. Device / Viewport Selector

The Design Explorer should allow the reviewer to switch between supported device views without losing the current selected screen/state.

Recommended initial options:

- Mobile
- Tablet

Mobile is the primary Mr Pork Customer App target.

If a future design requires another viewport, it can be added later.

Changing the viewport should preserve:

- Selected module
- Selected screen
- Selected state
- Selected configuration
- Current tab where relevant

---

# 6. Breadcrumb

Above the UI preview, show the active design path.

Example:

```text
Membership > Member Card > QR Error
```

Deeper example:

```text
Shop > Category > Fresh Pork > Product Listing > Empty
```

The breadcrumb should match the Design Explorer hierarchy.

---

# 7. Right Panel — Design Info

Every reviewable UI should have a Design Info panel.

The panel should show only fields relevant to that design.

Recommended fields:

## Identity

- Screen ID
- Parent
- Child
- Sub-child
- Screen / Review View
- State
- Device

## Description

- Purpose
- What the user sees
- Why this screen exists

## User Actions

- Primary Action
- Secondary Actions
- Back / Close behavior
- Main navigation destinations

## Flow

- Entry Point
- Previous Screen
- Next Screen
- Deep-link destination where relevant

## Data

- CMS Dependency
- API / Backend Dependency
- Important data displayed

## Rules

- Validation
- Eligibility
- Business rules
- Permission / login requirements

## Design Status

- Reference
- Draft
- Review
- Approved
- Master
- Deprecated

## Notes

- Open questions
- Known issues
- Programmer notes
- Design review notes

---

# 8. Example Design Info

Example selected design:

```text
Membership > Member Card > Active
```

Design Info:

```text
Screen ID:
MP-MEMBER-002

Parent:
Membership

Screen:
Member Card

State:
Active

Purpose:
Allow an authenticated member to present their digital membership identity
and QR code to Mr Pork staff.

Primary Action:
Present QR to staff.

Secondary Actions:
View points.
View rewards.

Entry Point:
Home membership shortcut.
Membership Home.

Next Interaction:
Staff Membership POS scans the QR.

CMS / Backend Dependency:
Member identity.
Membership status.
QR token.
Point balance.

Status:
Review
```

---

# 9. Design Description Standard

Descriptions should explain the UI in product terms.

Avoid descriptions such as:

> This is the member page.

Prefer:

> Displays the customer's digital membership identity and active QR code for
> in-store member verification. It also provides quick access to points and
> rewards without requiring the customer to navigate back to Home.

A programmer should understand the purpose of the screen without seeing the original design discussion.

---

# 10. Parent / Child / Sub-child Rules

## Parent

Represents a major product or design family.

Examples:

- Home
- Membership
- Rewards
- Shop
- Orders
- Account

## Child

Represents a meaningful feature area or screen group.

Examples:

```text
Membership
└── Points
```

```text
Shop
└── Search
```

## Sub-child

Use when another meaningful layer is required.

Example:

```text
Shop
└── Category
    └── Fresh Pork
```

Do not create unnecessary hierarchy merely to make the tree deeper.

## Screen / Review View

Represents an actual reviewable UI.

Example:

```text
Orders
└── Order Detail
```

## State

Represents the same UI under a meaningful condition.

Examples:

- Default
- Loading
- Empty
- Error
- Active
- Used
- Expired
- Completed
- Cancelled

---

# 11. Configuration vs State

Do not confuse a configuration with a UI state.

Example:

```text
Product Detail
├── Configuration: Weight-based Product
└── State: Out of Stock
```

Another example:

```text
Order Detail
├── Configuration: Pickup
└── State: Ready for Pickup
```

Where useful, the Design Explorer may expose configuration below a screen or inside the Design Info panel.

---

# 12. Design Status Rules

## Reference

Old design or existing concept that still needs review.

## Draft

Working design.

## Review

Ready for owner decision.

## Approved

Owner has approved the design.

## Master

Approved design is now part of the official Master Design.

## Deprecated

No longer used.

Only `Approved` or `Master` designs should normally be handed to programmers as implementation requirements.

---

# 13. Approval Workflow

The Design Explorer should support this workflow:

```text
Existing / New Design
        ↓
Reference / Draft
        ↓
Review
        ↓
Owner Decision
        ↓
Approved
        ↓
Master
        ↓
Programmer Handoff
```

AI-generated UI remains `Draft` until explicitly approved.

---

# 14. Existing Design Review

When an existing Mr Pork UI is imported:

1. Add it to the correct hierarchy.
2. Assign its Screen ID.
3. Add its description.
4. Mark it `Reference`.
5. Display it in the center preview.
6. Record known issues in Design Info.
7. Review the design.
8. Propose changes only where needed.
9. Obtain owner approval.
10. Promote the approved version to `Master`.

Do not silently replace the old design during import.

---

# 15. Relationship With SCREEN-INVENTORY.md

`SCREEN-INVENTORY.md` answers:

> What screens exist?

`DESIGN-EXPLORER.md` answers:

> How do we browse, understand, review, and approve those designs?

Each reviewable UI should ultimately map back to a Screen ID from the screen inventory.

---

# 16. Relationship With Product Navigation

The Design Explorer tree is independent from the Customer App's bottom navigation.

Example:

The Design Explorer may show:

```text
Membership
├── Member Card
├── Points
├── Credit
└── Benefits
```

This does **not** mean Membership must have four navigation destinations in the real App.

The Design Explorer is optimized for design review and documentation.

The product navigation is optimized for customer use.

Never mix these two structures.

---

# 17. Suggested Explorer Shell

Recommended UI structure:

```text
┌─────────────────────────────────────────────────────────────┐
│ Mr Pork Design Explorer        Mobile | Tablet              │
├────────────────┬───────────────────────────┬────────────────┤
│                │ Breadcrumb                │                │
│ Design Tree    │                           │ Design Info    │
│                │       UI Preview          │                │
│ Parent         │                           │ Description    │
│ └ Child        │                           │ Actions        │
│   └ Sub-child  │                           │ Flow           │
│     └ State    │                           │ Data           │
│                │                           │ Status         │
│                │                           │ Notes          │
└────────────────┴───────────────────────────┴────────────────┘
```

Desktop browser is used to review the Design Explorer itself.

The preview inside it represents the target Customer App viewport.

---

# 18. Search and Filtering

As the design library grows, the Explorer should support:

- Search by screen name
- Search by Screen ID
- Filter by module
- Filter by status
- Filter by device
- Show only screens needing review

This is not required for the first prototype if the design library is still small.

---

# 19. Deep Linking

Where practical, each design should have a stable URL or route.

Examples:

```text
/design/membership/member-card/active
/design/rewards/reward-detail/redeemable
/design/orders/order-detail/completed
```

This allows a designer or programmer to share the exact UI being discussed.

---

# 20. Programmer Handoff Use

A programmer should be able to open one design and immediately see:

- Exact UI
- Screen ID
- Purpose
- State
- Main actions
- Entry and exit paths
- Backend / CMS dependencies
- Important rules
- Design status
- Notes

This reduces the need to interpret a large Figma file or search through chat history.

---

# 21. First Implementation Priority

The first version of the Mr Pork Design Explorer should focus on:

1. Design tree
2. Parent / child / sub-child hierarchy
3. UI preview
4. Breadcrumb
5. Design Info
6. Status
7. Mobile / Tablet preview switching
8. Stable screen IDs

Advanced search and filtering can be added after the initial design library is working.

---

# 22. Next Step

After this document is approved, create the actual Design Explorer shell and begin importing the existing Mr Pork designs module by module.

Recommended first import:

1. Home
2. Membership
3. Rewards
4. Main Navigation

These areas will establish the core design language and customer journey before the Shop and ordering flows are reviewed.

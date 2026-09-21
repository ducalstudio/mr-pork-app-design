# Mr Pork App — Design System

**Document:** `DESIGN-SYSTEM.md`  
**Status:** Structural Baseline  
**Primary Scope:** Customer App  
**Related Scope:** Shared patterns used by Staff Membership POS where explicitly applicable

---

# 1. Purpose

This document defines the design-system rules for the Mr Pork Customer App.

Its purpose is to ensure that:

- UI remains visually consistent
- Repeated patterns use reusable components
- Designers and AI assistants do not invent new styles unnecessarily
- Programmers know which patterns are shared
- Approved visual decisions can be stored as design tokens
- Future screens can be designed without breaking established rules

This document defines the **system structure first**.

Visual values such as colors, typography, spacing, radius, shadows, and icon sizes should be finalized only after the existing Mr Pork App design has been reviewed.

Do not invent visual values merely to complete this file.

---

# 2. Design System Principles

The Mr Pork design system should follow these principles:

## 2.1 Consistency

The same type of element should look and behave the same throughout the App.

Example:

A primary CTA button should not have different height, radius, typography, or interaction behavior on different screens without a valid reason.

---

## 2.2 Reuse Before Creation

Before creating a new component:

1. Check whether an existing component can be reused.
2. Check whether an existing component can support a new variant.
3. Only create a new component when the existing system cannot represent the requirement clearly.

---

## 2.3 Product Clarity Over Decoration

Visual design should support:

- Fast scanning
- Easy interaction
- Membership understanding
- Shopping clarity
- Order clarity
- Reward clarity

Avoid visual complexity that does not improve user understanding.

---

## 2.4 Mobile First

The Customer App is primarily mobile.

Components should be designed for touch interaction first.

Tablet should adapt the same design language rather than becoming a completely different product.

---

## 2.5 Implementation Friendly

Design decisions should be practical to build and maintain.

Avoid:

- One-off component styles
- Unnecessary animation
- Excessive visual effects
- Different spacing systems per screen
- Arbitrary icon sizes
- Duplicate components with minor differences

---

# 3. Source of Truth

Design-system decisions follow this priority:

1. Latest approved Master Design
2. `DESIGN-SYSTEM.md`
3. Approved component specifications
4. Approved screen specifications
5. Existing reference designs
6. Historical designs

If an old screen conflicts with the current approved design system, do not copy the old style automatically.

---

# 4. Design Token Architecture

The design system should use reusable tokens instead of hard-coded values wherever practical.

Recommended categories:

```text
tokens/
├── color
├── typography
├── spacing
├── radius
├── border
├── shadow
├── size
├── icon
├── motion
└── breakpoint
```

Actual values should be added only after review.

---

# 5. Color Tokens

Use semantic naming rather than naming colors only by appearance.

Recommended structure:

```text
color.brand.primary
color.brand.secondary

color.background.primary
color.background.secondary
color.background.surface
color.background.elevated

color.text.primary
color.text.secondary
color.text.muted
color.text.inverse
color.text.link

color.border.default
color.border.strong
color.border.focus

color.action.primary
color.action.primaryPressed
color.action.secondary
color.action.disabled

color.status.success
color.status.warning
color.status.error
color.status.info

color.membership.point
color.membership.credit
color.membership.reward
```

Do not define `red1`, `red2`, `grey3` as the primary public token names.

Primitive colors may exist internally, but components should normally consume semantic tokens.

---

# 6. Typography Tokens

Typography should be defined consistently across screens.

Recommended roles:

```text
type.display
type.heading1
type.heading2
type.heading3
type.title
type.body
type.bodyStrong
type.caption
type.label
type.button
type.numeric
```

Each role should later define:

- Font family
- Font size
- Font weight
- Line height
- Letter spacing

Do not create unique font sizes for individual screens without system-level justification.

---

# 7. Spacing System

Use a consistent spacing scale.

Recommended token structure:

```text
space.0
space.1
space.2
space.3
space.4
space.5
space.6
space.7
space.8
```

Exact pixel values should be finalized from the approved UI.

Use spacing tokens for:

- Screen padding
- Section spacing
- Component gaps
- Card padding
- List spacing
- Form spacing
- Button groups

Avoid arbitrary values such as 13px, 19px, or 27px unless the approved design genuinely requires them.

---

# 8. Radius System

Use a small number of approved radii.

Recommended roles:

```text
radius.none
radius.small
radius.medium
radius.large
radius.full
```

Potential usage:

- Inputs
- Buttons
- Cards
- Sheets
- Chips
- Avatars
- Pills

Do not assign different radii to similar components across modules.

---

# 9. Elevation and Shadow

Use elevation only when it helps communicate layering.

Potential levels:

```text
elevation.none
elevation.low
elevation.medium
elevation.high
```

Examples:

- Bottom sheet
- Floating action
- Sticky element
- Modal
- Popover

Do not use decorative shadows independently on random cards.

---

# 10. Icon System

Use one consistent icon style.

The final icon library should define:

- Stroke or filled style
- Default size
- Small size
- Large size
- Active state
- Disabled state

Icons should not be mixed from different visual families without approval.

Common icons may include:

- Home
- Shop
- Search
- Cart
- Heart
- Rewards
- QR
- Orders
- Notification
- Account
- Back
- Close
- Chevron
- Add
- Minus
- Edit
- Delete
- Share
- Location
- Payment
- Help

---

# 11. Core Component Levels

Use the following component hierarchy.

## 11.1 Foundations

- Color
- Typography
- Spacing
- Radius
- Border
- Shadow
- Icons
- Motion

## 11.2 Primitives

Examples:

- Button
- Icon Button
- Text Input
- Search Input
- Checkbox
- Radio
- Switch
- Divider
- Badge
- Chip
- Avatar

## 11.3 Composite Components

Examples:

- Product Card
- Reward Card
- Promotion Card
- Order Card
- Member Summary Card
- Points Summary
- Voucher Card
- Address Card
- Notification Item
- Cart Item
- Empty State
- Error State

## 11.4 Patterns

Examples:

- App Header
- Bottom Navigation
- Filter Bar
- Product Grid
- Section Header
- Form Section
- Checkout Summary
- Membership Asset Row
- QR Presentation
- Confirmation Sheet
- Alert Dialog

## 11.5 Screens

Screens should be composed from approved primitives, composites, and patterns.

Avoid building screens from entirely custom one-off UI.

---

# 12. Button System

Recommended button hierarchy:

## Primary Button

Used for the main action on a screen.

Examples:

- Add to Cart
- Checkout
- Redeem
- Confirm
- Save

## Secondary Button

Used for important but non-primary actions.

## Tertiary / Text Button

Used for lower-priority actions.

## Destructive Button

Used for destructive actions such as:

- Remove
- Delete
- Cancel where irreversible

Potential states:

- Default
- Pressed
- Disabled
- Loading

Button components should define:

- Height
- Padding
- Radius
- Typography
- Icon behavior
- Full-width behavior
- Loading behavior

---

# 13. Form Components

Recommended form primitives:

- Text Input
- Phone Input
- OTP Input
- Search Input
- Text Area
- Select / Picker
- Checkbox
- Radio
- Switch

Each form component should support relevant states:

- Default
- Focus
- Filled
- Error
- Disabled
- Read-only

Validation messages should appear close to the relevant field.

Do not rely only on color to communicate an error.

---

# 14. Card System

Cards should represent reusable information groups.

Potential card types:

- Product Card
- Promotion Card
- Reward Card
- Order Card
- Member Card
- Voucher Card
- Address Card

All card components should define:

- Content structure
- Image behavior
- Padding
- Radius
- Tap behavior
- Disabled / unavailable state where relevant

Do not use a different card grammar for every module.

---

# 15. Membership Components

Membership is a core Mr Pork experience.

Recommended reusable components:

## Member Summary

Potential data:

- Member name
- Member ID
- Tier
- Status

## Membership Assets

Potential items:

- Credit Balance
- Point Balance
- Available Voucher

## Member QR

Potential states:

- Active
- Refreshing
- Error
- Expired

## Points Transaction Item

Potential information:

- Transaction type
- Date
- Points
- Description

## Reward Wallet Item

Potential states:

- Active
- Used
- Expired

These components should be designed as reusable building blocks, not rebuilt independently on Home, Membership, and Rewards.

---

# 16. Ecommerce Components

Recommended reusable components:

- Product Card
- Product Price
- Product Availability
- Quantity Stepper
- Favorite Toggle
- Cart Item
- Price Summary
- Voucher Selector
- Fulfilment Selector
- Address Selector
- Payment Method Item
- Order Status
- Order Timeline where required

Weight-based products require especially clear price and unit presentation.

Do not assume all products use the same fixed-unit pricing model.

---

# 17. Navigation Components

Potential navigation components:

- App Header
- Back Header
- Bottom Navigation
- Tab Control
- Segmented Control
- Breadcrumb inside Design Explorer only
- Contextual action bar

Important:

The actual Customer App primary navigation is not yet finalized.

Do not encode a specific bottom-navigation structure into the global design system until approved.

---

# 18. Feedback Components

Reusable feedback patterns should include:

## Loading

- Full-screen loading
- Inline loading
- Button loading
- Skeleton where appropriate

## Empty State

Examples:

- No Orders
- No Favorites
- No Rewards
- No Notifications
- No Search Results

## Error State

Examples:

- General Error
- Network Error
- Payment Error
- QR Error
- Action Failed

## Success

Examples:

- Registration Success
- Order Success
- Reward Redeemed
- Profile Saved

## Toast / Snackbar

Use for lightweight temporary feedback.

## Dialog

Use for decisions requiring clear confirmation.

## Bottom Sheet

Use for contextual selection or confirmation when appropriate on mobile.

---

# 19. Status Language

Status presentation should be consistent.

Examples:

```text
success
warning
error
info
neutral
```

Business-specific statuses should map to semantic presentation.

Example:

```text
Order: Completed → success
Order: Preparing → info
Order: Cancelled → neutral or error depending on context
Reward: Expiring Soon → warning
Reward: Used → neutral
```

Do not assign status styles independently on each screen.

---

# 20. Interaction States

Interactive components should support relevant states:

- Default
- Hover — Design Explorer / desktop preview only where relevant
- Pressed
- Focus
- Selected
- Disabled
- Loading

For the Customer App, touch states are more important than hover states.

---

# 21. Touch Target Rules

Interactive elements must be easy to tap.

Important touch targets include:

- Bottom navigation
- Header icons
- Product actions
- Favorite action
- Quantity controls
- QR access
- Reward actions
- Form controls

Avoid tiny icon-only targets.

Exact minimum dimensions should be finalized during UI review and implementation.

---

# 22. Screen Layout System

Recommended screen anatomy:

```text
System / Safe Area
App Header
Primary Content
Secondary Content
Sticky / Fixed Action where required
Bottom Navigation where applicable
System / Safe Area
```

Each screen should define whether its content:

- Scrolls
- Has a sticky header
- Has a sticky CTA
- Uses a bottom sheet
- Uses full-screen content
- Is affected by bottom navigation

---

# 23. Mobile Layout

Mobile is the primary design target.

Mobile layouts should prioritize:

- One-column flow
- Clear vertical hierarchy
- Thumb-friendly actions
- Limited simultaneous choices
- Sticky primary actions where useful
- Efficient use of screen height

Avoid simply shrinking desktop/web layouts.

---

# 24. Tablet Layout

Tablet should preserve the same information architecture and component language.

Possible adaptations:

- Wider content containers
- Two-column presentation where useful
- Larger product grids
- Side-by-side summary and detail where justified
- More whitespace

Do not create a separate tablet product unless there is a clear requirement.

---

# 25. Responsive Component Rule

A responsive component should remain the same logical component across devices.

Example:

`ProductCard`

Mobile:
- Single-column list or compact grid

Tablet:
- Wider grid

Do not create unrelated components such as:

- `MobileProductCard`
- `TabletProductCard`

unless their behavior is genuinely different.

---

# 26. Content Rules

UI copy should be:

- Short
- Clear
- Action-oriented
- Consistent

Avoid multiple labels for the same concept.

Example:

Choose one approved naming convention rather than mixing:

- My Account
- Profile
- Me
- Account

The final term should be decided during navigation review.

---

# 27. Number and Currency Presentation

Mr Pork operates in a commerce context.

Formatting rules should eventually define:

- Currency format
- Decimal places
- Weight format
- Quantity format
- Points format
- Credit format
- Date format
- Time format

These should be based on the actual business implementation and locale.

Do not invent formatting rules without verifying the current system.

---

# 28. Image Rules

Image types may include:

- Product images
- Promotion images
- Reward images
- Brand assets
- Empty-state illustrations

Define later:

- Aspect ratios
- Cropping behavior
- Placeholder behavior
- Error fallback
- Image loading state

Do not stretch images to fill arbitrary containers.

---

# 29. Accessibility Baseline

The design system should support basic accessibility practices.

Consider:

- Readable text sizes
- Sufficient contrast
- Clear focus states
- Meaningful labels
- Non-color-only status communication
- Large enough touch areas
- Logical reading order

Do not sacrifice usability for visual minimalism.

---

# 30. Motion

Motion should be functional.

Potential uses:

- Screen transition
- Button feedback
- Loading
- Success confirmation
- Sheet presentation
- Expand / collapse

Avoid unnecessary decorative animation.

Respect reduced-motion preferences where the platform supports them.

---

# 31. Component Naming Convention

Recommended format:

```text
Component / Variant / State
```

Examples:

```text
Button / Primary / Default
Button / Primary / Loading
Product Card / Standard / Available
Reward Card / Wallet / Expired
Member QR / Standard / Error
Order Card / Active / Preparing
```

For code, use stable implementation names.

Examples:

```text
Button
ProductCard
RewardCard
MemberQr
OrderCard
EmptyState
```

---

# 32. Component Approval Status

Components should use the same review status system as screens:

- Reference
- Draft
- Review
- Approved
- Master
- Deprecated

A Draft component should not silently replace a Master component.

---

# 33. Design-System Change Rule

A global component or token change can affect many screens.

Before modifying a Master component:

1. Identify the reason.
2. Identify affected screens.
3. Propose the change.
4. Review the impact.
5. Obtain approval.
6. Update the component.
7. Update affected screens.
8. Document the change.

Do not make a global change while fixing one screen unless that global change is explicitly approved.

---

# 34. AI Assistant Rules

AI assistants must:

- Reuse existing components first
- Follow approved tokens
- Preserve approved hierarchy
- Avoid creating arbitrary values
- Avoid redesigning unrelated components
- Mark new design ideas as Draft
- Explain when a new component is necessary
- Avoid changing global design rules without approval

AI assistants must not:

- Change brand colors autonomously
- Change typography globally
- Replace the icon system
- Change navigation structure
- Redefine spacing across the product
- Introduce a second component for an existing function without justification

---

# 35. Programmer Handoff

Each Master component should eventually document:

- Component name
- Purpose
- Variants
- States
- Props / data
- Interaction
- Responsive behavior
- Accessibility notes
- Token usage
- Example screens

This allows programmers to implement reusable components rather than screen-specific copies.

---

# 36. Relationship With Other Documents

`PROJECT.md`

Defines the product and design scope.

`APP-STRUCTURE.md`

Defines the App structure and modules.

`SCREEN-INVENTORY.md`

Defines which screens exist.

`DESIGN-EXPLORER.md`

Defines how designs are browsed and reviewed.

`DESIGN-SYSTEM.md`

Defines how the UI should remain consistent.

Future:

`NAVIGATION.md`

Defines approved product navigation.

`USER-FLOWS.md`

Defines key user journeys.

`AI-GUIDELINES.md`

Defines how AI assistants are allowed to work.

`HANDOFF.md`

Defines implementation-ready delivery rules.

---

# 37. Current Visual Token Status

The following visual values are intentionally **not finalized in this document yet**:

- Brand colors
- Background colors
- Text colors
- Font family
- Font sizes
- Spacing values
- Radius values
- Shadow values
- Icon family
- Breakpoints
- Motion durations

These should be extracted from the current approved Mr Pork visual direction and normalized after the existing UI is reviewed.

Do not fill them with placeholder values and later mistake those values for approved design decisions.

---

# 38. Next Step

After this file is added, the next core repository document should be:

**`AI-GUIDELINES.md`**

That document will define how Claude Code or another AI coding/design assistant must work inside this repository, including:

- Which files to read first
- What it may change
- What requires approval
- How to propose UI changes
- How to handle Master designs
- How to avoid unrelated redesign
- How to update documentation after an approved change

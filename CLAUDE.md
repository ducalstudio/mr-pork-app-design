# Mr Pork App — Claude Code Instructions

This repository contains the Mr Pork App design system, UI structure, review workflow, and programmer handoff documentation.

Before making any meaningful change, read the project context in this order:

1. `PROJECT.md`
2. `APP-STRUCTURE.md`
3. `SCREEN-INVENTORY.md`
4. `DESIGN-EXPLORER.md`
5. `DESIGN-SYSTEM.md`
6. `AI-GUIDELINES.md`

When additional files exist, also read the relevant:

- `NAVIGATION.md`
- `USER-FLOWS.md`
- Screen specification
- Approved prototype
- `HANDOFF.md`

---

## Core Rule

Do not redesign the Mr Pork App freely.

The repository contains an existing product direction and existing UI designs that are being consolidated and reviewed.

Existing designs should normally be imported as `Reference` first.

Do not automatically replace them with a new design.

---

## Source of Truth

Use this priority when information conflicts:

1. Latest explicit owner approval
2. Latest approved Master Design
3. Current repository documentation
4. Approved screen specification
5. Approved prototype
6. Existing reference design
7. Historical design
8. Your own interpretation

Your interpretation has the lowest priority.

---

## Task Scope

Work only within the requested scope.

If asked to modify one screen, do not also redesign:

- Other modules
- Primary navigation
- Global colors
- Typography
- Spacing system
- Icon system
- Shared components

unless the broader change is explicitly approved.

---

## Major Changes Require Proposal First

Before changing any of the following, explain the proposed change and its impact first:

- Primary navigation
- Information architecture
- Authentication flow
- Membership logic
- Rewards logic
- Checkout flow
- Order flow
- Global design tokens
- Shared component architecture
- Responsive strategy
- CMS/backend assumptions

Do not treat the proposal as approved until the owner approves it.

---

## Design Status

Use these statuses consistently:

- `Reference`
- `Draft`
- `Review`
- `Approved`
- `Master`
- `Deprecated`
- `To Verify`

Do not promote a design to `Approved` or `Master` without explicit owner approval.

---

## Existing CMS

Administrative operations are handled by the existing in-house CMS.

Do not design a new Admin Portal unless explicitly requested.

Document CMS dependencies where they affect the App.

---

## Staff Membership POS

The Staff Membership POS is for membership-related operations.

It is not the store's cashier/accounting POS.

Do not expand it into a full retail POS unless explicitly requested.

---

## Design Explorer

The Design Explorer hierarchy is:

`Parent → Child → Sub-child → Screen / Review View → State`

This hierarchy is for reviewing and organizing designs.

It does not define the real Customer App navigation.

---

## Reuse Before Creation

Before creating a new component:

1. Check the existing design system.
2. Reuse an existing component where possible.
3. Use a variant if appropriate.
4. Create a new component only when necessary.

Avoid duplicate components with slightly different names.

---

## Do Not Invent

Do not invent:

- Business rules
- Points conversion
- Reward eligibility
- Membership tier rules
- Referral rules
- Credit rules
- Voucher stacking
- Payment methods
- Delivery rules
- Order statuses
- CMS capabilities
- Design tokens

If something is unknown, mark it as:

- `To Verify`
- `Open Question`
- `CMS Rule Required`
- `Backend Dependency Unknown`

---

## File Discipline

Keep changes focused.

Modify only files required by the task.

Before finishing a task, summarize:

- Files changed
- What changed
- Why
- Open questions
- Any decision still requiring approval

---

## Documentation Discipline

When an approved product or design decision changes repository truth, update the relevant documentation.

Examples:

Navigation change:
- Update `NAVIGATION.md`
- Update `APP-STRUCTURE.md`
- Update affected inventory entries

New screen:
- Update `SCREEN-INVENTORY.md`
- Update the Design Explorer hierarchy

Global component change:
- Update `DESIGN-SYSTEM.md`

Do not allow implementation and documentation to drift apart.

---

## Preferred Workflow

Use this workflow:

`Read context → inspect existing design → identify issue → propose → owner approval → create Draft → review → revise → owner approval → Master → programmer handoff`

Do not jump directly from an old design to a new Master Design.

---

## Final Reminder

Protect approved work.

Be conservative when modifying Master Design.

Be clear and ambitious when proposing improvements, but always label proposals as proposals until approved.

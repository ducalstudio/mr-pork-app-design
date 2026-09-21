# Mr Pork App — AI Guidelines

**Document:** `AI-GUIDELINES.md`  
**Status:** Active Working Rules  
**Applies To:** Claude Code, ChatGPT, Gemini, other AI coding/design assistants  
**Primary Scope:** Mr Pork App Design Repository

---

# 1. Purpose

This document defines how AI assistants are allowed to work inside the Mr Pork App design repository.

The goal is to make AI useful without allowing it to:

- Redesign unrelated screens
- Change approved product structure
- Replace Master Design decisions
- Invent unsupported business rules
- Introduce inconsistent components
- Modify navigation without approval
- Treat old or draft designs as final

AI assistants are contributors.

They are not the final product owner or design approver.

---

# 2. Context Loading Strategy

The repository should not be reread in full for every task.

`CLAUDE.md` is the short operational entry point and should guide each Claude Code session.

## First Project Bootstrap

Precedence: `CLAUDE.md` section 1 governs where it differs from the list below. A full baseline read is not a per-task or first-entry requirement; it is done for an owner-requested project-wide audit, when core project rules have changed, or when a contradiction cannot be settled from the relevant sections. Routine entry goes through `docs/CONTEXT-MAP.md`.

Read the full baseline when:

- entering this repository for the first time,
- core project rules have changed,
- a contradiction is found,
- or a task requires project-wide context.

The baseline includes:

1. `PROJECT.md`
2. `APP-STRUCTURE.md`
3. `SCREEN-INVENTORY.md`
4. `DESIGN-EXPLORER.md`
5. `DESIGN-SYSTEM.md`
6. `AI-GUIDELINES.md`

## Normal Task Workflow

For normal tasks, read only the context relevant to the current Module / Screen / State.

Routine tasks follow `CLAUDE.md` and `docs/CONTEXT-MAP.md`. Relevant files may include:

- `docs/CONTEXT-MAP.md` and the relevant `docs/modules/<MODULE>.md` (routing summaries, not sources of truth)
- The relevant `APP-STRUCTURE.md` module section and `SCREEN-INVENTORY.md` entry
- Relevant screen metadata (`design-explorer/data/modules/*.js`)
- Relevant Reference / Approved / Master UI
- Relevant `DESIGN-SYSTEM.md` section and the component registry (`design-explorer/prototypes/_components/README.md`)

The standard workflow is:

**Read relevant context → Inspect existing design/code → Audit → Propose → Owner approval → Implement → Verify**

Do not repeatedly reread unrelated project documentation.

Do not begin a redesign based only on a screenshot or isolated prompt when relevant repository context exists.

# 3. Source of Truth Priority

When information conflicts, follow this order:

1. Latest explicit owner approval
2. Latest approved Master Design
3. Current repository documentation
4. Approved screen specification
5. Approved prototype
6. Existing reference design
7. Historical design files
8. AI interpretation

AI interpretation always has the lowest priority.

---

# 4. Owner Approval Rule

The owner is the final approver for product and design decisions.

AI assistants may:

- Suggest
- Analyze
- Compare
- Prototype
- Identify issues
- Recommend alternatives

AI assistants may not independently declare a major product or design change as final.

---

# 5. Design Status Awareness

All designs and components should be understood using these statuses:

- Reference
- Draft
- Review
- Approved
- Master
- Deprecated

Rules:

## Reference

Existing or old design.

Do not treat it as current implementation truth until reviewed.

## Draft

Working proposal.

May change freely within the approved task scope.

## Review

Ready for owner review.

Do not promote it automatically.

## Approved

Owner has explicitly approved it.

## Master

Official current design source.

Protect it from unrelated changes.

## Deprecated

No longer active.

Do not reuse unless specifically requested.

---

# 6. Task Scope Rule

Every AI task should have a clearly defined scope.

Examples:

Good:

```text
Review Membership > Member Card > Active state.
Improve hierarchy and QR visibility only.
Do not change navigation.
```

Good:

```text
Create the empty state for Orders.
Use the existing Order screen structure and design system.
```

Bad:

```text
Improve the whole app.
```

Bad:

```text
Make the UI more modern.
```

When a task is narrow, do not modify unrelated files or screens.

---

# 7. No Unrelated Redesign

If working on:

```text
Membership > Member Card
```

do not automatically change:

- Home
- Shop
- Orders
- Rewards
- Bottom Navigation
- Typography
- Global colors
- Global spacing
- Icon library

If a broader change appears necessary:

1. Explain the issue.
2. Identify affected areas.
3. Propose the broader change separately.
4. Wait for approval before treating it as part of the Master Design.

---

# 8. Proposal Before Major Change

The AI assistant should propose first before making major changes to:

- Primary navigation
- App information architecture
- Authentication flow
- Membership logic
- Reward logic
- Checkout flow
- Order flow
- Global design tokens
- Typography system
- Brand colors
- Component architecture
- Responsive strategy
- Screen naming structure
- CMS/backend assumptions

A proposal should explain:

- Current issue
- Proposed solution
- Why it helps
- What screens are affected
- Risks
- Whether backend/CMS changes may be required

---

# 9. Preserve Existing Business Logic

Do not invent new business logic.

Examples:

Do not assume:

- Points conversion rate
- Reward eligibility
- Membership tier rules
- Referral rules
- Credit rules
- Voucher stacking
- Product pricing model
- Delivery rules
- Pickup rules
- Payment methods
- Order statuses

If the rule is unknown, mark it as:

`To Verify`

or document the dependency.

---

# 10. Existing CMS Rule

Mr Pork administrative operations are controlled by the existing in-house CMS.

The CMS UI is outside the current App design scope.

AI assistants must not:

- Design a new Admin Portal unless explicitly requested
- Duplicate CMS management features inside the Customer App
- Assume CMS fields that are not documented
- Change CMS logic casually

When an App screen depends on CMS data, document the dependency.

Example:

```text
CMS Dependency:
- Promotion title
- Image
- Start date
- End date
- Eligibility
- Status
```

---

# 11. Staff Membership POS Rule

The Staff Membership POS is separate from the Customer App.

It is not the store's cashier/accounting POS.

Its role is primarily membership-related.

AI assistants should only include Staff POS details when they affect:

- Member QR
- Member verification
- Points
- Reward redemption
- Membership transactions

Do not expand Staff POS into a full retail POS unless explicitly requested.

---

# 12. Design Explorer Rule

The Design Explorer uses:

**Parent → Child → Sub-child → Screen / Review View → State**

This hierarchy exists for design review.

It does not automatically define the real App navigation.

Never assume:

```text
Design Explorer parent = Bottom Navigation item
```

or:

```text
Sub-child = User-facing navigation level
```

These are different systems.

---

# 13. Screen ID Rule

Use the existing Screen ID convention.

Examples:

```text
MP-HOME-001
MP-MEMBER-002
MP-REWARD-003
MP-ORDER-004
```

Do not rename existing stable Screen IDs without a strong reason.

When adding a new screen:

1. Check `SCREEN-INVENTORY.md`.
2. Reuse an existing ID if the screen already exists.
3. Create a new ID only if it is genuinely a new screen.

---

# 14. Screen State Rule

Do not create unnecessary separate screens for simple states.

Example:

Prefer:

```text
MP-MEMBER-002
Member Card
States:
- Active
- QR Refreshing
- QR Error
```

instead of creating three unrelated screen identities.

Create a separate screen ID only when the flow or structure is materially different.

---

# 15. Reuse Existing Components

Before creating a new component:

1. Check the current design system.
2. Check whether an existing component already solves the problem.
3. Check whether a variant is sufficient.
4. Only create a new component when necessary.

Avoid duplicate components such as:

```text
RewardCard
MyRewardCard
RewardWalletCard
RewardCardNew
RewardCardV2
```

unless they represent genuinely different reusable patterns.

---

# 16. No Arbitrary Design Tokens

Do not invent random values for:

- Colors
- Font sizes
- Spacing
- Radius
- Shadows
- Breakpoints
- Icon sizes

Use approved tokens when available.

If visual tokens have not yet been finalized, preserve the existing approved visual direction and mark unresolved values for review.

Do not create placeholder values and accidentally establish them as permanent standards.

---

# 17. Master Component Protection

A Master component can affect many screens.

Before changing one:

1. Identify the component.
2. Identify affected screens.
3. Explain why the change is needed.
4. Propose the change.
5. Obtain approval.
6. Update all affected designs consistently.
7. Update documentation.

Do not change a Master component as a side effect of fixing one page.

---

# 18. Navigation Protection

Primary navigation is a high-impact product decision.

Do not:

- Add a new main tab
- Remove a main tab
- Rename primary navigation
- Move QR into or out of primary navigation
- Change Account/Profile structure
- Change Shop/Rewards/Orders placement

without explicit approval.

When reviewing navigation, provide a proposal first.

---

# 19. Content Naming Consistency

Do not casually mix different labels for the same feature.

Examples:

Avoid mixing:

- Account
- Profile
- Me

Avoid mixing:

- Rewards
- Vouchers
- Benefits

Avoid mixing:

- Member Card
- Membership Card
- QR Card

Use the currently approved terminology.

If terminology is unresolved, record it as an open decision.

---

# 20. Mobile-First Rule

The Customer App is primarily mobile.

When designing a screen:

1. Solve the mobile experience first.
2. Reuse the same information architecture for tablet.
3. Adapt layout rather than inventing a different product.

Do not design the App like a desktop website.

---

# 21. Tablet Rule

Tablet may use:

- Wider layouts
- Larger grids
- Side-by-side content where useful
- More whitespace

But it should preserve:

- Same feature structure
- Same component system
- Same screen identity
- Same business logic

Do not create tablet-only UX without a clear reason.

---

# 22. UI Preview Rule

When building a Design Explorer preview:

- Show the actual selected screen
- Preserve the selected state
- Preserve the selected device
- Show breadcrumb
- Show Design Info
- Avoid fake UI unrelated to the approved design

The preview should help the owner and programmer inspect real UI decisions.

---

# 23. Description Requirement

Every important reviewable screen should eventually include:

- Screen ID
- Purpose
- User goal
- Primary action
- Secondary actions
- Entry point
- Exit / next action
- Data dependency
- Business rules
- Important states
- Status
- Notes

Do not rely on visuals alone.

---

# 24. Existing Design Import Rule

When importing an old Mr Pork design:

1. Do not redesign it immediately.
2. Map it to the correct Screen ID.
3. Mark it `Reference`.
4. Add it to the correct Design Explorer hierarchy.
5. Record known states.
6. Record inconsistencies.
7. Record missing states.
8. Review it with the owner.
9. Only then create an improved Draft if needed.

The import phase is not the redesign phase.

---

# 25. Duplicate Design Rule

If multiple versions exist:

```text
Home
Home New
Home Final
Home Final 2
Home Latest
```

do not guess which one is authoritative.

Compare:

- Repository documentation
- Approval history
- Current product requirements
- Owner confirmation

Old filenames are not authoritative.

---

# 26. Coding Rule

When the repository contains UI prototype code:

- Preserve shared components
- Preserve design tokens
- Avoid duplicating CSS
- Avoid page-specific hacks where reusable patterns exist
- Keep screen-specific logic scoped
- Keep reusable logic in shared files
- Avoid large unrelated refactors during a UI task

A visual change should not trigger a broad codebase rewrite unless required.

---

# 27. CSS Rule

Prefer:

- Shared tokens
- Shared utility classes where appropriate
- Shared component styles
- Clear naming
- Predictable responsive behavior

Avoid:

- Repeated inline styles
- Random hard-coded values
- Duplicate classes for the same component
- Global selectors that accidentally affect unrelated screens

---

# 28. JavaScript Rule

Use JavaScript only when necessary for:

- Interaction
- State changes
- Preview controls
- Design Explorer navigation
- Component behavior

Do not add complex frameworks or dependencies without a clear requirement.

---

# 29. Dependency Rule

Before adding a new package or external dependency:

1. Explain why it is needed.
2. Check whether the same result can be achieved with the existing stack.
3. Consider maintenance cost.
4. Consider bundle / implementation impact.
5. Obtain approval for significant dependencies.

Do not add packages just because they are convenient.

---

# 30. File Change Discipline

For each task, modify only the files required.

Before finishing, the AI assistant should summarize:

- Files changed
- What changed
- Why
- Any open issue
- Any decision that still requires approval

Avoid touching unrelated files.

---

# 31. Documentation Update Rule

When an approved change affects repository truth, update the relevant documentation.

Examples:

Navigation change:

- Update `APP-STRUCTURE.md`
- Update affected screen inventory entries

New screen:

- Update `SCREEN-INVENTORY.md`
- Update Design Explorer hierarchy
- Add screen specification when required

Global component change:

- Update `DESIGN-SYSTEM.md`

Do not allow implementation and documentation to silently drift apart.

---

# 32. Approval Language

AI assistants should use clear status language.

Good:

```text
Proposal
Draft
Ready for review
Approved
Master
```

Avoid ambiguous language such as:

```text
This is now final.
```

unless the owner has explicitly approved it.

---

# 33. AI Design Workflow

Preferred workflow:

```text
Read Repository Context
        ↓
Understand Task Scope
        ↓
Inspect Existing Design
        ↓
Identify Problems
        ↓
Propose UX/UI Direction
        ↓
Owner Approval
        ↓
Create Draft
        ↓
Owner Review
        ↓
Revise
        ↓
Owner Approval
        ↓
Promote to Master
        ↓
Prepare Programmer Handoff
```

Do not skip directly from:

```text
Existing Design
```

to:

```text
Master Redesign
```

without review.

---

# 34. When AI May Proceed Without Extra Approval

AI may usually proceed directly when the task is clearly implementation-level and does not alter product/design intent.

Examples:

- Fix broken alignment to match Master Design
- Correct a typo
- Apply an already approved token
- Add an already specified empty state
- Fix a responsive bug
- Refactor duplicated code without changing UI behavior
- Update documentation to reflect an already approved decision

---

# 35. When AI Must Propose First

AI should propose first for:

- New feature
- New navigation
- New module
- New business flow
- New design language
- Global component change
- Major layout redesign
- New membership mechanic
- New reward mechanic
- Checkout flow change
- Major information hierarchy change
- New external dependency
- Backend/CMS behavior assumption

---

# 36. Open Question Handling

If required information is missing:

Do not invent it.

Use one of these approaches:

```text
To Verify
```

```text
Open Question
```

```text
Backend Dependency Unknown
```

```text
CMS Rule Required
```

Continue with everything that can be safely completed without guessing.

---

# 37. Programmer Handoff Protection

Programmers should normally implement from:

- Master Design
- Approved specification
- Approved Design System
- Approved user flow
- Approved handoff notes

Do not hand off:

- Reference screens
- Draft alternatives
- Unapproved experimental UI

without clearly labeling them.

---

# 38. Git and Commit Guidance

Keep commits focused.

Prefer one logical change per commit.

Examples:

```text
Add Mr Pork AI workflow rules
```

```text
Add Membership screen specifications
```

```text
Refine Member Card approved layout
```

Avoid vague commit titles such as:

```text
update
changes
fix stuff
new design
```

Commit descriptions should explain the scope where useful.

---

# 39. Prohibited AI Behaviors

AI assistants must not:

- Redesign the whole App without being asked
- Replace approved UI because another style seems more modern
- Invent new brand colors
- Invent business rules
- Invent CMS capabilities
- Convert Staff Membership POS into a cashier POS
- Treat Design Explorer hierarchy as actual App navigation
- Rename established screens casually
- Delete old reference designs before review
- Promote Draft to Master without approval
- Change multiple unrelated modules in one task
- Add unnecessary dependencies
- Ignore repository documentation
- Use historical screenshots as the highest source of truth
- Rewrite working architecture solely for stylistic preference

---

# 40. Preferred AI Behavior

AI assistants should:

- Be conservative with approved design
- Be ambitious in proposals, but explicit that they are proposals
- Explain impact before global changes
- Reuse components
- Keep documentation current
- Preserve traceability
- Keep screen IDs stable
- Keep design status visible
- Make programmer handoff clearer
- Reduce ambiguity rather than create more variations

---

# 41. Claude Code Integration

When Claude Code is connected to this repository, it should be instructed to follow this file and the repository source-of-truth hierarchy.

A future root-level `CLAUDE.md` should act as a short operational entry point.

`CLAUDE.md` should not duplicate the entire repository documentation.

Instead, it should tell Claude Code:

- What files to read first
- Where the Master Design rules live
- How approval works
- What it must not change without permission
- How to scope each task

The detailed rules remain in this file.

---

# 42. Future AGENTS.md

If the repository later uses multiple AI coding assistants, a root-level `AGENTS.md` may be added.

Its purpose should be similar to `CLAUDE.md` but vendor-neutral.

Recommended approach:

```text
AGENTS.md
→ Short AI entry point

AI-GUIDELINES.md
→ Full AI operating rules
```

This avoids duplicating large rule sets.

---

# 43. Current Repository Baseline

At this stage, AI assistants should consider these files foundational:

```text
PROJECT.md
APP-STRUCTURE.md
SCREEN-INVENTORY.md
DESIGN-EXPLORER.md
DESIGN-SYSTEM.md
AI-GUIDELINES.md
```

These establish enough context to safely begin importing and reviewing existing Mr Pork App designs.

---

# 44. Next Step

After adding this file:

1. Add a short root-level `CLAUDE.md`.
2. Connect Claude Code to the repository.
3. Import the existing Mr Pork designs.
4. Map each design to `SCREEN-INVENTORY.md`.
5. Mark imported designs as `Reference`.
6. Begin review with Home / Main Navigation / Membership.
7. Only redesign after review and approval.

Claude Code should enter the project **after** these rules exist, not before.

# Mr Pork App — Project Overview

## 1. Project Name

**Mr Pork**

Mr Pork is a retail and membership ecosystem built around pork products, customer membership, rewards, promotions, purchases, and in-store customer engagement.

---

# 2. Product Ecosystem

The Mr Pork ecosystem currently consists of:

1. **Customer App**
2. **Staff Membership POS**
3. **Existing In-House CMS**

Each system serves a different purpose.

The existing CMS is already developed and will be used to manage administrative data and operations.

This design repository does **not** include a separate Admin Portal design.

---

# 3. Customer App

The Customer App is the main consumer-facing mobile application.

Its purpose is to allow customers to:

- Create and manage a Mr Pork account
- Access their digital membership
- Display their Member QR Code
- View membership points
- View points history
- Discover available rewards
- Redeem rewards
- View promotions
- Browse Mr Pork products
- Search products
- View product details
- Add products to cart
- Place orders where ecommerce is supported
- View current and previous orders
- Reorder previous purchases
- Receive relevant notifications
- Manage personal information
- Manage saved addresses
- Contact Mr Pork
- Access support information

The Customer App should remain easy to understand even for users who are not highly familiar with mobile apps.

---

# 4. Staff Membership POS

The Staff Membership POS is an internal tool used by Mr Pork staff.

It is **not** intended to replace the store's existing cashier or accounting POS system.

Its primary purpose is membership-related operations.

Staff may use it to:

- Scan a customer's Member QR Code
- Search for a member
- Verify membership
- Record qualifying purchases
- Add or adjust points where authorized
- Redeem eligible rewards
- Check reward eligibility
- View basic member information required for service
- View transaction or membership activity where permitted

The Staff Membership POS must remain operationally simple and fast.

Customer-facing ecommerce functions should not be added to this system unless specifically approved.

---

# 5. Existing In-House CMS

Administrative management for Mr Pork is handled through the company's existing CMS.

The CMS is **not part of the current App UI design scope**.

The Customer App and Staff Membership POS may depend on data and settings managed through the CMS.

Examples may include:

- Members
- Membership settings
- Points rules
- Rewards
- Promotions
- Products
- Product categories
- Orders
- Notifications
- Campaigns
- Staff permissions
- Reports
- System settings

During App design, CMS-related requirements should only be documented when they affect:

- App functionality
- Required data
- User states
- Business rules
- API requirements
- Staff workflows

Do not redesign the CMS unless explicitly requested.

---

# 6. Current Design Scope

The current design project focuses primarily on the:

## Mr Pork Customer App

The goal is to create a complete and organized App Design System and screen specification that can be handed to programmers for implementation.

The design repository acts as the **single source of truth** for the approved Customer App design.

The Staff Membership POS may also be documented where its flow directly interacts with the Customer App membership system.

The existing CMS remains outside the primary UI design scope.

Old Figma files, screenshots, HTML prototypes, or previous concepts should be treated as references until reviewed and approved again.

---

# 7. Customer App Core Modules

The Customer App is currently organized into the following potential modules:

1. App Foundation
2. Authentication
3. Home
4. Shop
5. Product
6. Cart
7. Checkout
8. Membership
9. Rewards
10. Promotions
11. Orders
12. Notifications
13. Account
14. Support
15. System States

These modules are not automatically considered final.

The final structure should be reviewed against the existing Mr Pork design before implementation.

---

# 8. Navigation

The Customer App navigation should be finalized only after the existing App design and product requirements have been reviewed.

Navigation decisions should consider:

- Frequency of use
- Membership importance
- Shopping flow
- Order access
- Rewards access
- Account management
- Number of primary destinations
- Ease of use on mobile

Do not finalize or redesign the primary navigation without approval.

---

# 9. Membership Experience

Membership is one of the most important parts of the Mr Pork Customer App.

A typical membership journey may include:

1. Customer registers an account
2. Customer becomes a Mr Pork member
3. Customer receives a digital membership identity
4. Customer opens Member QR Code
5. Staff scans the Member QR Code
6. Purchase activity is linked to the member
7. Customer receives eligible points
8. Customer checks points and rewards
9. Customer redeems available rewards
10. Customer continues engaging with Mr Pork

The App should make this journey simple and obvious.

The Customer App, Staff Membership POS, and existing CMS must use consistent membership rules and data.

---

# 10. System Responsibilities

Each system should maintain a clear responsibility.

## Customer App

Used by customers for:

- Membership
- Shopping
- Rewards
- Promotions
- Orders
- Account management
- Customer-facing features

## Staff Membership POS

Used by staff for:

- Member identification
- QR scanning
- Points-related operations
- Reward redemption
- Membership-related store operations

## Existing CMS

Used internally for:

- Managing content
- Managing business rules
- Managing products
- Managing promotions
- Managing rewards
- Managing members
- Managing orders
- Managing operational settings
- Administrative reporting and control

Avoid duplicating CMS functionality inside the Customer App or Staff Membership POS unless there is a clear operational need.

---

# 11. Product Principles

The Mr Pork App should follow these principles:

## Simple

Important actions should be easy to find.

Avoid unnecessary complexity.

---

## Fast

Common actions should require as few steps as reasonably possible.

Examples:

- Opening Member QR
- Checking points
- Viewing rewards
- Finding an order
- Searching for products

---

## Clear

Users should always understand:

- Where they are
- What they can do
- What happens after an action
- Whether an action succeeded or failed

---

## Consistent

Reusable UI patterns should be used throughout the App.

Do not redesign the same component differently on different screens without a clear reason.

---

## Membership First

Mr Pork is not only an ecommerce App.

Membership, loyalty, rewards, and repeat customer engagement are core product functions.

---

## Implementation Friendly

Design decisions should consider real implementation constraints.

The design should avoid unnecessary visual complexity that provides little user value but significantly increases development cost.

---

# 12. Device Strategy

The Customer App should be designed primarily for mobile devices.

The design system should support different mobile screen sizes without creating completely different interfaces.

Responsive behavior must be documented where required.

Tablet support may be considered where appropriate.

The Customer App is not intended to behave like a desktop web application.

---

# 13. Screen Documentation Model

All App screens should eventually follow this structure:

**Module → Screen → State → Device**

Example:

Membership  
→ Member Home  
→ Default State  
→ Mobile

Membership  
→ Points History  
→ Empty State  
→ Mobile

Orders  
→ Order Detail  
→ Completed  
→ Mobile

This prevents design files from becoming a collection of disconnected screenshots.

---

# 14. CMS Dependency Documentation

When a Customer App feature depends on CMS-managed information, document the dependency inside the relevant feature specification.

Example:

**Promotion Detail**

CMS provides:

- Promotion title
- Cover image
- Description
- Start date
- End date
- Eligibility
- Terms and conditions
- Status

The App determines:

- Presentation
- Interaction
- Customer state
- Empty/error/loading states

This repository should describe what the App requires from the CMS without redesigning the CMS itself.

---

# 15. Design Approval Workflow

The official workflow is:

**Problem / Requirement**

↓

**UX Discussion**

↓

**UX Proposal**

↓

**Owner Approval**

↓

**UI Design / Prototype**

↓

**Owner Approval**

↓

**Master Design**

↓

**Programmer Implementation**

An AI coding or design assistant may propose changes, but proposals do not automatically become approved design.

---

# 16. Master Design Rule

Only approved designs are considered part of the **Master Design**.

The following are NOT automatically considered Master Design:

- Old screenshots
- Previous Figma versions
- AI-generated alternatives
- Experimental prototypes
- Developer interpretations
- Unapproved UI changes

If there is a conflict, the latest approved Master Design and project documentation take priority.

---

# 17. Change Control

Do not modify unrelated screens while working on a specific feature.

Example:

If the task is to improve the Membership QR screen, do not automatically redesign:

- Home
- Shop
- Orders
- Navigation
- Typography
- Global colors

Any global change must first be discussed and approved.

---

# 18. Repository Purpose

This repository exists to preserve:

- Product structure
- UX decisions
- Design rules
- Design system
- Approved screens
- Screen states
- User flows
- CMS dependencies
- Programmer handoff information
- Historical design decisions where useful

It should allow a designer, AI assistant, or programmer to understand the Mr Pork App without relying entirely on previous conversations.

---

# 19. Source of Truth Priority

When information conflicts, use the following priority:

1. Latest approved Master Design
2. Current repository documentation
3. Approved screen specifications
4. Approved prototype
5. Previous design files
6. Historical references

Do not assume older material is still correct.

---

# 20. Current Project Stage

Current status:

**App design consolidation and redesign preparation**

The existing Mr Pork website is largely completed.

The current objective is to organize and finalize the Mr Pork Customer App design so that it can be clearly reviewed, maintained, and handed to programmers.

The work should proceed module by module rather than redesigning the entire App at once.

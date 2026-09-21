# Mr Pork App — App Structure

**Document:** `APP-STRUCTURE.md`  
**Status:** Draft Structural Baseline  
**Primary Scope:** Customer App  
**Related Scope:** Staff Membership POS touchpoints  
**Out of Scope:** Existing In-House CMS UI design

---

# 1. Purpose

This document defines the structural organization of the Mr Pork Customer App.

It is intended to give designers, AI assistants, and programmers a shared understanding of:

- App modules
- Screen hierarchy
- Screen naming
- Major screen states
- Navigation relationships
- Membership touchpoints
- Shopping and order flows
- CMS dependencies at a structural level
- Staff Membership POS touchpoints where they affect the customer journey

This document is a structural reference.

It does **not** automatically approve a new visual design or replace the latest approved Master Design.

---

# 2. Important Structural Rule

The Mr Pork App has existing design work from earlier stages.

Previous structures have included combinations such as:

- Home
- Shop
- Promotion
- Membership
- Orders
- Favorites
- Cart
- Notifications
- Profile
- Support

Earlier membership-focused concepts also included:

- Home
- Rewards
- Member Card
- Purchase History
- Profile

These should be treated as **existing design references**.

The purpose of the current consolidation is to organize the full product before deciding whether any navigation or screen hierarchy should change.

Do not assume that a proposed new structure is approved simply because it appears in this document.

---

# 3. Product Systems

The Mr Pork ecosystem currently includes:

## 3.1 Customer App

Used by Mr Pork customers.

This is the primary focus of this design repository.

## 3.2 Staff Membership POS

Used by staff for membership-related operations such as:

- Scanning Member QR Codes
- Searching members
- Recording qualifying purchases
- Awarding points according to authorized rules
- Checking reward eligibility
- Validating or redeeming rewards

It does not replace the store's cashier or accounting POS.

## 3.3 Existing In-House CMS

Used to manage administrative and operational data.

The CMS UI is outside the scope of this repository.

The App may consume CMS-managed data such as:

- Products
- Categories
- Promotions
- Rewards
- Membership rules
- Members
- Orders
- Notifications
- Campaigns
- Settings

---

# 4. Customer App Information Architecture

The Customer App is organized into the following structural modules.

1. App Foundation
2. Authentication
3. Home
4. Shop
5. Product
6. Favorites
7. Cart
8. Checkout
9. Membership
10. Rewards
11. Promotions
12. Orders
13. Notifications
14. Account
15. Support
16. System States

Some modules may eventually appear as tabs, nested screens, contextual actions, or account sections.

A module does not automatically require a primary navigation item.

---

# 5. Module 01 — App Foundation

## 5.1 Splash

Purpose:

- Brand entry point
- Initial app loading
- Session restoration
- Initial configuration retrieval

Potential states:

- Default
- Loading
- Startup error

---

## 5.2 App Update

Potential states:

- Optional update
- Required update

---

## 5.3 Maintenance

Potential states:

- Scheduled maintenance
- Temporary service unavailable

---

## 5.4 Connectivity

Potential states:

- Offline
- Connection restored
- Retry

---

# 6. Module 02 — Authentication

## 6.1 Welcome / Entry

Possible actions:

- Log in
- Register
- Continue into public areas where permitted

---

## 6.2 Register

Typical flow:

Register  
→ Verify OTP  
→ Complete Profile  
→ Membership Created  
→ Welcome / Reward State  
→ Home

Potential screens:

- Registration
- OTP Verification
- Complete Profile
- Registration Success

Potential states:

- Invalid phone/email
- Existing account
- Incorrect OTP
- Expired OTP
- Resend OTP
- Loading
- Error

---

## 6.3 Login

Potential methods depend on the final implementation.

Potential screens:

- Login
- OTP Verification
- Login Success / Redirect

Potential states:

- Invalid credentials
- Account not found
- OTP error
- Loading
- Error

---

## 6.4 Account Recovery

Potential screens:

- Forgot / Recover Account
- Verification
- Recovery Success

---

# 7. Module 03 — Home

Home is the primary customer dashboard.

It should provide fast access to the most important Mr Pork actions without becoming a collection of every feature.

Potential sections may include:

- Member summary
- Credit balance
- Point balance
- Available vouchers
- Member QR shortcut
- Rewards shortcut
- Promotions
- Featured products
- Product categories
- Order status
- Quick actions
- Notices or announcements

Previously defined membership assets include:

- Credit Balance
- Point Balance
- Available Voucher

These assets should remain structurally reusable even if their visual presentation changes.

---

## 7.1 Home — Guest State

Possible content:

- Login / Register prompt
- Products
- Promotions
- Public store information
- Membership benefits introduction

---

## 7.2 Home — Member State

Possible content:

- Member identity
- Membership assets
- QR access
- Reward status
- Promotions
- Shopping shortcuts
- Active order status

---

## 7.3 Home — Special States

Potential states:

- No rewards
- No promotions
- No active orders
- Loading
- Partial content failure
- Offline

---

# 8. Module 04 — Shop

Shop contains product discovery and browsing.

---

## 8.1 Shop Home

Possible content:

- Product categories
- Featured products
- Promotions
- Search
- Recently viewed
- Favorites shortcut

---

## 8.2 Product Categories

Potential screens:

- Category List
- Category Detail
- Subcategory where required

---

## 8.3 Product Listing

Potential controls:

- Search
- Category filter
- Availability
- Sort
- Promotion indicator

Do not add filters that are not supported by real product data.

---

## 8.4 Product Search

Potential states:

- Search entry
- Search results
- No results
- Recent searches
- Suggested results

---

# 9. Module 05 — Product

## 9.1 Product Detail

Potential content:

- Product name
- Product image
- Product description
- Price
- Weight or selling unit
- Availability
- Promotion
- Quantity
- Favorite action
- Add to Cart
- Related information

Mr Pork product pricing may involve weight-based products.

The UI must clearly distinguish:

- Display unit
- Selling unit
- Estimated or fixed price where relevant
- Final payable amount where the business workflow requires it

Exact pricing logic must follow the actual backend and store process.

---

## 9.2 Product States

Potential states:

- Available
- Low stock
- Out of stock
- Promotion active
- Promotion ended
- Product unavailable

---

# 10. Module 06 — Favorites

Favorites existed in previous Mr Pork App planning.

It should be preserved in the structural inventory until the existing design is reviewed.

Potential screens:

- Favorite Products
- Empty Favorites

Potential entry points:

- Product Detail
- Shop
- Account

Favorites do **not** automatically need a primary navigation tab.

---

# 11. Module 07 — Cart

## 11.1 Cart

Potential content:

- Product items
- Product unit / weight
- Quantity
- Price
- Promotion adjustment
- Remove item
- Edit item
- Voucher or reward entry point where applicable
- Subtotal
- Checkout action

---

## 11.2 Cart States

Potential states:

- Active cart
- Empty cart
- Product unavailable
- Price changed
- Quantity changed
- Promotion expired
- Loading
- Error

Cart is normally a contextual shopping destination and does not automatically require a permanent bottom navigation item.

---

# 12. Module 08 — Checkout

Checkout should only contain steps required to complete an order.

Potential stages:

1. Review Order
2. Fulfilment Method
3. Address / Outlet
4. Voucher / Reward
5. Payment
6. Confirm Order
7. Order Success

The exact flow depends on the approved Mr Pork ordering model.

---

## 12.1 Fulfilment

Potential methods may include:

- Delivery
- Pickup

Only methods supported by the actual business should appear.

---

## 12.2 Address

Potential screens:

- Select Address
- Add Address
- Edit Address

---

## 12.3 Voucher / Reward

Potential actions:

- View eligible vouchers
- Apply voucher
- Remove voucher

Points or rewards should not be treated as direct payment unless the business rules explicitly support it.

---

## 12.4 Payment

Potential states:

- Payment method selection
- Processing
- Successful
- Failed
- Cancelled

---

## 12.5 Order Confirmation

Potential content:

- Order number
- Order summary
- Payment status
- Fulfilment status
- Next action
- View Order

---

# 13. Module 09 — Membership

Membership is a core Mr Pork product function.

It should remain easy to access even if it is not a permanent navigation tab.

---

## 13.1 Membership Home

Potential content:

- Member name
- Member ID
- Membership status
- Tier where applicable
- Credit Balance
- Point Balance
- Available Voucher
- Member QR
- Points History
- Rewards
- Membership benefits

---

## 13.2 Member Card

Potential content:

- Digital member identity
- Member QR Code
- Member ID
- Member name
- Tier where applicable

Potential states:

- Active
- QR refreshing
- QR expired
- Unable to load QR
- Account restricted

---

## 13.3 Member QR Flow

Customer:

Membership  
→ Member Card / QR  
→ Present QR to Staff

Staff Membership POS:

Scan QR  
→ Member Found  
→ Verify Member  
→ Record Eligible Purchase or Reward Action

Customer:

Transaction processed  
→ Updated points / reward state  
→ Membership history updated

---

## 13.4 Points

Potential screens:

- Points Summary
- Points History
- Points Transaction Detail

Potential transaction types may include:

- Points earned
- Points redeemed
- Adjustment
- Expiry

Exact terminology and rules must come from the membership backend/business rules.

---

## 13.5 Membership Tier

Only use this module if tier functionality is active.

Potential content:

- Current tier
- Tier benefits
- Progress
- Qualification rules

---

## 13.6 Credit Balance

Previous Mr Pork design work included Credit Balance as a member asset.

If enabled, potential screens include:

- Credit Balance
- Credit History
- Credit Transaction Detail

The credit system must follow the actual CMS/backend rules.

---

# 14. Module 10 — Rewards

Rewards are part of the membership ecosystem.

Previous Mr Pork planning included:

- Reward List
- Reward Detail
- Redemption Confirmation
- My Rewards

---

## 14.1 Rewards Home

Potential sections:

- Available Rewards
- My Rewards
- Expiring Rewards
- Redeemed / Used

---

## 14.2 Reward Detail

Potential content:

- Reward name
- Image
- Points requirement
- Eligibility
- Validity
- Terms
- Redeem action

---

## 14.3 Reward Redemption

Typical customer flow:

Reward Detail  
→ Redeem  
→ Confirmation  
→ Reward Issued  
→ My Rewards

Potential redemption mechanism:

My Reward  
→ Voucher / Reward QR  
→ Staff Membership POS validates  
→ Redeemed / Used state

---

## 14.4 Reward States

Potential states:

- Available
- Locked
- Redeemable
- Redeemed
- Used
- Expired
- Unavailable

---

## 14.5 Welcome Reward

Previous Mr Pork membership planning included a welcome benefit after successful registration.

If still active:

Registration Success  
→ Welcome Reward  
→ Reward Detail / Wallet

The actual benefit and eligibility must be CMS-controlled.

---

## 14.6 Birthday Reward

Birthday reward was included in earlier membership planning.

Keep it as a supported structural concept until reviewed.

---

## 14.7 Referral

Referral was included in earlier planning.

Previous direction:

- New member receives the applicable welcome benefit according to the campaign rules.
- Referrer reward becomes eligible after the referred member completes the qualifying first order.

This feature should only be exposed if it remains part of the approved business scope.

Potential screens:

- Referral Home
- Share Referral
- Referral Status
- Referral Reward

---

# 15. Module 11 — Promotions

## 15.1 Promotion List

Potential categories:

- Current
- Member-only
- Product promotions

Do not create categories unless the CMS supports them.

---

## 15.2 Promotion Detail

CMS may provide:

- Title
- Image
- Description
- Start date
- End date
- Eligibility
- Terms
- Status
- Related product / reward

App handles:

- Presentation
- CTA
- Eligibility state
- Expired state
- Loading / error states

---

## 15.3 Promotion States

Potential states:

- Active
- Upcoming
- Member-only
- Expired
- Unavailable

---

# 16. Module 12 — Orders

Orders includes both active and historical customer orders.

---

## 16.1 Orders Home

Potential sections:

- Current Orders
- Order History

Alternative:

- All
- Ongoing
- Completed
- Cancelled

The final grouping must follow the actual order statuses.

---

## 16.2 Order Detail

Potential content:

- Order number
- Date
- Products
- Quantity / weight
- Pricing
- Voucher / discount
- Payment
- Fulfilment method
- Delivery / pickup information
- Order status
- Receipt / invoice where supported

---

## 16.3 Order Status

Only use backend-supported statuses.

Possible examples include:

- Pending
- Confirmed
- Preparing
- Ready for Pickup
- Out for Delivery
- Completed
- Cancelled
- Failed

These examples are structural only and should not override real backend terminology.

---

## 16.4 Reorder

Previous Mr Pork planning included reorder.

Typical flow:

Order Detail  
→ Reorder  
→ Cart  
→ Resolve unavailable / changed products  
→ Checkout

---

## 16.5 Order Tracking

If delivery tracking is supported:

Order Detail  
→ Tracking

Do not design live tracking unless the delivery system can provide the necessary data.

---

# 17. Module 13 — Notifications

Notifications should centralize customer-facing App notices.

Potential notification types:

- Order
- Reward
- Points
- Promotion
- Membership
- System

Potential screens:

- Notification List
- Notification Detail where required

Potential states:

- Unread
- Read
- Empty
- Loading
- Error

A notification may deep-link to the relevant destination.

Examples:

Promotion notification  
→ Promotion Detail

Order notification  
→ Order Detail

Reward notification  
→ Reward Detail

---

# 18. Module 14 — Account

Account contains personal and account-related management.

---

## 18.1 Account Home

Potential items:

- Profile
- Membership shortcut
- Addresses
- Favorites
- Notifications settings
- Language
- Support
- Legal
- Logout

---

## 18.2 Profile

Potential screens:

- Personal Information
- Edit Profile

Only collect information actually required by the business.

---

## 18.3 Addresses

Potential screens:

- Address List
- Add Address
- Edit Address
- Delete Address Confirmation
- Default Address

Only required if delivery or address-based services are active.

---

## 18.4 Settings

Potential items:

- Notification preferences
- Language
- Privacy-related settings
- App information

---

## 18.5 Logout

Potential flow:

Account  
→ Logout  
→ Confirmation  
→ Logged-out state

---

# 19. Module 15 — Support

Potential screens:

- Help / FAQ
- Contact Mr Pork
- WhatsApp or supported contact channel
- Terms
- Privacy Policy
- Other customer support information

Support should use real operational contact channels.

---

# 20. Module 16 — System States

System states should be designed consistently across modules.

Required reusable categories include:

## 20.1 Loading

Examples:

- Page loading
- Inline loading
- Button processing
- Skeleton state where appropriate

## 20.2 Empty

Examples:

- No rewards
- No orders
- No favorites
- No notifications
- No search results

## 20.3 Error

Examples:

- General error
- API failure
- Action failed
- Payment failed
- QR failed
- Retry

## 20.4 Offline

Examples:

- No connection
- Cached content where supported
- Retry

## 20.5 Permission / Restricted

Examples:

- Login required
- Member-only
- Account restricted
- Feature unavailable

---

# 21. Navigation — Current Consolidation Status

Primary navigation is **not yet finalized**.

Previous Mr Pork concepts have included different navigation arrangements.

One ecommerce-oriented proposal used:

- Home
- Shop
- Rewards
- Orders
- Profile / Account

An earlier membership-focused proposal used:

- Home
- Rewards
- Member Card / Scan
- History
- Profile

Both remain reference material until the existing App design is reviewed.

Do not change the Master Navigation without owner approval.

---

# 22. Navigation Principles

When the final navigation is reviewed, use these principles:

1. Keep the number of primary destinations limited.
2. Give frequent actions faster access.
3. Keep Member QR easy to reach.
4. Do not give every module a tab.
5. Cart should normally remain contextual.
6. Notifications can normally use a header entry.
7. Favorites can normally live inside Shop or Account.
8. Support can normally live inside Account.
9. Membership may be surfaced through Home, a primary destination, a central action, or Account depending on the approved UX.
10. Navigation changes require review across the entire App.

---

# 23. Core Customer Flows

## 23.1 Registration

Welcome  
→ Register  
→ OTP  
→ Complete Profile  
→ Membership Created  
→ Welcome Reward where applicable  
→ Home

---

## 23.2 Earn Points In Store

Customer opens Member QR  
→ Staff scans Member QR  
→ Staff verifies member  
→ Eligible purchase is recorded  
→ Points are calculated  
→ Staff confirms transaction  
→ Customer points are updated  
→ Points History reflects transaction

---

## 23.3 Redeem Reward In Store

Customer opens Rewards  
→ Selects available reward  
→ Reviews reward  
→ Redeems / activates according to rules  
→ Reward appears in My Rewards  
→ Customer presents reward / QR  
→ Staff validates using Staff Membership POS  
→ Reward becomes Used / Redeemed

---

## 23.4 Browse and Buy

Home / Shop  
→ Category / Search  
→ Product Detail  
→ Add to Cart  
→ Cart  
→ Checkout  
→ Payment  
→ Order Success  
→ Order Detail

---

## 23.5 Reorder

Orders  
→ Order Detail  
→ Reorder  
→ Cart  
→ Resolve changes  
→ Checkout

---

## 23.6 Promotion Conversion

Home / Notification / Promotion List  
→ Promotion Detail  
→ Relevant Product / Reward / Shop destination

---

# 24. Staff Membership POS Touchpoints

The Customer App structure should recognize the following Staff Membership POS interactions.

## 24.1 Scan Member

Staff POS:

Scan Member QR  
→ Member Found  
→ Member Summary

Customer App provides:

- Valid member identity
- QR representation

---

## 24.2 Record Purchase for Points

Staff POS:

Member Found  
→ Enter / receive qualifying purchase value  
→ Point calculation  
→ Confirmation  
→ Success

Customer App reflects:

- Updated points
- New points transaction

---

## 24.3 Redeem Reward

Staff POS:

Scan / select member  
→ Validate reward  
→ Confirm redemption  
→ Success

Customer App reflects:

- Reward status updated
- Reward activity updated

---

# 25. CMS Dependency Principle

The existing CMS controls administrative data and rules.

The App should consume the data it needs without duplicating CMS management functions.

For each feature specification created later, document:

- Required CMS data
- Required API data
- Business rule source
- Customer-visible states
- Staff POS dependency where relevant

Example:

**Reward Detail**

CMS / backend provides:

- Reward ID
- Name
- Description
- Image
- Points cost
- Eligibility
- Validity
- Terms
- Status

Customer App provides:

- Reward presentation
- Customer eligibility state
- Redeem interaction
- Confirmation
- Success / error handling

---

# 26. Screen Naming Convention

Use predictable screen names.

Recommended format:

`[Module] / [Screen] / [State]`

Examples:

- `Membership / Member Card / Default`
- `Membership / Member Card / QR Error`
- `Rewards / Reward Detail / Redeemable`
- `Rewards / My Rewards / Empty`
- `Orders / Order Detail / Completed`
- `Shop / Search Results / No Results`

For filenames or prototype folders, use lowercase kebab-case.

Examples:

- `membership/member-card/default`
- `rewards/reward-detail/redeemable`
- `orders/order-detail/completed`

---

# 27. Screen ID Convention

When detailed screen specifications begin, use stable IDs.

Recommended pattern:

`MP-[MODULE]-[NUMBER]`

Examples:

- `MP-AUTH-001`
- `MP-HOME-001`
- `MP-SHOP-001`
- `MP-PRODUCT-001`
- `MP-CART-001`
- `MP-CHECKOUT-001`
- `MP-MEMBER-001`
- `MP-REWARD-001`
- `MP-PROMO-001`
- `MP-ORDER-001`
- `MP-NOTIFY-001`
- `MP-ACCOUNT-001`
- `MP-SUPPORT-001`

Screen states should not require a completely new ID unless the state represents a materially different flow.

---

# 28. Design Review Status Labels

Use the following labels when organizing screens.

## Reference

Existing / old design kept for review.

## Draft

Current working proposal.

## Review

Ready for owner review.

## Approved

Owner-approved design.

## Master

Approved design incorporated into the current Master Design.

## Deprecated

No longer active but retained for historical reference where useful.

AI assistants and programmers must not treat Reference or Draft screens as approved implementation requirements.

---

# 29. Existing Design Migration Rule

When old Mr Pork App screens are added to this repository:

1. Do not redesign them immediately.
2. Place them under the correct module.
3. Record the screen name.
4. Record known states.
5. Mark them as `Reference`.
6. Identify duplicated or conflicting screens.
7. Identify missing states.
8. Discuss proposed changes.
9. Obtain approval.
10. Only then update them into the Master Design.

This prevents consolidation work from accidentally becoming an uncontrolled redesign.

---

# 30. Next Documentation Step

After this structural baseline is approved, create a detailed:

**SCREEN-INVENTORY.md**

The screen inventory should list every known existing Mr Pork App screen and record:

- Screen ID
- Module
- Screen name
- Existing design available
- Current status
- Main entry point
- Main exit / next action
- Required states
- CMS dependency
- Staff POS dependency
- Notes
- Review decision

The screen inventory should be completed before major navigation redesign or full UI redesign work begins.

# Mr Pork App — Screen Inventory

**Document:** `SCREEN-INVENTORY.md`  
**Status:** Working Inventory  
**Primary Scope:** Customer App  
**Related Scope:** Staff Membership POS touchpoints  
**Out of Scope:** Existing In-House CMS UI design

---

# 1. Purpose

This document is the master inventory of Mr Pork Customer App screens.

It exists to help the team:

- Identify every known or planned screen
- Map old designs into a clean structure
- Detect duplicated screens
- Detect missing states
- Track review and approval status
- Prepare programmer handoff
- Prevent AI assistants from treating unreviewed screens as final

This inventory should be updated whenever a screen is added, removed, merged, renamed, approved, or deprecated.

---

# 2. Status Labels

Use only these labels:

- **Reference** — Existing or old design kept for review
- **Draft** — Current working proposal
- **Review** — Ready for owner review
- **Approved** — Owner-approved
- **Master** — Approved and incorporated into the current Master Design
- **Deprecated** — No longer active
- **To Verify** — We know the screen may exist or be needed, but the existing design has not yet been confirmed

---

# 3. Existing Design Availability

Use these values:

- **Yes** — Existing design confirmed
- **No** — No existing design
- **Partial** — Some design exists but is incomplete
- **To Verify** — Existing files have not yet been reviewed

Do not change `To Verify` to `Yes` until the design has actually been located and reviewed.

---

# 4. Screen Inventory

## 4.1 App Foundation

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-FOUND-001 | Splash | To Verify | To Verify | App launch | Session restore / Auth / Home | Initial startup |
| MP-FOUND-002 | Optional Update | To Verify | To Verify | App startup | Continue / Store | Only if supported |
| MP-FOUND-003 | Required Update | To Verify | To Verify | App startup | App Store / Play Store | Blocking state |
| MP-FOUND-004 | Maintenance | To Verify | To Verify | App startup | Retry | System state |
| MP-FOUND-005 | Offline | To Verify | To Verify | Any network screen | Retry | Reusable state |

---

## 4.2 Authentication

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-AUTH-001 | Welcome / Entry | To Verify | To Verify | First launch / Logged out | Login / Register | Review whether guest access exists |
| MP-AUTH-002 | Register | To Verify | To Verify | Welcome | OTP Verification | |
| MP-AUTH-003 | Registration OTP | To Verify | To Verify | Register | Complete Profile | Include resend / expiry |
| MP-AUTH-004 | Complete Profile | To Verify | To Verify | OTP success | Registration Success | Only required fields |
| MP-AUTH-005 | Registration Success | To Verify | To Verify | Complete Profile | Home / Reward | Membership created |
| MP-AUTH-006 | Login | To Verify | To Verify | Welcome / Account gate | OTP / Home | Final login method to verify |
| MP-AUTH-007 | Login OTP | To Verify | To Verify | Login | Home | If OTP login is used |
| MP-AUTH-008 | Account Recovery | To Verify | To Verify | Login | Verification | |
| MP-AUTH-009 | Recovery Verification | To Verify | To Verify | Recovery | Login / Success | |

---

## 4.3 Home

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-HOME-001 | Home — Member | To Verify | To Verify | Primary navigation | Shop / QR / Rewards / Orders / Promotion | Core dashboard |
| MP-HOME-002 | Home — Guest | To Verify | To Verify | Guest session | Login / Register / Shop | Only if guest mode exists |
| MP-HOME-003 | Home — Loading | No | Draft | Home | Loaded Home | Reusable state |
| MP-HOME-004 | Home — Partial Error | No | Draft | Home | Retry section | For CMS/API partial failures |

Potential Home content to verify against existing design:

- Credit Balance
- Point Balance
- Available Voucher
- Member QR shortcut
- Rewards
- Promotions
- Featured products
- Product categories
- Active orders
- Quick actions

---

## 4.4 Shop

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-SHOP-001 | Shop Home | To Verify | To Verify | Navigation / Home | Category / Search / Product | |
| MP-SHOP-002 | Category List | To Verify | To Verify | Shop | Product Listing | |
| MP-SHOP-003 | Product Listing | To Verify | To Verify | Category / Search | Product Detail | |
| MP-SHOP-004 | Search | To Verify | To Verify | Shop | Search Results | |
| MP-SHOP-005 | Search Results | To Verify | To Verify | Search | Product Detail | |
| MP-SHOP-006 | Search — No Results | No | Draft | Search | Edit search | Missing state to design if needed |

---

## 4.5 Product

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-PRODUCT-001 | Product Detail | To Verify | To Verify | Shop / Search / Promotion | Add to Cart / Favorite | Weight-based pricing logic to verify |
| MP-PRODUCT-002 | Product — Out of Stock | No | Draft | Product Detail | Back / Browse alternatives | State |
| MP-PRODUCT-003 | Product — Unavailable | No | Draft | Deep link / Saved item | Back | State |
| MP-PRODUCT-004 | Product — Promotion Active | To Verify | To Verify | Shop / Promotion | Add to Cart | State may be within Product Detail |

---

## 4.6 Favorites

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-FAV-001 | Favorites | To Verify | To Verify | Account / Shop | Product Detail | Previously included in app planning |
| MP-FAV-002 | Favorites — Empty | No | Draft | Favorites | Browse Shop | |

Favorites should remain in the inventory until the old design is reviewed.

It does not automatically require a primary navigation tab.

---

## 4.7 Cart

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-CART-001 | Cart | To Verify | To Verify | Product / Header | Checkout | |
| MP-CART-002 | Cart — Empty | No | Draft | Cart | Shop | |
| MP-CART-003 | Cart — Item Changed | No | Draft | Cart | Accept update / Remove | Price / stock / quantity changed |
| MP-CART-004 | Cart — Item Unavailable | No | Draft | Cart | Remove / Replace | |

---

## 4.8 Checkout

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-CHECKOUT-001 | Review Order | To Verify | To Verify | Cart | Fulfilment | |
| MP-CHECKOUT-002 | Fulfilment Method | To Verify | To Verify | Review Order | Address / Outlet | Delivery / Pickup only if supported |
| MP-CHECKOUT-003 | Select Address | To Verify | To Verify | Checkout | Payment / Review | |
| MP-CHECKOUT-004 | Add Address | To Verify | To Verify | Address List | Select Address | |
| MP-CHECKOUT-005 | Edit Address | To Verify | To Verify | Address List | Select Address | |
| MP-CHECKOUT-006 | Select Outlet | To Verify | To Verify | Checkout | Payment / Review | If pickup supported |
| MP-CHECKOUT-007 | Apply Voucher / Reward | To Verify | To Verify | Checkout | Review Order | |
| MP-CHECKOUT-008 | Payment Method | To Verify | To Verify | Checkout | Processing | |
| MP-CHECKOUT-009 | Payment Processing | No | Draft | Payment Method | Success / Failed | |
| MP-CHECKOUT-010 | Payment Failed | No | Draft | Payment Processing | Retry / Change method | |
| MP-CHECKOUT-011 | Order Success | To Verify | To Verify | Payment success | Order Detail / Home | |

---

## 4.9 Membership

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-MEMBER-001 | Membership Home | To Verify | To Verify | Home / Account / Navigation | Card / Points / Rewards | |
| MP-MEMBER-002 | Member Card | To Verify | To Verify | Membership / Home | Present QR | Core screen |
| MP-MEMBER-003 | Member QR — Active | To Verify | To Verify | Member Card | Staff scan | May be same screen/state |
| MP-MEMBER-004 | Member QR — Refreshing | No | Draft | Member QR | Active QR | State |
| MP-MEMBER-005 | Member QR — Error | No | Draft | Member QR | Retry | State |
| MP-MEMBER-006 | Points Summary | To Verify | To Verify | Membership / Home | Points History | |
| MP-MEMBER-007 | Points History | To Verify | To Verify | Points Summary | Transaction Detail | |
| MP-MEMBER-008 | Points Transaction Detail | To Verify | To Verify | Points History | Back | |
| MP-MEMBER-009 | Credit Balance | To Verify | To Verify | Membership / Home | Credit History | Existing concept |
| MP-MEMBER-010 | Credit History | To Verify | To Verify | Credit Balance | Transaction Detail | If credit remains active |
| MP-MEMBER-011 | Credit Transaction Detail | To Verify | To Verify | Credit History | Back | |
| MP-MEMBER-012 | Membership Tier | To Verify | To Verify | Membership | Back | Only if tier system exists |
| MP-MEMBER-013 | Membership Benefits | To Verify | To Verify | Membership | Reward / Promotion | |

---

## 4.10 Rewards

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-REWARD-001 | Rewards Home | To Verify | To Verify | Home / Membership / Navigation | Reward Detail | |
| MP-REWARD-002 | Reward Detail | To Verify | To Verify | Rewards | Redeem | |
| MP-REWARD-003 | Redemption Confirmation | To Verify | To Verify | Reward Detail | Redeem Success | |
| MP-REWARD-004 | Redeem Success | To Verify | To Verify | Confirmation | My Rewards | |
| MP-REWARD-005 | My Rewards | To Verify | To Verify | Rewards | Reward Wallet Detail | |
| MP-REWARD-006 | Reward Wallet Detail | To Verify | To Verify | My Rewards | Present QR / Code | |
| MP-REWARD-007 | Reward — Used | No | Draft | My Rewards | Back | State |
| MP-REWARD-008 | Reward — Expired | No | Draft | My Rewards | Back | State |
| MP-REWARD-009 | Rewards — Empty | No | Draft | Rewards | Browse / Back | |
| MP-REWARD-010 | Welcome Reward | To Verify | To Verify | Registration / Rewards | Reward Detail | Existing planning concept |
| MP-REWARD-011 | Birthday Reward | To Verify | To Verify | Rewards / Notification | Reward Detail | Existing planning concept |

---

## 4.11 Referral

Referral existed in earlier Mr Pork planning and should remain visible until reviewed.

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-REFERRAL-001 | Referral Home | To Verify | To Verify | Account / Rewards | Share | Feature to confirm |
| MP-REFERRAL-002 | Share Referral | To Verify | To Verify | Referral Home | Native share | |
| MP-REFERRAL-003 | Referral Status | To Verify | To Verify | Referral Home | Reward Detail | |
| MP-REFERRAL-004 | Referral Reward | To Verify | To Verify | Referral Status | Rewards | |

Do not build this feature unless it remains in approved business scope.

---

## 4.12 Promotions

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-PROMO-001 | Promotion List | To Verify | To Verify | Home / Navigation | Promotion Detail | |
| MP-PROMO-002 | Promotion Detail | To Verify | To Verify | Promotion List / Notification | Product / Reward / Shop | CMS-driven |
| MP-PROMO-003 | Promotion — Expired | No | Draft | Deep link / List | Back | State |
| MP-PROMO-004 | Promotion — Member Only | No | Draft | Promotion Detail | Login / Membership | State |

---

## 4.13 Orders

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-ORDER-001 | Orders Home | To Verify | To Verify | Navigation / Account | Order Detail | |
| MP-ORDER-002 | Current Orders | To Verify | To Verify | Orders | Order Detail | May be a tab/state |
| MP-ORDER-003 | Order History | To Verify | To Verify | Orders | Order Detail | May be a tab/state |
| MP-ORDER-004 | Order Detail | To Verify | To Verify | Orders / Notification | Reorder / Track | |
| MP-ORDER-005 | Reorder Review | To Verify | To Verify | Order Detail | Cart | Only if separate screen required |
| MP-ORDER-006 | Order Tracking | To Verify | To Verify | Order Detail | Back | Only if delivery tracking supported |
| MP-ORDER-007 | Orders — Empty | No | Draft | Orders | Shop | |
| MP-ORDER-008 | Order — Cancelled | To Verify | To Verify | Orders | Reorder / Support | State |
| MP-ORDER-009 | Order — Failed | To Verify | To Verify | Orders | Retry / Support | State |

---

## 4.14 Notifications

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-NOTIFY-001 | Notification List | To Verify | To Verify | Header / Account | Deep-linked destination | |
| MP-NOTIFY-002 | Notification Detail | To Verify | To Verify | Notification List | Relevant destination | Only if detail page needed |
| MP-NOTIFY-003 | Notifications — Empty | No | Draft | Notifications | Back | |

Notification types to verify:

- Order
- Reward
- Points
- Promotion
- Membership
- System

---

## 4.15 Account / Profile

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-ACCOUNT-001 | Account Home | To Verify | To Verify | Navigation | Profile / Addresses / Settings | Previous designs may call this Profile |
| MP-ACCOUNT-002 | Personal Information | To Verify | To Verify | Account | Edit Profile | |
| MP-ACCOUNT-003 | Edit Profile | To Verify | To Verify | Personal Information | Save | |
| MP-ACCOUNT-004 | Address List | To Verify | To Verify | Account / Checkout | Add / Edit Address | |
| MP-ACCOUNT-005 | Add Address | To Verify | To Verify | Address List | Save | |
| MP-ACCOUNT-006 | Edit Address | To Verify | To Verify | Address List | Save | |
| MP-ACCOUNT-007 | Notification Settings | To Verify | To Verify | Account | Save | |
| MP-ACCOUNT-008 | Language | To Verify | To Verify | Account | Apply | Only if multilingual app |
| MP-ACCOUNT-009 | App Information | To Verify | To Verify | Account | Legal / Back | |
| MP-ACCOUNT-010 | Logout Confirmation | No | Draft | Account | Logout / Cancel | |

---

## 4.16 Support

| Screen ID | Screen | Existing Design | Status | Main Entry | Main Exit / Action | Notes |
|---|---|---:|---|---|---|---|
| MP-SUPPORT-001 | Help / FAQ | To Verify | To Verify | Account | FAQ answer / Contact | |
| MP-SUPPORT-002 | Contact Mr Pork | To Verify | To Verify | Account / FAQ | Contact channel | |
| MP-SUPPORT-003 | Privacy Policy | To Verify | To Verify | Account / Registration | Back | May open web page |
| MP-SUPPORT-004 | Terms & Conditions | To Verify | To Verify | Account / Registration | Back | May open web page |

---

# 5. Staff Membership POS Touchpoint Inventory

These are not Customer App screens, but they should be tracked because they directly affect Customer App membership behavior.

| Touchpoint ID | Staff POS Function | Customer App Dependency | Status |
|---|---|---|---|
| MP-POS-001 | Scan Member QR | Member Card / QR | To Verify |
| MP-POS-002 | Member Search | Member account data | To Verify |
| MP-POS-003 | Member Summary | Membership status / balances | To Verify |
| MP-POS-004 | Record Eligible Purchase | Points balance / history | To Verify |
| MP-POS-005 | Points Adjustment | Points balance / history | To Verify |
| MP-POS-006 | Reward Eligibility | Rewards | To Verify |
| MP-POS-007 | Reward Redemption | My Rewards / reward status | To Verify |
| MP-POS-008 | Transaction Success | Customer history refresh | To Verify |

---

# 6. CMS Dependency Categories

The CMS itself is not being redesigned.

For screen review, use these dependency labels where applicable:

- `CMS: Products`
- `CMS: Categories`
- `CMS: Promotions`
- `CMS: Rewards`
- `CMS: Members`
- `CMS: Membership Rules`
- `CMS: Points Rules`
- `CMS: Orders`
- `CMS: Notifications`
- `CMS: Campaigns`
- `CMS: Settings`

These labels should later be added to detailed screen specifications.

---

# 7. Known Structural Questions To Review

These are intentionally unresolved.

## 7.1 Primary Navigation

Previous concepts used different structures.

Do not finalize until the existing App designs are reviewed.

Questions:

- Is Membership a permanent tab?
- Is Rewards a permanent tab?
- Should Orders be primary navigation?
- Should Account be called Account or Profile?
- Does Member QR need a central primary action?
- Does Shop remain a primary destination?

---

## 7.2 Guest Mode

Verify whether users can browse:

- Home
- Products
- Promotions

without logging in.

---

## 7.3 Ecommerce Scope

Verify the current business scope for:

- Delivery
- Pickup
- Online payment
- Weight-based pricing
- Final price calculation
- Order tracking
- Reorder

---

## 7.4 Membership Assets

Confirm which remain active:

- Credit Balance
- Point Balance
- Available Voucher
- Membership Tier
- Welcome Reward
- Birthday Reward
- Referral

---

## 7.5 Rewards Redemption

Confirm whether reward redemption uses:

- Member QR
- Reward-specific QR
- Code
- Staff-side selection
- Another mechanism

---

# 8. Migration Process For Existing Designs

For every old Mr Pork App screen:

1. Locate the existing design.
2. Match it to a Screen ID in this inventory.
3. If no suitable Screen ID exists, add one.
4. Mark `Existing Design` as `Yes` or `Partial`.
5. Mark status as `Reference`.
6. Record any duplicate version.
7. Compare against the latest product requirement.
8. Identify missing states.
9. Discuss UX changes.
10. Only after approval, move the screen to `Approved` and then `Master`.

Do not immediately redraw old screens during the inventory phase.

---

# 9. Duplicate Handling

If multiple old designs exist for the same screen:

Example:

- Home v1
- Home v2
- Home Final
- Home New

Do not assume the file called “Final” is current.

Record all relevant versions under the same Screen ID and determine which version is actually approved.

The repository documentation and latest owner approval take priority over old filenames.

---

# 10. Missing State Review

Every important interactive screen should eventually be checked for:

- Default
- Loading
- Empty
- Error
- Offline
- Success
- Disabled
- Permission required
- Login required
- Expired
- Unavailable

Not every screen needs every state.

Only design states that can realistically occur.

---

# 11. Programmer Handoff Readiness

A screen is not ready for programmer implementation until the following are known:

- Screen ID
- Approved layout
- Main interaction
- Entry point
- Exit / next action
- Required states
- Data requirements
- CMS/API dependency
- Validation rules
- Error behavior
- Responsive/device behavior where applicable

`Approved` alone does not necessarily mean implementation-ready.

Detailed handoff specifications will be documented later.

---

# 12. Next Step

The next step is to bring the existing Mr Pork App designs into the review process.

Recommended order:

1. Home
2. Main Navigation
3. Membership / Member QR
4. Rewards
5. Shop
6. Product
7. Cart / Checkout
8. Orders
9. Notifications
10. Account
11. Support
12. System states

After the existing screens are mapped, create or update:

- `DESIGN-SYSTEM.md`
- `NAVIGATION.md`
- `USER-FLOWS.md`
- Individual screen specifications
- `HANDOFF.md`

The design system should be derived from the actual approved Mr Pork product direction, not invented independently from the existing design.

# Mr Pork Reference UI — Phase 1

**Status:** Reference UI Migration  
**Purpose:** Preserve and organize the existing Mr Pork App UI supplied during the first migration batch.

> Important: These files are **Reference**, not automatically Approved or Master.
> They must not be redesigned or implemented as final UI without review and owner approval.

## Scope included

This batch contains existing UI references for:

- App Foundation / Splash / Launch Promotion
- Home and current 4-tab bottom navigation
- Authentication and Logout
- Notifications
- Legal pages and Network Error
- My Rewards / Voucher redemption
- My Credit / Top-Up / transaction filters
- Shop / Product / Store selection / Pickup checkout
- Delivery address UI as **Future Scope**
- Points reward redemption / rules / exchange records

## Confirmed current navigation reference

The existing UI currently shows a 4-tab bottom navigation:

1. Home
2. Shop
3. Rewards
4. Account

This is a **Reference Navigation**, not yet a newly re-approved Master Navigation.

## Important scope notes

### Delivery

Delivery UI exists in this batch but the feature is **Future Scope**.

Do not implement Delivery as part of the current required scope unless the owner explicitly activates it.

### Existing CMS

Administrative management remains controlled by the existing in-house CMS.

These screenshots do not create a requirement for a separate Admin Portal.

### Staff Membership POS

Reward QR/code and membership-related transaction interactions may connect to the Staff Membership POS.

Do not expand Staff Membership POS into a cashier/accounting POS.

---

# Design Explorer hierarchy for this batch

```text
App Foundation
├── Splash
├── Launch Promotion Interstitial
└── System States
    └── Network Error

Home & Navigation
├── Home — Member
├── Promotion Popup
├── Fulfilment Selector
└── Bottom Navigation
    ├── Home
    ├── Shop
    ├── Rewards
    └── Account

Authentication
├── Login
│   ├── Phone Entry
│   └── OTP
├── Register
│   ├── Registration Form
│   └── OTP
└── Logout Confirmation

Notifications
└── Notification List
    ├── All
    ├── Orders
    ├── Promotions
    └── Announcements
        ├── Unread / Content
        ├── Read
        └── Empty

Rewards
├── My Rewards
│   ├── Valid
│   │   ├── With Rewards
│   │   └── Empty
│   ├── Invalid
│   │   ├── With Rewards
│   │   └── Empty
│   └── Used
│       ├── With Rewards
│       └── Empty
├── Voucher Detail
└── Redemption
    ├── Active QR / Code
    ├── Successful
    └── Failed

Membership
├── Credit
│   ├── My Credit
│   ├── Transaction Type Filter
│   ├── Date Range Filter
│   ├── Credit Description
│   └── Top-Up Credit
│       ├── Payment Method
│       ├── Select Bank
│       ├── Processing
│       └── External Bank Redirect
└── Points
    ├── Point Reward Detail
    │   ├── Redeemable
    │   └── Insufficient Points
    ├── Point Reward Rules
    └── Exchange Records

Shop & Ordering
├── Store Selection
│   ├── Map View
│   └── List View
├── Search Results
├── Product Detail
└── Checkout
    └── Review Order — Pickup

Delivery — Future Scope
├── Delivery Shop
└── Address
    ├── Saved Addresses
    ├── Selected Address
    ├── New Address
    └── Edit Address

Legal
├── Privacy Policy
└── Terms & Conditions
```

---

# Known review items

The following are not errors in this migration package. They are deliberately preserved for later review:

- Reward / Coupon / Voucher terminology is inconsistent.
- `Invalid` reward naming may need a user-friendly replacement.
- Registration requests many fields and may need flow simplification.
- Login shows password/email alternatives whose full flows have not yet been supplied.
- Credit transaction sample values contain possible sign inconsistencies.
- `Pay At Outlet` flow is not yet supplied.
- Payment success / failure / cancellation return screens are not yet supplied.
- Shop uses both `Store` and `Outlet`; terminology should later be unified.
- Product Detail uses both `Add To Cart` and `Place the order`; interaction priority should be reviewed.
- Delivery UI is future scope.
- My Points balance / earning transaction history UI has not yet been supplied.
- Membership / Member Card / Member QR UI has not yet been supplied.
- Orders history / order status UI has not yet been supplied.
- Legal pages still need membership, refund/return, PDPA and other applicable policy screens.

---

# Import rule

When these references are added to the Design Explorer:

1. Keep them as `Reference`.
2. Map each view to its Screen ID where available.
3. Preserve the old UI before redesign.
4. Record problems separately.
5. Create a `Draft` only after review.
6. Promote to `Approved` / `Master` only after explicit owner approval.

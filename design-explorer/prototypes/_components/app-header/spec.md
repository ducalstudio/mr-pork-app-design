# app-header

Status: **Draft / Provisional** (not an approved Design System component).

Greeting or title on the left, one notification action on the right.

- **Variant now:** greeting + bell. **Later:** Account Home adds language and settings actions.
- **Truncation:** one line, ellipsis. The action never shrinks.
- **Hit area:** the action is 44 × 44 even though its glyph is 24.
- **Unread dot:** small dot (no number). Hidden when nothing is unread. The accessible name changes: "Notifications" / "Notifications, unread".
- **Bell icon is a TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET** (`data-asset="temporary-placeholder"`); not approved iconography. Replace when the original icon set is supplied.
- **Destination:** Notifications (recorded in metadata; not navigated in the Draft).
- **Open:** whether the display name and greeting text follow time-of-day rules (`To Verify`).

## Variant back-title (Batch 1)

Back button (`icon-button`) + page title, inside the `app-shell` top band (`app-shell--band` for the tan Reference band; band meaning To Verify). The back glyph lines up with the screen gutter and the title starts 8px after it (Reference: glyph at x 27, title at x 52). Title 20px. The back destination is metadata only; nothing navigates. The back glyph is a TEMPORARY PLACEHOLDER. Other planned variants (`back-search`, `account-actions`) are added at first use.

## Variant account-actions (Batch 2)

No title; actions right-aligned: a text action (language, "EN"), then icon actions (settings, notifications). Each is a 44px hit area. The bell reuses the unread dot. What the language action does is To Verify. Icons are TEMPORARY PLACEHOLDERS.

## Reference-fidelity pass

`back-title`: 43px row, title 20px **regular** (Inter width matches the Reference within 1 to 3%), 9px gap after the glyph. The back glyph is drawn at the Reference size (about 8 x 12, thin) and stays a TEMPORARY PLACEHOLDER. `account-actions`: EN text action 20px / 500.

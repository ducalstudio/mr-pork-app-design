# notification-row

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 2 (Notifications).

Thumb (40px circle placeholder), title, body with optional call-to-action text, and date. The **whole row is one button**; the call-to-action text is plain text inside it (no nested interactive element).

- **Read / unread (Reference evidence, To Verify):** `data-read="true"` uses muted text; unread uses dark text. Thumb and date look the same. A visually hidden "Read." / "Unread." prefix is added for assistive technology.
- **Wrapping:** title and body wrap at word boundaries and inside very long tokens (`overflow-wrap: anywhere`); the date column is `nowrap` and never shrinks. The thumb stays vertically centered as in the Reference.
- **Call-to-action text:** shown at the end of the body line. In the Reference it appears only on the All tab, unread. Its meaning and the row's destination (deep link) are To Verify.
- **Thumb is a TEMPORARY PLACEHOLDER / NOT A SOURCE ASSET** (the Reference shows a solid red disc; it is not reproduced as an icon).
- Single column at every tier (no grid).

## Reference-fidelity pass

- **Content-driven geometry** from the Reference (440): row = 15px padding + the taller of the 40px thumb and the text block; single rows 70px, wrapped row 98px. Title 14px / 17px line, body 12px / 15px line, date 10px, call-to-action 12px.
- **Thumb** is the Reference's solid red disc (`--proto-thumb`, Draft-only role), a marked temporary placeholder.
- **`--narrow` variant** reproduces the Reference's wrapped row (title breaks inside the word at about 66px, body wraps at about 124px in Inter). Which states use it, which show Mark-all and the call-to-action is a per-state matrix in the screen's `states/samples.js`.
- **Call-to-action** is right-aligned with a per-row inset (`--cta-inset`), as measured.

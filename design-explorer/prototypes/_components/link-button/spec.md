# link-button

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 3 (Authentication: Sign Up, Resend code, Contact Us, Use Password login, Use Email Login).

- **Default:** blue underlined text (`--proto-link`, measured `#40a5ff`), matches the Reference's "Sign Up" / "Resend code" / "Contact Us" links.
- **Variant `--muted`:** plain grey text, no underline (`--proto-text-muted`) — the Reference renders "Use Password login" / "Use Email Login" as plain text actions, not styled links; reproduced as measured, not normalized to match the other links.
- Inline element (`<button class="link-button">` inside a text run), never a block action; use `button` for standalone buttons.
- **Tap target:** the Reference text is 13 to 21px tall, under the 44px minimum; `padding: 14px 2px` with a matching negative margin expands the hit area without moving the visible text or affecting line layout (the same technique as the Notifications chip fix).
- **Open (To Verify):** destinations for every link (password login, email login, resend timing/lockout).

# rich-content

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 1 (Privacy Policy, Terms & Conditions).

Reading layout for long text: headings, paragraphs, bulleted and numbered lists. 16px / 1.5 (the Reference sample lines are set tighter; recorded as an intentional Draft difference). Long unbroken strings wrap (`overflow-wrap: anywhere`).

- Reading width comes from the shell column (Legal caps it at 640 on expanded).
- **All content is SAMPLE.** Legal text is supplied by the CMS (`CMS Rule Required`); no policy or term is stated.
- Reuse planned for: Credit Description, Point Reward Rules, voucher T&C (later batches).

## Variant plain (Reference-fidelity pass)

`rich-content--plain`: 16px text on a **19px** line pitch, regular heading, no sample paragraphs invented. Used for the Reference's own filler lines ("xxxxx / x / xx"), kept exactly and marked SAMPLE DATA / NOT BUSINESS RULE (CMS Rule Required). The generic default variant (1.5 line height, semibold headings) is kept for later pages that need it.

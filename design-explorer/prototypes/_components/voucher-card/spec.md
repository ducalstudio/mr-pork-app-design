# voucher-card

Status: **Shared Prototype Component — Draft / Provisional** (not an approved Design System component). First used by: Batch 4 (My Rewards list).

- **Default (Valid tab):** white fill, pink border (measured `#f3b6ba`, `--proto-accent-border`), bold red discount title (24px / 800), subtitle, "Valid Until" meta, terms note, a `button--primary` "Use Now" CTA absolutely positioned bottom-right.
- **Variant `--spent`:** used by Invalid and Used tabs — grey fill (`--proto-chip`), no border, no CTA button, every text colour muted. The Reference removes the action entirely rather than disabling it; reproduced as-is.
- **Measured (Reference, 440 × 956):** card 400 wide, about 174 tall (content-driven), 34px gap between stacked cards, ~22px internal padding.
- **Open (To Verify):** exact terms/valid-until copy is Reference sample data (kept verbatim, marked SAMPLE DATA); what "Invalid" specifically means (expired vs not-yet-eligible) is not defined.

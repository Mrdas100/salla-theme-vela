# VELA — Salla Twilight theme

VELA (ڤيلا) is a commercial, Arabic-first Salla theme for fashion, sportswear, sneakers, and T-shirt stores. It is built on Salla's official Theme Raed/Twilight baseline and adds a distinct editorial-performance visual system, merchant components, and conversion enhancements.

> Project status: V1 foundation. The code builds locally; a Salla Partners development theme and demo store are required for live commerce validation.

## Requirements

- Node.js `^22.18.0` or `>=24.11.0`
- pnpm (the repository pins the package manager)
- Salla Partners account, development theme, and demo store for preview
- Salla CLI for the authenticated preview/publish workflow

## Start locally

```bash
pnpm install
pnpm test
pnpm run development
```

For a minified release build:

```bash
pnpm run production
```

Compiled assets are written to `public/`. Use `pnpm run watch` while developing styles or scripts.

## Connect to Salla

1. Create a development theme from the Salla Partners portal.
2. Connect the theme to this repository using the portal or authenticated Salla CLI.
3. Attach a demo store containing realistic products, variants, brands, offers, and bilingual content.
4. Start the Salla theme preview flow for that development theme.
5. Follow the live checklist in `docs/TESTING.md` before submitting or publishing.

The exact authentication and theme identifiers are account-specific and are intentionally not stored in the repository.

## Project map

```text
docs/
  PRODUCT_SPEC.md       Product, UX, customization, and release scope
  ARCHITECTURE.md       Boundaries, naming, and upgrade strategy
  TESTING.md            Local and live validation checklist
src/
  assets/
    js/                 Twilight page controllers and VELA enhancements
    styles/             Tokens, elements, components, utilities
  locales/              Arabic and English custom strings
  views/
    layouts/            Shared document layouts
    components/         Header, footer, and merchant home components
    pages/              Twilight's fixed page contracts
tests/
  theme-contracts.mjs   Fast structural and accessibility contract checks
twilight.json           Salla feature, setting, and component schema
```

## Custom VELA components

- Drop Hero
- Flash Sale
- Lookbook Mosaic
- FAQ
- Existing Twilight product, brand, video, banner, link, feature, and testimonial components styled as one system

## Quality commands

```bash
pnpm test              # schema and contract checks
pnpm run development   # development assets
pnpm run production    # optimized assets
```

Local tests cannot prove live storefront compatibility. Product APIs, theme editor persistence, store hooks, and real responsive rendering must be verified in a Salla demo store.

## Documentation

- `docs/PRODUCT_SPEC.md`
- `docs/ARCHITECTURE.md`
- `docs/TESTING.md`

## License and commercial release

The baseline is derived from Salla's MIT-licensed Theme Raed. Before commercial release, replace placeholder ownership/support metadata in `twilight.json`, prepare listing assets, and confirm the desired license and support terms for VELA-specific work.


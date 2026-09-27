# Testing guide

## Local checks

```bash
pnpm install
pnpm test
pnpm run production
```

`pnpm test` validates JSON syntax, required Twilight files, custom component paths, locale parity, and accessibility-critical template markers. The production command compiles the assets Twilight serves from `public/`.

## Live preview

Local compilation does not emulate Salla product and store objects. Create a development theme and demo store in Salla Partners, connect this repository, then run the preview flow documented by the installed Salla CLI.

Verify at minimum:

- Arabic RTL and English LTR.
- Home component creation, editing, reordering, hiding, and persistence.
- Empty, one-item, and maximum-item component states.
- Product sale, variants, sizes, colors, out-of-stock, notify availability, gifting, and digital products.
- Category filters, sorting, pagination/infinite loading, and empty search.
- Quick View keyboard order, Escape close, focus containment, and focus restoration.
- Sticky add-to-cart with iOS safe area and software keyboard.
- Recently viewed with storage allowed, denied, and cleared.
- 320px through large desktop widths with no horizontal overflow.

## Release gate

Run the production build, contract tests, live smoke suite, Lighthouse, keyboard pass, and browser matrix before tagging a release. Record measured results in the release notes; do not substitute target scores for measurements.


# VELA architecture

VELA keeps the official Twilight page contracts and extends them in three layers:

1. `twilight.json` is the merchant-facing contract for theme settings and home components.
2. `src/views` contains Twig layouts, fixed Salla pages, and isolated home components.
3. `src/assets` contains design tokens, styles, and progressively enhanced JavaScript.

Custom code uses the `vela-` prefix for CSS classes and custom elements. Native Salla web components remain responsible for data-heavy commerce behavior such as product lists, cart actions, offers, localization, comments, and checkout-facing state.

## Key decisions

- The repository is based on Salla's current official Theme Raed baseline because Twilight page filenames and platform contracts are fixed.
- Custom home sections remain independent Twig components rather than one monolithic homepage.
- Quick View uses product-card data already available to the page and sends complex option selection to the full product page.
- Recently viewed IDs remain in local storage; the UI delegates product fetching and rendering to `salla-products-slider`.
- CSS variables bridge merchant settings into one tokenized visual system.

## Naming

- Theme: `vela`
- CSS: `.vela-*`
- Custom elements: `<vela-*>`
- Browser storage: `vela:*`
- Theme settings: `vela_*`

## Upgrade strategy

Compare upstream Theme Raed releases regularly. Port security, compatibility, and platform changes before visual changes. Keep custom work in prefixed files and small template patches to reduce merge conflicts.


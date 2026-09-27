# Product Spec — VELA / ڤيلا

**Status:** V1 foundation in active development  
**Platform:** Salla Twilight  
**Positioning:** A conversion-minded, editorial storefront for fashion, sportswear, sneakers, and T-shirt brands.

## 1. Product vision

VELA gives growing Saudi and Arabic-first apparel brands the visual confidence of a premium direct-to-consumer store without requiring custom code. It combines bold campaign storytelling with fast product discovery and a restrained system that keeps products—not interface decoration—at the center.

The memorable visual device is the **Drop Rail**: a high-contrast campaign strip used for limited releases, flash sales, and seasonal collections. It can feel athletic or editorial depending on the merchant's palette and photography.

## 2. Audience

### Primary merchants

- Independent fashion and modest-wear labels.
- Sportswear, sneakers, gym apparel, and equipment stores.
- T-shirt, streetwear, print-on-demand, and drop-based brands.
- Multi-brand boutiques that need strong filtering and brand discovery.

### Primary shoppers

- Mobile-first Arabic shoppers in Saudi Arabia and the GCC.
- Shoppers who compare color, size, price, delivery, and returns before purchasing.
- Returning customers who expect quick access to recently viewed and related products.

## 3. Product principles

1. **RTL first, not RTL patched:** layout, direction, icon motion, spacing, and type are designed in Arabic first, then mirrored for English.
2. **Commerce before decoration:** imagery is expressive; controls remain familiar and fast.
3. **Merchant-owned identity:** radius, density, typography, card treatment, header, footer, and campaign accents are configurable.
4. **Progressive enhancement:** buying, navigation, and core content remain usable if optional JavaScript enhancements fail.
5. **Accessible by default:** semantic controls, visible focus, keyboard dialogs, reduced motion, meaningful labels, and logical headings.
6. **Performance budget:** lazy-load below-the-fold images, defer non-critical scripts, avoid heavy animation, and reuse Twilight web components.

## 4. Visual direction

- **Tone:** editorial, athletic, precise, calm.
- **Default palette:** ink `#111310`, chalk `#F5F3EE`, signal lime `#C8FF2E`, white `#FFFFFF`.
- **Typography:** merchant-selected Salla font with compact headings and readable body measure.
- **Shape:** slightly rounded by default; selectable square, soft, or pill controls.
- **Motion:** 180–260ms state transitions and a restrained reveal; disabled under `prefers-reduced-motion`.
- **Photography:** full-bleed campaign images, consistent product aspect ratios, and explicit mobile crops.

## 5. Information architecture

| Page | Primary job | V1 experience |
|---|---|---|
| Home | Communicate brand and move shoppers into a collection | Drop hero, campaign rail, category links, featured products, flash sale, lookbook banners, brands, video, testimonials, FAQ |
| Product listing / category | Scan, filter, sort, and compare quickly | Optional category hero, sticky filters on desktop, mobile filter trigger, density-aware product grid |
| Product detail | Resolve purchase questions and convert | Gallery, price/offer state, options, size information, quantity, sticky add-to-cart, trust content, quick order, reviews, related/cross-sell, recently viewed |
| Cart | Confirm purchase with minimal friction | Native Twilight cart, offers, product options, totals, payment affordances |
| Brands | Browse by label | Brand index and brand product listing |
| Search | Recover intent quickly | Native Salla search and predictive modal |
| Content | Build trust and organic discovery | Blog list/article, static pages, breadcrumbs |
| Customer | Manage post-purchase relationship | Login, profile, orders, notifications, wishlist, wallet, loyalty |

## 6. Component catalog

### Global

- Announcement / shipping rail.
- Sticky or static header, mega menu, search, localization, user, cart.
- Breadcrumbs.
- Product card with wishlist, sale state, add-to-cart, and optional Quick View.
- Rich footer with description, links, contacts, socials, trust, tax, apps, and payments.

### Home merchandising

- **Media Hero:** responsive image or direct MP4 video, poster/mobile media, eyebrow, title, body, primary/secondary calls to action, alignment, overlay strength.
- **Brand Story:** image/video, editorial copy, CTA, reversible layout, and up to three trust metrics.
- **Flash Sale:** title, supporting text, end date, selected products, optional “view all”.
- **Lookbook Mosaic:** two to four linked editorial banners with independent focal images and copy.
- Product sliders and fixed grids for latest, featured, best-selling, discounted, or merchant-selected items.
- Category / quick-link rail.
- Brand wall.
- Lightweight YouTube embed.
- Store features and trust points.
- Testimonials.
- **FAQ:** native disclosure elements, schema-friendly content, keyboard accessible.

### Product conversion

- Sticky add-to-cart on mobile.
- Quick View from product cards with focus management and a safe path to full details.
- Recently Viewed stored locally in the shopper's browser.
- Native related products used as contextual cross-sell.
- Native offer, quick order, gifting, notify-when-available, reviews, and social share components.

## 7. Merchant customization

### Brand foundation

- Primary color through Salla theme color.
- Campaign accent color and neutral surface color.
- Merchant-selected Salla font.
- Global radius: square / soft / rounded.
- Content width: compact / standard / wide.
- Section spacing: compact / comfortable / airy.
- Motion: enabled / reduced.
- Full dark/light mode: customer toggle, saved preference, system default, and independent merchant colors.

### Header and footer

- Sticky header.
- Dark/light top rail.
- Important links.
- Overflow “more” menu.
- Header style: clean / bordered / floating.
- Footer dark/light.

### Commerce

- Product card style: editorial / bordered / minimal.
- Product image ratio: portrait / square / adaptive.
- Quick View toggle.
- Wishlist toggle.
- Sticky add-to-cart toggle.
- Breadcrumbs per product and listing pages.
- Tags, stock urgency, enhanced add-to-cart toast.
- Recently viewed toggle and item limit.

### Component-level controls

- Multilingual headings and body copy.
- Images, URLs, alignment, overlay, color treatment.
- Selected products, categories, and brands.
- Component order and visibility in Salla's theme editor.
- Countdown date and campaign labels.

## 8. Internationalization

- `<html lang>` and `dir` are supplied from Twilight.
- Custom strings live in `src/locales/ar.json` and `src/locales/en.json`.
- Merchant-facing component text supports multilingual values where Twilight allows it.
- Logical CSS properties are preferred for custom styles.
- Dates and money remain delegated to Salla components/helpers.

## 9. Accessibility acceptance criteria

- Skip link reaches the main content.
- All icon-only controls have accessible names.
- Focus is visible and not hidden under the sticky header.
- Quick View uses a labelled dialog, closes on Escape, traps focus, and restores focus.
- FAQ uses native `details`/`summary` semantics.
- Heading levels remain sequential within each component.
- Decorative images have empty alternative text; meaningful images use merchant/product text.
- Touch targets are at least 44×44px where practical.
- Motion is removed or shortened when reduced motion is requested.
- Color is never the only indicator of state.

## 10. SEO and performance

- Preserve Twilight's canonical metadata, hooks, semantic page titles, and product data.
- One visible `h1` per main page context; component headings start at `h2`.
- Use native lazy loading below the first viewport and eager loading only for the primary logo/hero.
- Use lightweight YouTube embed rather than loading the full player initially.
- Keep custom JavaScript dependency-free and defer-loaded.
- Target production JS additions under 15KB gzip and custom CSS under 25KB gzip for V1.
- Target Lighthouse lab baselines: Performance ≥ 85, Accessibility ≥ 95, Best Practices ≥ 90, SEO ≥ 95 on representative mobile pages. Live scores depend on merchant images and third-party apps.

## 11. V1 delivery plan

### Phase 0 — Foundation (included in this repository)

- Current official Theme Raed/Twilight base.
- VELA product identity, design tokens, layout treatment, and documentation.
- Drop Hero, Flash Sale, Lookbook Mosaic, and FAQ components.
- Media Hero video support, Brand Story, styled product tabs, and full dark/light color modes.
- Header/footer, category, product, and card visual system.
- Quick View, recently viewed foundation, sticky add-to-cart, related products.
- Arabic/English custom strings.
- Theme contract checks and production build scripts.

### Phase 1 — Demo-store validation

- Connect the repository to a Partners theme and demo store.
- Configure realistic fashion catalog, sizes, colors, offers, brands, and bilingual content.
- Validate every page, hook, component editor field, and Salla event in a live preview.
- Test Chrome, Safari, Firefox, iOS Safari, and Android Chrome.
- Run keyboard/screen-reader smoke checks and Lighthouse on home, category, product, and cart.

### Phase 2 — Commercial hardening

- Create component preview images and merchant onboarding presets.
- Replace every inherited Raed preview image with original VELA screenshots before submission.
- Add Media Hero, product tabs, brand story, and full dark/light color modes based on the competitive gap review.
- Add visual regression baselines for common viewports.
- Run large-catalog and slow-network tests.
- Complete theme-store listing assets, privacy/support pages, versioning, and changelog.
- Submit for Salla review and address review feedback.

## 12. Definition of done for publishable V1

- Production build succeeds with no contract-test failures.
- All component schemas appear and persist in the Salla editor.
- Core purchase journey works with keyboard and touch in Arabic and English.
- No critical WCAG 2.2 AA findings in automated and manual smoke tests.
- No horizontal overflow at 320, 375, 768, 1024, and 1440px.
- Product variants, out-of-stock, tax, offers, gifting, quick order, and multi-currency states are verified.
- Performance budgets are measured on the demo store with representative images.
- Support documentation and release notes are complete.

## 13. Explicit non-goals for V1

- Building an external recommendation engine; V1 uses Salla's related products and merchant selection.
- Replacing Salla checkout or authentication flows.
- Shipping heavy page-builder animation.
- Claiming live-store compatibility before Partners preview testing is completed.

## 14. Competitive benchmark

The current reference benchmark is Salla theme “Aali”. VELA will match the commercial expectation of a broad, image-led component library while remaining distinct through its fashion/sports specialization, editorial Drop Rail, Quick View, Recently Viewed, and conversion-focused product experience. The detailed audit and roadmap are maintained in `docs/COMPETITIVE_REVIEW_AALI.md`.

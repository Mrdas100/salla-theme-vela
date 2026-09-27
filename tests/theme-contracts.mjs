import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = path => readFileSync(resolve(root, path), 'utf8');
const theme = JSON.parse(read('twilight.json'));

const requiredFiles = [
  'src/views/layouts/master.twig',
  'src/views/pages/index.twig',
  'src/views/pages/product/index.twig',
  'src/views/pages/product/single.twig',
  'src/views/components/header/header.twig',
  'src/views/components/footer/footer.twig',
  'src/assets/styles/app.scss',
  'src/assets/js/app.js',
];

requiredFiles.forEach(path => assert.ok(existsSync(resolve(root, path)), `Missing required Twilight file: ${path}`));

assert.equal(theme.name.ar, 'ڤيلا', 'Arabic theme name must be VELA');
assert.equal(theme.name.en, 'VELA', 'English theme name must be VELA');
assert.ok(Array.isArray(theme.features) && theme.features.includes('mega-menu'));
assert.ok(Array.isArray(theme.settings) && theme.settings.length > 0);
assert.ok(Array.isArray(theme.components) && theme.components.length > 0);

const componentPaths = new Set();
for (const component of theme.components) {
  assert.ok(component.key, `Component ${component.path ?? 'unknown'} needs a stable key`);
  assert.ok(component.path, 'Every custom component needs a path');
  assert.ok(!componentPaths.has(component.path), `Duplicate component path: ${component.path}`);
  componentPaths.add(component.path);
  const twig = `src/views/components/${component.path.replaceAll('.', '/')}.twig`;
  assert.ok(existsSync(resolve(root, twig)), `Missing template for ${component.path}: ${twig}`);
}

['home.drop-hero', 'home.flash-sale', 'home.lookbook', 'home.faq'].forEach(path => {
  assert.ok(componentPaths.has(path), `Missing VELA component schema: ${path}`);
});

const ar = JSON.parse(read('src/locales/ar.json'));
const en = JSON.parse(read('src/locales/en.json'));
assert.deepEqual(Object.keys(ar.vela).sort(), Object.keys(en.vela).sort(), 'VELA locale keys must match');

const master = read('src/views/layouts/master.twig');
assert.match(master, /class="vela-skip-link"/);
assert.match(master, /id="main-content"/);

const quickView = read('src/assets/js/partials/product-card.js');
assert.match(quickView, /role="dialog"/);
assert.match(quickView, /aria-modal="true"/);

const styles = read('src/assets/styles/06-vela/vela.scss');
assert.match(styles, /prefers-reduced-motion:\s*reduce/);
assert.match(styles, /:focus-visible/);

console.log(`✓ VELA theme contracts passed (${theme.components.length} custom components)`);


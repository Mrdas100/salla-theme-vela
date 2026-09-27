const storageKey = 'vela:recently-viewed';

function safeRead() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return Array.isArray(value) ? value.filter(Number.isFinite) : [];
  } catch {
    return [];
  }
}

function initRecentlyViewed() {
  const currentNode = document.querySelector('[data-vela-current-product]');
  if (!currentNode) return;

  const currentId = Number(currentNode.dataset.velaCurrentProduct);
  const limit = Math.min(Math.max(Number(currentNode.dataset.velaRecentLimit) || 8, 2), 12);
  const previous = safeRead().filter(id => id !== currentId).slice(0, limit);
  const section = document.querySelector('.vela-recently-viewed');
  const target = section?.querySelector('[data-vela-recent-products]');

  if (section && target && previous.length) {
    const slider = document.createElement('salla-products-slider');
    slider.setAttribute('source', 'selected');
    slider.setAttribute('source-value', JSON.stringify(previous));
    slider.setAttribute('block-title', ' ');
    slider.setAttribute('slider-id', 'vela-recent-products');
    target.append(slider);
    section.hidden = false;
  }

  try {
    localStorage.setItem(storageKey, JSON.stringify([currentId, ...previous].slice(0, limit)));
  } catch {
    // Storage can be unavailable in privacy modes; the product page remains fully usable.
  }
}

document.addEventListener('DOMContentLoaded', initRecentlyViewed, { once: true });


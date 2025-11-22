/* ---------- Basics / helpers ---------- */
const qs = (sel, root = document) => root.querySelector(sel);
const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------- Dynamic year ---------- */
const yearEl = qs('.year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Mobile nav toggle ---------- */
const headerEl = qs('.header');
const btnNavEl = qs('.btn-mobile-nav');
if (btnNavEl && headerEl) {
  btnNavEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
  });
}

/* ---------- Smooth scroll for in-page #anchors ONLY ---------- */
/* Allow normal navigation for real pages (e.g., measure.html) */
qsa('a[href]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href') || '';

    // Only intercept hash anchors
    if (href.startsWith('#')) {
      e.preventDefault();

      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = qs(href);
        target?.scrollIntoView({ behavior: 'smooth' });
      }

      // Close mobile nav after clicking a menu item
      if (link.classList.contains('main-nav-link')) {
        headerEl?.classList.remove('nav-open');
      }
    }
    // else: normal link — let the browser navigate
  });
});

/* ---------- Sticky header (when hero leaves viewport) ---------- */
const sectionHero = qs('.section-hero');
if (sectionHero) {
  const obs = new IntersectionObserver(
    (entries) => {
      const ent = entries[0];
      if (!ent.isIntersecting) {
        document.body.classList.add('sticky');
      } else {
        document.body.classList.remove('sticky');
      }
    },
    { root: null, threshold: 0, rootMargin: '-80px' }
  );
  obs.observe(sectionHero);
}

/* ---------- Smoothscroll polyfill (if present) ---------- */
try {
  // Only call if the polyfill library is loaded
  // eslint-disable-next-line no-undef
  if (window.smoothscrollPolyfill || window.smoothscroll) {
    // eslint-disable-next-line no-undef
    (
      window.smoothscrollPolyfill?.polyfill || window.smoothscroll?.polyfill
    )?.();
  }
} catch {
  /* ignore */
}

/* ---------- Safari flexbox gap fix ---------- */
(function checkFlexGap() {
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));
  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.remove();
  if (!isSupported) document.body.classList.add('no-flexbox-gap');
})();

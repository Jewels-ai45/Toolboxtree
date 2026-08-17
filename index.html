// Loads shared header/footer partials so the nav & footer are edited in one
// place. Works on GitHub Pages (same-origin fetch), the github.io project
// preview URL, and the live custom domain. Pages set
// <body data-nav="tools"> to highlight the active link, and
// <body data-root="../"> when the page lives one folder deep (e.g. /planner/).

// Apply saved theme immediately (runs as soon as this script loads,
// before nav injection) to minimize the flash of the wrong theme.
try {
  if (localStorage.getItem('tt-theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
} catch (e) { /* localStorage unavailable, default to light */ }

// ---------- SEO: canonical + Open Graph / Twitter Card ----------
// Auto-generated from each page's existing <title> and meta description, so
// individual pages don't need to be hand-edited. Canonical always points at
// the production domain, even when viewed on the github.io preview URL, so
// Google treats toolboxtree.com as the one true copy.
(function () {
  const PROD_ORIGIN = 'https://toolboxtree.com';
  let path = location.pathname.replace(/^\/Toolboxtree/, '');
  if (!path.startsWith('/')) path = '/' + path;
  const canonicalUrl = PROD_ORIGIN + path;
  const title = document.title || 'ToolboxTree';
  const descEl = document.querySelector('meta[name="description"]');
  const description = descEl ? descEl.content : 'Free, fast, browser-based tools — no sign-up required.';

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
  canonical.href = canonicalUrl;

  const metas = {
    'og:title': title, 'og:description': description, 'og:type': 'website',
    'og:url': canonicalUrl, 'og:site_name': 'ToolboxTree',
    'twitter:card': 'summary', 'twitter:title': title, 'twitter:description': description
  };
  Object.entries(metas).forEach(([prop, content]) => {
    if (!content) return;
    const attr = prop.startsWith('og:') ? 'property' : 'name';
    let tag = document.querySelector(`meta[${attr}="${prop}"]`);
    if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attr, prop); document.head.appendChild(tag); }
    tag.setAttribute('content', content);
  });
})();

(async function () {
  const root = document.body.getAttribute('data-root') || '';
  const activeKey = document.body.getAttribute('data-nav') || '';

  async function inject(selector, path) {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const res = await fetch(root + path, { cache: 'no-store' });
      let html = await res.text();
      // Replace the __ROOT__ placeholder in shared partials with this page's
      // actual root path — works whether root is '' (top-level page) or
      // '../' (one folder deep), and on any base URL/subpath.
      html = html.split('__ROOT__').join(root);
      el.innerHTML = html;
    } catch (e) {
      console.error('Could not load ' + path, e);
    }
  }

  await inject('#site-nav', 'partials/nav.html');
  await inject('#site-footer', 'partials/footer.html');
  if (document.querySelector('#planner-nav')) {
    await inject('#planner-nav', 'partials/planner-nav.html');
    const plannerKey = document.body.getAttribute('data-planner');
    if (plannerKey) {
      const link = document.querySelector(`[data-planner-link="${plannerKey}"]`);
      if (link) link.setAttribute('aria-current', 'page');
    }
  }

  if (activeKey) {
    const link = document.querySelector(`[data-nav="${activeKey}"]`);
    if (link) link.setAttribute('aria-current', 'page');
  }
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      try {
        if (isDark) {
          document.documentElement.removeAttribute('data-theme');
          localStorage.setItem('tt-theme', 'light');
        } else {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('tt-theme', 'dark');
        }
      } catch (e) { /* localStorage unavailable */ }
    });
  }
})();

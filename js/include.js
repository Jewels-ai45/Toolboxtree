// Loads shared header/footer partials so the nav & footer are edited in one
// place. Works on GitHub Pages (same-origin fetch). Pages set
// <body data-nav="tools"> to highlight the active link, and
// <body data-root="../"> when the page lives one folder deep (e.g. /planner/).

// Apply saved theme immediately (runs as soon as this script loads,
// before nav injection) to minimize the flash of the wrong theme.
try {
  if (localStorage.getItem('tt-theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
} catch (e) { /* localStorage unavailable, default to light */ }

(async function () {
  const root = document.body.getAttribute('data-root') || '';
  const activeKey = document.body.getAttribute('data-nav') || '';

  async function inject(selector, path) {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const res = await fetch(root + path, { cache: 'no-store' });
      let html = await res.text();
      if (root) {
        // Rewrite root-relative hrefs so nested pages (e.g. /planner/) still work
        html = html.replace(/href="\//g, `href="${root}`);
      }
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

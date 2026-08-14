# ToolboxTree

Static site (plain HTML/CSS/JS, no build step) for toolboxtree.com.

## Structure
- `index.html`, `tools.html`, `quick-tools.html`, `calendar.html`, `about.html`, `blog.html`, `privacy.html`, `terms.html` — top-level pages
- `pages/` — individual tool pages (calculator, converters, etc.)
- `planner/` — the free Planner (Today, This Week, Goals, Growth, Reflect), backed by localStorage
- `partials/` — shared nav.html, footer.html, planner-nav.html, injected at runtime by `js/include.js`
- `css/styles.css` — design tokens + shared components
- `css/site.css` — page-specific styles (homepage tree diagram, planner UI, tool widgets)

## Local preview
No build step needed. From this folder, run a local server (fetch() for partials needs http://, not file://):

    python3 -m http.server 8000

Then visit http://localhost:8000

## Deploying (GitHub Pages)
1. Push this repo to GitHub.
2. Repo Settings → Pages → Deploy from branch → `main` / `/ (root)`.
3. The `CNAME` file is already set to `toolboxtree.com` — once DNS (A/ALIAS records or CNAME per GitHub Pages docs) points at GitHub Pages, switch it over from Hostinger.
4. Keep Hostinger live until GitHub Pages is verified working on a preview URL, then flip DNS.

## Still to build (next passes)
- PDF Tools (merge/split/compress) — needs a client-side PDF library (e.g. pdf-lib)
- Image Tools (compress/resize) — needs a client-side image library
- QR Code Generator — needs a small QR-generation library
- Real blog posts (placeholders are in blog.html)
- Gumroad product page + $14 Planner unlock flow (license key check against `Store.set('premium', true)`)
- AdSense: swap `.ad-slot` placeholders for real ad units once approved, fill in `ads.txt`

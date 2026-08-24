# vipinsingh.me

Personal site for **Vipin Singh** — Founder & CEO, [Gen X Web Hosting](https://genxwhosting.com).

Static HTML/CSS/JS. No build step, no framework, no dependencies to install.
Deployed with GitHub Pages on the custom domain `vipinsingh.me`.

## Structure

```
index.html                 Homepage — hero, journey, work, contact + QR, latest writing
blog.html                  Blog index with category filters
posts/*.html               Individual articles
404.html                   Not-found page
CNAME                      Custom domain for GitHub Pages
.nojekyll                  Serve files as-is (skip Jekyll processing)
assets/css/style.css       "Executive Kinetic" design system
assets/js/main.js          Nav, theme, reveal, vCard download, QR, blog filter
assets/js/qrcode.js        QR encoder (qrcode-generator by Kazuhiko Arase, MIT)
assets/img/                Favicon, static QR fallback, portrait
assets/vipin-singh.vcf     Downloadable contact card
```

## Editing contact details

Contact details live in **one place**: the `CONTACT` object at the top of
`assets/js/main.js`. The .vcf download and the QR code are both generated from it,
so changing a number or an email there updates both.

Three places still hold a copy for people who arrive without JavaScript, and should
be updated to match:

- the visible contact rows in `index.html` (`#contact` section)
- `assets/vipin-singh.vcf` (the static fallback file)
- the `application/ld+json` block in `index.html`

## Adding the portrait

Drop a photo at `assets/img/vipin-singh.jpg` (portrait crop, roughly 4:5, ~1200px wide).
Until then the hero shows a monogram fallback — the `onerror` handler removes the
broken image automatically, so a missing file never shows a broken icon.

## Adding a blog post

Copy any file in `posts/`, replace the `<article>` content and the JSON-LD block,
then add a matching card to the grid in `blog.html` (set `data-category` to one of
the filter values) and, if it should be featured, to the `#writing` grid in `index.html`.
Add the URL to `sitemap.xml`.

## Local preview

Any static server works, e.g.:

```
python3 -m http.server 8000
```

## Deployment

Pushing to the default branch publishes automatically once GitHub Pages is enabled
(Settings → Pages → Source: deploy from branch → `main` / root).

DNS for the apex domain `vipinsingh.me` should point at GitHub's Pages IPs:

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
AAAA  @    2606:50c0:8000::153
AAAA  @    2606:50c0:8001::153
AAAA  @    2606:50c0:8002::153
AAAA  @    2606:50c0:8003::153
CNAME www  <github-username>.github.io.
```

Then tick **Enforce HTTPS** in Settings → Pages once the certificate is issued.

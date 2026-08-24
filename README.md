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

## The hero portrait

`assets/img/vipin-singh.jpg` is what the page loads (1023x1537, ~185&nbsp;KB). It is a
JPEG re-encode of the original `assets/img/vipinsingh.png`, which is kept as the
source file but never served — the PNG is 1.67&nbsp;MB, which is too heavy for a hero
image. To swap the photo, replace the PNG and re-encode:

```
sips -s format jpeg -s formatOptions 80 assets/img/vipinsingh.png --out assets/img/vipin-singh.jpg
```

The frame is 4:5 and the photo is 2:3, so `object-position: 50% 18%` in
`style.css` biases the crop upward to keep headroom above the face. Adjust that
percentage if you change the photo.

If the file is ever missing, the hero falls back to a "VS" monogram — the `onerror`
handler removes the broken image, so it never shows a broken-image icon.

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

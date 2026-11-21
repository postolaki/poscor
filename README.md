# Poscor website

A static company website: plain HTML, CSS and JS with no build step.
All site files live in `public/`.

```
public/
  index.html    main page in English (default), served at /
  ro/index.html Romanian version, served at /ro/
  404.html      not-found page
  styles.css    styles (light and dark mode)
  script.js     mobile menu and scroll animations
  favicon.svg   logo / favicon
  _headers      security and cache headers (read by Cloudflare)
  robots.txt
  sitemap.xml
wrangler.jsonc  Cloudflare Workers config
```

## Deploy on Cloudflare from GitHub

1. Log in to the Cloudflare dashboard and go to **Workers & Pages → Create**.
2. Choose **Import a repository** (or the **Pages** tab → **Connect to Git**) and pick this GitHub repo.
3. Use these build settings:
   - **Workers** (default import): leave the build command empty. The deploy command is `npx wrangler deploy`, which reads `wrangler.jsonc`.
   - **Pages**: framework preset **None**, build command *(empty)*, build output directory **`public`**.
4. Click **Deploy**. Every push to the production branch redeploys the site automatically.
5. Add `poscor.ro` (and `www.poscor.ro` if you want it) under the project's **Custom domains** (or **Domains & Routes**) settings. This is easiest when the domain's DNS is managed by Cloudflare.

## Edit content

- The contact email (`support@poscor.ro`) is in both `public/index.html` and `public/ro/index.html`.
- Services, process steps and the "Why us" list are plain HTML sections in `public/index.html`.
- The site is bilingual. English (`public/index.html`) is the default; Romanian is in `public/ro/index.html`.
  When you change text, update both files. The EN/RO switch in the header links between them.
- Brand colors are CSS variables at the top of `public/styles.css` (`--primary`, `--primary-2`).

## Preview locally

```bash
npx serve public
```

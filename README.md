# Poscor website

A static company website: plain HTML, CSS and JS with no build step.
All site files live in `public/`.

```
public/
  index.html    main page (services, process, why us, contact)
  404.html      not-found page
  styles.css    styles (light and dark mode)
  script.js     mobile menu and scroll animations
  favicon.svg   logo / favicon
  _headers      security and cache headers (read by Cloudflare)
  robots.txt
wrangler.jsonc  Cloudflare Workers config
```

## Deploy on Cloudflare from GitHub

1. Log in to the Cloudflare dashboard and go to **Workers & Pages → Create**.
2. Choose **Import a repository** (or the **Pages** tab → **Connect to Git**) and pick this GitHub repo.
3. Use these build settings:
   - **Workers** (default import): leave the build command empty. The deploy command is `npx wrangler deploy`, which reads `wrangler.jsonc`.
   - **Pages**: framework preset **None**, build command *(empty)*, build output directory **`public`**.
4. Click **Deploy**. Every push to the production branch redeploys the site automatically.
5. Optional: add your domain under the project's **Custom domains** (or **Domains & Routes**) settings.

## Edit content

- The contact email is `support@poscor.com` in `public/index.html`. Change it to your real address.
- Services, process steps and the "Why us" list are plain HTML sections in `public/index.html`.
- Brand colors are CSS variables at the top of `public/styles.css` (`--primary`, `--primary-2`).

## Preview locally

```bash
npx serve public
```

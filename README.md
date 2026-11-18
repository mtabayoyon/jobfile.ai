# Field-data AI company site

Static launch site (no build step) for GitHub Pages. Name: **Jobfile.ai** at **jobfile.ai** (jobfileai.com was also open on Nov 18, 2026).

Brand: **Jobfile.ai**, tagline **Capture • Automate • Operate**, supporting line **AI workflow for service companies**. Michael's full logo lockup is `brand/jobfile-logo.jpeg` (also the social share image). The site uses an SVG redraw of its folder, check, swoosh and sparkle mark (inline in `index.html`, and `favicon.svg`) so it works on light and dark backgrounds. Colors come from the logo: navy `#111a33`, royal blue `#2563eb`, sky blue `#3b9cf0`.

## Files

- `index.html` – the site, built from `template/index.html` with the name and domain filled in
- `styles.css` – all styles (light and dark)
- `favicon.svg` – the logo mark
- `brand/jobfile-logo.jpeg` – full logo lockup
- `investors/index.html` – investor inquiry page; the form opens the visitor's email app with the message filled in (no form service). **The inbox is a placeholder: `investors@jobfile.ai` in the form's `data-to` and the fallback link.** Change both once the address is confirmed.
- `media/` – wearable camera storyboards (looping videos and poster images)
- `CNAME` – the custom domain GitHub Pages serves
- `.nojekyll` – tells GitHub Pages to serve files as-is
- `template/index.html` – same page with `__BRAND__` and `__DOMAIN__` placeholders

## Swap the name and domain

Run from this folder, replacing `NewName` and `newdomain.com`:

```bash
sed -e 's/__BRAND__/NewName/g' -e 's/__DOMAIN__/newdomain.com/g' template/index.html > index.html
```

```bash
echo "newdomain.com" > CNAME
```

## Publish on GitHub Pages

1. Register the domain.
2. Create a public repo under `mtabayoyon` (for example `jobfile-ai-site`) and push the files in this folder, minus `template/` if you like.
3. In the repo: Settings → Pages → Source: Deploy from a branch → `main` / root. Save.
4. Settings → Pages → Custom domain: enter the domain. Tick **Enforce HTTPS** once the certificate is issued (can take up to an hour).

## DNS at the registrar

Apex domain (`jobfile.ai`), four A records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optional AAAA records for IPv6:

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

`www` subdomain: CNAME to

```
mtabayoyon.github.io
```

Then verify the domain under GitHub → Settings (your account) → Pages → Add a domain, so nobody else can claim it on Pages.

## Before launch

- Set up `hello@` email on the domain (Google Workspace or forwarding) so the pilot button works.
- The systems named on the page (JobSight, Xactimate, QuickBooks) are described as what it's built to feed. Adjust once integrations are live.
- The Allied section names Allied Restoration Company as the first operator. Remove it if you'd rather keep the companies separate.

# Qelvira Landing

Marketing site for Qelvira: premium housekeeping supplies plus the portal that tracks them.

Stack: Vite + React 19 + Tailwind CSS 4 + lucide-react (same as `qelvira-dummy-ui`).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run lint
```

## Where things live

- `src/data/site.js` has all copy, contact details, FAQ and product categories. Edit text here, not in the components.
- `src/components/` has one component per page section, in page order in `src/App.jsx`.
- `public/qelvira-logo.svg` is the logo; `src/components/Logo.jsx` is an inline copy with a white variant for dark backgrounds.
- Brand colours are the `brand` (navy) and `leaf` (green) scales in `src/index.css`.

## Contact form

There's no backend. The form builds a WhatsApp message to the sales number and opens `wa.me`. Swap `onSubmit` in `src/components/Contact.jsx` for an API call when one exists.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on push to `master`, with `BASE_PATH=/qelvira-landing/`.
When the site moves to a custom domain (e.g. 1194enterprises.in), set `BASE_PATH` to `/` in the workflow and add a `public/CNAME`.

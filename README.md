# Omega Media Communications Ltd – Production Scaffold

This Vite + React scaffold is branded for Omega Media Communications Ltd and prepared for production setup.

## Quick start

```bash
npm install
npm run dev
npm run build
```

## Environment variables

Copy `.env.example` to `.env` and fill in your real values:

- `VITE_CONTACT_EMAIL`
- `VITE_PHONE_DISPLAY`
- `VITE_WHATSAPP_NUMBER`
- `VITE_FORMSPREE_ENDPOINT`
- `VITE_INSTAGRAM_URL`
- `VITE_FACEBOOK_URL`

## Contact form

The form posts to `VITE_FORMSPREE_ENDPOINT` when set. Without that variable, the form falls back to the configured email address.

## Assets

Public branding and imagery currently use:

- a branded Omega wordmark SVG created for this scaffold
- public studio imagery pulled from the live Omega website

Replace or add more portfolio images in `/public` and update `src/data/portfolio.js` as needed.

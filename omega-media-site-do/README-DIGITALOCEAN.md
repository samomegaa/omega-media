# Omega Media Communications Ltd – DigitalOcean Deployment

This package is prepared primarily for **DigitalOcean App Platform** as a static site, with an additional **Docker + Nginx** option for a Droplet.

## Why App Platform is the best fit

This website is a Vite build that produces static assets. On DigitalOcean App Platform, a static site component is designed for projects that only need a build process and serve static assets, without a run command. The platform also supports an `output_dir` for build assets, app and component environment variables, and a `catchall_document` such as `index.html` for client-side routing. DigitalOcean documents these behaviors in its App Platform static site and app spec references. citeturn801438view3turn801438view1turn895956view1turn895956view0

## Option A: Deploy on DigitalOcean App Platform

### 1. Push this project to GitHub
Create a GitHub repository, for example:

`your-github-username/omega-media-site`

Then update `.do/app.yaml` so the `github.repo` field matches your real repository.

### 2. Create the app from the spec
In DigitalOcean App Platform, you can create or update an app from an app spec YAML file. App Platform supports YAML app specs for fully configured deployments. citeturn801438view0turn461284search11

Use `.do/app.yaml` in one of these ways:
- create a new App Platform app from the control panel and import the repository, then mirror the values from the spec
- or use `doctl apps create --spec .do/app.yaml`
- or update an existing app with `doctl apps update <APP_ID> --spec .do/app.yaml`

### 3. Set environment variables
This project reads `VITE_*` variables at build time, so on App Platform they should be set with `BUILD_TIME` scope in the spec or in the control panel. DigitalOcean’s docs note that App Platform environment variables can be defined with build-time, run-time, or both scopes, and that app-level variables are available to all components. citeturn801438view2

Use these values:
- `VITE_CONTACT_EMAIL`
- `VITE_PHONE_DISPLAY`
- `VITE_WHATSAPP_NUMBER`
- `VITE_FORMSPREE_ENDPOINT`
- `VITE_INSTAGRAM_URL`
- `VITE_FACEBOOK_URL`

A ready template is included in:

`.env.digitalocean.example`

### 4. SPA routing fallback
This React site uses client-side routing. DigitalOcean App Platform supports a catch-all document for static sites, and for JavaScript-based client-side routing the docs specifically say you can use `index.html` as the catch-all document. That is already configured in `.do/app.yaml` using:

`catchall_document: index.html` citeturn801438view1turn895956view0

### 5. Build output directory
The app spec sets:

`output_dir: dist`

That matches Vite’s production output and aligns with DigitalOcean’s static site configuration, which supports an output directory for built assets. citeturn801438view1turn895956view1

## Option B: Deploy on a DigitalOcean Droplet

This package also includes:
- `Dockerfile`
- `nginx.conf`
- `.dockerignore`

That path is useful if you want to deploy behind your own Nginx setup on an Ubuntu Droplet. The container builds the Vite app and serves the output through Nginx with SPA fallback.

### Droplet commands

```bash
cp .env.digitalocean.example .env
# fill in real values locally or in your CI/CD

docker build \
  --build-arg VITE_CONTACT_EMAIL="hello@omegamediacommunications.com" \
  --build-arg VITE_PHONE_DISPLAY="+234 XXX XXX XXXX" \
  --build-arg VITE_WHATSAPP_NUMBER="2340000000000" \
  --build-arg VITE_FORMSPREE_ENDPOINT="https://formspree.io/f/your-form-id" \
  --build-arg VITE_INSTAGRAM_URL="https://www.instagram.com/your-handle" \
  --build-arg VITE_FACEBOOK_URL="https://www.facebook.com/your-page" \
  -t omega-media-site .

docker run -d --name omega-media-site -p 8080:80 omega-media-site
```

Then place your reverse proxy in front of port `8080` if needed.

## Form handling

The contact form is already wired to post JSON to `VITE_FORMSPREE_ENDPOINT`. If that value is missing, it falls back to the configured contact email via `mailto:`. This means the site remains functional even before Formspree is turned on.

## Files added for DigitalOcean

- `.do/app.yaml` — App Platform app spec
- `.env.digitalocean.example` — environment variable template
- `Dockerfile` — optional Droplet/container deployment
- `nginx.conf` — SPA-friendly Nginx config
- `.dockerignore`
- `README-DIGITALOCEAN.md`

## Recommended deployment choice

For this specific website, **DigitalOcean App Platform static site** is the simplest and strongest choice because the app is a static Vite build and does not need a backend runtime. DigitalOcean describes static sites in App Platform as build-only components that serve static assets without a run command. citeturn801438view3

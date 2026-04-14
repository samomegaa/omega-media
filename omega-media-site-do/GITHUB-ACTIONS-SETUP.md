# GitHub Actions setup for DigitalOcean App Platform

This repository includes `.github/workflows/deploy-digitalocean-app-platform.yml`.

## Required GitHub repository secrets

Add these secrets in GitHub:

- `DIGITALOCEAN_ACCESS_TOKEN`
- `VITE_CONTACT_EMAIL`
- `VITE_PHONE_DISPLAY`
- `VITE_WHATSAPP_NUMBER`
- `VITE_FORMSPREE_ENDPOINT`
- `VITE_INSTAGRAM_URL`
- `VITE_FACEBOOK_URL`

## Important app spec change

In `.do/app.yaml`, set:

- `github.repo` to your real `owner/repo`
- `github.branch` to `main`
- `deploy_on_push: false`

`deploy_on_push` should stay off when GitHub Actions is the deployment driver.

## First-time requirement

DigitalOcean requires that your GitHub account is already authenticated with App Platform by deploying at least one app through the control panel or API once.

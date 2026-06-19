# Storybook on GitHub Pages

Public URL: https://stellarroute.github.io/route-visualizer

## Build

```bash
npm run build:storybook
```

Produces static HTML in `storybook-static/`.

## CI deploy

`.github/workflows/ci.yml` typically includes a job that:

1. Builds Storybook on push to `main`
2. Uploads `storybook-static` to GitHub Pages

Check workflow file for current branch triggers and permissions (`pages: write`, `id-token: write`).

## Local preview of production build

```bash
npx serve storybook-static
```

## Custom domain

Optional CNAME for branded docs URL. Configure in repository Settings > Pages.

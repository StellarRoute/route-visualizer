# CI pipeline

GitHub Actions workflow `.github/workflows/ci.yml` runs on push and PR to `main`.

## Matrix

Node **18.x** and **20.x** on `ubuntu-latest`.

## Steps (each Node version)

1. `npm ci`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run test:coverage`
5. `npm run build`

## Coverage artifact

Only the **20.x** job uploads `coverage/` as a build artifact for downstream review.

Storybook deploy lives in a separate `storybook.yml` workflow, not this file.

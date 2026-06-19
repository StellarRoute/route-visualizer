# Tag-triggered npm publish

Pushing a `v*` git tag triggers `.github/workflows/publish.yml`.

## Trigger

```yaml
on:
  push:
    tags:
      - "v*"
```

## Steps

1. Checkout, Node 20, `npm ci`
2. `npm run build`
3. `npm publish --provenance --access public`

Requires `NPM_TOKEN` repository secret and `id-token: write` for npm provenance attestation.

Complements the manual checklist in `docs/publishing/npm-release.md`.

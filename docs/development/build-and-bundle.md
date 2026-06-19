# Build and bundle

## Production build

```bash
npm run build
```

Runs:

1. `vite build` - ESM and CJS bundles via `vite.config.ts`
2. `tsc --emitDeclarationOnly` - Type definitions in `dist/`

## Outputs

| File | Format |
|------|--------|
| `dist/index.js` | ESM |
| `dist/index.cjs` | CommonJS |
| `dist/index.d.ts` | TypeScript declarations |

## package.json exports

Consumers resolve `"@stellarroute/route-visualizer"` to the correct format via the `exports` map.

## Size check

```bash
npm run size
```

Uses bundlesize (if configured) to guard against bundle regressions.

## Peer dependencies

React is externalized and not bundled into `dist/`. Host apps dedupe React as usual.

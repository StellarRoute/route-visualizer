# Vite library configuration

`vite.config.ts` builds the publishable library.

## Outputs

- ESM: `dist/index.js`
- CJS: `dist/index.cjs`
- Types: `dist/index.d.ts` via `vite-plugin-dts` with `insertTypesEntry: true`

## Externals

React, ReactDOM, and `react/jsx-runtime` are marked external so hosts dedupe React.

## Bundle analysis

`rollup-plugin-visualizer` writes `dist/stats.html` after build.

## Vitest

Test config is co-located: jsdom environment, `src/test-setup.ts`, coverage excluding stories.

See `package.json` scripts `build`, `test`, and `test:coverage`.

# CSS modules and bundling

Styles are colocated as `*.module.css` per component. Vite inlines hashed class names into the library bundle.

## tokens.css side effect

`RouteVisualizer.tsx` imports `../styles/tokens.css` globally. Theme variables apply under `[data-rv-theme="light|dark"]` on the container.

## Consumer setup

Hosts only import the React component. They do not need a separate CSS entry point. TypeScript recognizes modules via `src/css-modules.d.ts`.

See `vite.config.ts` lib mode settings in `docs/development/vite-lib-config.md`.

# Troubleshooting

## "Cannot find module" after install

Ensure peer dependencies are installed:

```bash
npm install react react-dom
```

## Types not resolving

Confirm TypeScript resolves `exports` in package.json (TS 4.7+). Import types from `@stellarroute/route-visualizer` directly.

## Styles look unstyled

CSS from the library must load with the component. If you copy components without styles, import the package build rather than source files.

## Theme always light in Next.js

Use `"use client"` and `theme="auto"` or explicit `dark`. Server-rendered HTML does not know user color scheme until hydration.

## Storybook port in use

```bash
npm run dev -- -p 6007
```

## Build fails on declaration emit

Run `npm run typecheck` first. Fix strict errors in `src/` before `tsc --emitDeclarationOnly`.

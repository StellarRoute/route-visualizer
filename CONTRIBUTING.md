# Contributing to route-visualizer

Embeddable React component for visualizing Stellar DEX/AMM swap routes.

## Setup

```bash
git clone https://github.com/StellarRoute/route-visualizer.git
cd route-visualizer
npm install
npm run typecheck
npm test
```

## Project structure

| Path | Purpose |
|------|---------|
| `src/components/` | React UI (RouteVisualizer, hops, badges) |
| `src/types/route.ts` | `RouteData` and prop types |
| `src/styles/tokens.css` | CSS custom properties for theming |
| `src/stories/` | Storybook examples |
| `src/utils/format.ts` | Asset and slippage formatting |

## Development commands

```bash
npm run dev          # Storybook on port 6006
npm test             # Vitest
npm run build        # Library build to dist/
npm run lint
```

## Pull requests

- Branch from `main`, target `main`.
- Ensure `npm test`, `npm run typecheck`, and `npm run build` pass.
- Update Storybook stories when changing visual behavior.
- Avoid em dashes in user-facing copy.

## Publishing

See [docs/publishing/npm-release.md](docs/publishing/npm-release.md). Version bumps require maintainer approval.

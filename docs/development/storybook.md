# Storybook

## Start

```bash
npm run dev
```

Runs Storybook 8 on port **6006** (script: `storybook dev -p 6006`).

## Stories location

`src/stories/RouteVisualizer.stories.tsx`

Stories cover:

- Single-hop AMM
- Multi-hop mixed venues
- Light and dark themes
- Long routes with `maxHopsShown`

## Build static Storybook

```bash
npm run build:storybook
```

Output directory defaults to `storybook-static/` (used by GitHub Pages deploy).

## Hosted docs

Published site: https://stellarroute.github.io/route-visualizer

See [deployment/storybook-github-pages.md](../deployment/storybook-github-pages.md).

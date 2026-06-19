# Local development setup

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

## Install

```bash
git clone https://github.com/StellarRoute/route-visualizer.git
cd route-visualizer
npm install
```

## Storybook dev server

```bash
npm run dev
```

Opens Storybook at http://localhost:6006 with live component examples.

## Verify

```bash
npm run typecheck
npm test
npm run build
```

Built artifacts land in `dist/` (ESM, CJS, and TypeScript declarations).

## Peer dependencies

React 17+ is a peer dependency. Storybook devDependencies satisfy it locally; consuming apps must install `react` and `react-dom` separately.

See [integration/quick-start.md](../integration/quick-start.md) for usage in another project.

# @stellarroute/route-visualizer

An embeddable React component that renders a visual "how your trade will be routed" diagram for Stellar DEX/AMM swaps. Drop it into any Stellar dapp in minutes.

[![CI](https://github.com/StellarRoute/route-visualizer/actions/workflows/ci.yml/badge.svg)](https://github.com/StellarRoute/route-visualizer/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@stellarroute/route-visualizer.svg)](https://www.npmjs.com/package/@stellarroute/route-visualizer)

## Installation

```bash
npm install @stellarroute/route-visualizer
```

**Peer dependencies** (install separately if not already present):

```bash
npm install react react-dom
```

## Quick Start

```tsx
import { RouteVisualizer } from "@stellarroute/route-visualizer";
import type { RouteData } from "@stellarroute/route-visualizer";

const route: RouteData = {
  sourceAsset: { code: "XLM" },
  destinationAsset: { code: "USDC", issuer: "GA5ZSEJYB37J..." },
  sourceAmount: "1000",
  destinationAmount: "99.5",
  totalSlippagePct: 0.15,
  hops: [
    {
      sourceAsset: { code: "XLM" },
      destinationAsset: { code: "USDC", issuer: "GA5ZSEJYB37J..." },
      poolType: "amm",
      poolId: "0a1b2c3d4e5f...",
      slippagePct: 0.15,
    },
  ],
};

export default function App() {
  return <RouteVisualizer route={route} />;
}
```

## API Reference

### `<RouteVisualizer>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `route` | `RouteData` | **required** | The route data from the StellarRoute engine |
| `theme` | `"light" \| "dark" \| "auto"` | `"auto"` | Color theme; `"auto"` follows `prefers-color-scheme` |
| `showSlippage` | `boolean` | `true` | Toggle per-hop and total slippage display |
| `showPoolIds` | `boolean` | `true` | Toggle pool ID labels on arrows |
| `maxHopsShown` | `number` | `undefined` | Truncate long routes, showing "…and N more hops" |
| `className` | `string` | `undefined` | Additional CSS class for the container |
| `style` | `React.CSSProperties` | `undefined` | Inline styles for the container |

### `RouteData` type

```ts
interface RouteData {
  hops: RouteHop[];
  totalSlippagePct: number;
  sourceAsset: StellarAsset;
  destinationAsset: StellarAsset;
  sourceAmount: string;
  destinationAmount: string;
}

interface RouteHop {
  sourceAsset: StellarAsset;
  destinationAsset: StellarAsset;
  poolType: "amm" | "orderbook";
  poolId: string;
  slippagePct: number;
}

interface StellarAsset {
  code: string;
  issuer?: string; // undefined for native XLM
}
```

## Theming / Customization

The component uses CSS custom properties for all colors. Override them on your container or globally:

```css
.my-container {
  --rv-accent: #7c3aed;
  --rv-bg: #fafafa;
}
```

See [src/styles/tokens.css](src/styles/tokens.css) for the full list of available tokens.

## Slippage Severity

| Range | Color | Meaning |
|-------|-------|---------|
| < 1% | Green | Normal |
| 1% – 2.99% | Amber | Worth noting |
| ≥ 3% | Red | High — user should review |

## Development

```bash
npm install
npm run dev          # Storybook at localhost:6006
npm test             # Vitest unit tests
npm run build        # Library build → dist/
npm run typecheck    # TypeScript strict check
```

## Storybook

Live component explorer: [https://stellarroute.github.io/route-visualizer](https://stellarroute.github.io/route-visualizer)

## License

MIT © StellarRoute

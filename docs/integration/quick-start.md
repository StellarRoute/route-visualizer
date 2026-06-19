# Integration quick start

## Install

```bash
npm install @stellarroute/route-visualizer react react-dom
```

## Minimal example

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

export function SwapRoutePreview() {
  return <RouteVisualizer route={route} theme="auto" />;
}
```

## Bundlers

Works with Vite, Webpack 5, and Next.js (client components). ESM and CJS entry points are listed in `package.json` exports field.

## TypeScript

Enable strict mode in host app. Import types from the same package path as the component.

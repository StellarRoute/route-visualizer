# Multi-hop route examples

## Two-hop AMM + orderbook

```ts
const route: RouteData = {
  sourceAsset: { code: "XLM" },
  destinationAsset: { code: "yUSDC", issuer: "GB..." },
  sourceAmount: "5000",
  destinationAmount: "480.25",
  totalSlippagePct: 1.2,
  hops: [
    {
      sourceAsset: { code: "XLM" },
      destinationAsset: { code: "USDC", issuer: "GA5Z..." },
      poolType: "amm",
      poolId: "pool-xlm-usdc",
      slippagePct: 0.4,
    },
    {
      sourceAsset: { code: "USDC", issuer: "GA5Z..." },
      destinationAsset: { code: "yUSDC", issuer: "GB..." },
      poolType: "orderbook",
      poolId: "sdex-usdc-yusdc",
      slippagePct: 0.8,
    },
  ],
};
```

## Truncation with maxHopsShown

For routes with many hops:

```tsx
<RouteVisualizer route={longRoute} maxHopsShown={3} />
```

Displays first three hops plus an overflow indicator for the remainder.

## Storybook

See `src/stories/RouteVisualizer.stories.tsx` for additional fixtures used in visual regression and design review.

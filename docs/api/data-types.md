# Data types

Source: `src/types/route.ts`

## `StellarAsset`

```ts
interface StellarAsset {
  code: string;
  issuer?: string; // omit for native XLM
}
```

## `RouteHop`

One leg of a swap path:

```ts
interface RouteHop {
  sourceAsset: StellarAsset;
  destinationAsset: StellarAsset;
  poolType: "amm" | "orderbook";
  poolId: string;
  slippagePct: number; // 0.15 means 0.15%
}
```

## `RouteData`

Top-level input to `RouteVisualizer`:

```ts
interface RouteData {
  hops: RouteHop[];
  totalSlippagePct: number;
  sourceAsset: StellarAsset;
  destinationAsset: StellarAsset;
  sourceAmount: string;
  destinationAmount: string;
}
```

Amounts are strings to preserve Stellar decimal precision from upstream APIs.

## Pool types

| Value | UI treatment |
|-------|----------------|
| `amm` | Soroban AMM pool label |
| `orderbook` | SDEX order book label |

See [integration/stellarroute-api.md](../integration/stellarroute-api.md) for mapping from StellarRoute quote responses.

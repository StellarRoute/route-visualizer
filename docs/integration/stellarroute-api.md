# StellarRoute API mapping

The visualizer expects `RouteData` shaped like StellarRoute path/quote responses. Wire your client to transform API JSON into this structure.

## Suggested mapping

| StellarRoute field (conceptual) | RouteData field |
|--------------------------------|-----------------|
| Quote base asset | `sourceAsset` |
| Quote counter asset | `destinationAsset` |
| Input amount | `sourceAmount` (string) |
| Output amount | `destinationAmount` (string) |
| Path legs | `hops[]` |
| Leg venue type (AMM vs SDEX) | `poolType`: `amm` or `orderbook` |
| Pool or offer identifier | `poolId` |
| Leg slippage | `hop.slippagePct` |
| Aggregate slippage | `totalSlippagePct` |

## StellarRoute endpoints

Typical sources from [StellarRoute](https://github.com/StellarRoute/StellarRoute):

- `GET /api/v1/quote/:base/:quote`
- `GET /api/v1/routes/:base/:quote`

Exact response fields depend on API version. Transform in your SDK layer rather than inside the visualizer package.

## Native XLM

Use `{ code: "XLM" }` without `issuer` for native asset.

## Error handling

Do not render `RouteVisualizer` until route data is loaded. Show skeleton UI in host app when quote fetch fails.

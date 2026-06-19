# Public export surface

Consumers should import from the package entry `src/index.ts` (published as `@stellarroute/route-visualizer`).

## Exported components

- `RouteVisualizer`

## Exported types

- `RouteData`, `RouteHop`, `StellarAsset`, `Theme`, `RouteVisualizerProps`, `PoolType`

## Not exported

Format helpers (`formatAsset`, `formatSlippage`, etc.) and internal components (`RouteDiagram`, `RouteNode`, `RouteArrow`, `SlippageBadge`) are implementation details.

Bundled CSS ships via side-effect import inside `RouteVisualizer.tsx`; hosts do not import CSS separately.

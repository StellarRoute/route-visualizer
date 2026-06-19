# Amount fields on RouteData

`RouteData` requires `sourceAmount` and `destinationAmount` strings for type completeness and API mapping examples.

## Not rendered

Neither `RouteVisualizer` nor `RouteDiagram` reads these fields. The UI shows asset codes and slippage only.

## Host responsibility

Swap UIs should render input/output amounts adjacent to the visualizer (for example in a trade summary panel). Populate amounts from StellarRoute quote responses when mapping to `RouteData`.

See `src/types/route.ts` and `docs/integration/stellarroute-api.md`.

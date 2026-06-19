# RouteArrow pool labels

Connectors between nodes show venue type and optional pool id.

## poolType mapping

| `poolType` value | Label |
|------------------|-------|
| `amm` | AMM |
| other | Order Book |

## showPoolIds

When true, displays `formatPoolId(hop.poolId)` under the pool type label.

## children slot

`RouteDiagram` passes per-hop `SlippageBadge` as children so slippage sits inline on the arrow.

See `RouteArrow.tsx` and `RouteArrow.test.tsx`.

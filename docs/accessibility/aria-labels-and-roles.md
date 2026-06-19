# ARIA labels and roles

Route visualizer components expose accessibility metadata for screen readers.

## RouteDiagram

- `role="group"` on the flow container
- `aria-label` summarizes the full route and total slippage (built from `formatAsset` and `formatSlippage`)

## RouteNode

- `role="img"` on each asset bubble
- `aria-label` uses the optional `label` prop or asset code

## RouteArrow

- `role="img"` with label describing pool type and hop direction

## SlippageBadge

- `aria-label` includes formatted slippage percentage and severity tier

See component files under `src/components/RouteDiagram`, `RouteNode`, `RouteArrow`, and `SlippageBadge`.

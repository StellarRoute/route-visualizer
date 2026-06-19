# RouteVisualizer props

Defined in `src/types/route.ts` as `RouteVisualizerProps`.

## Required

| Prop | Type | Description |
|------|------|-------------|
| `route` | `RouteData` | Full route including hops, amounts, slippage |

## Optional

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `"light" \| "dark" \| "auto"` | `"auto"` | Color theme; auto follows `prefers-color-scheme` |
| `showSlippage` | `boolean` | `true` | Show per-hop and total slippage |
| `showPoolIds` | `boolean` | `true` | Show pool ID labels on hop arrows |
| `maxHopsShown` | `number` | undefined | Truncate long routes with overflow message |
| `className` | `string` | undefined | Container CSS class |
| `style` | `React.CSSProperties` | undefined | Inline container styles |

## Import

```tsx
import { RouteVisualizer } from "@stellarroute/route-visualizer";
import type { RouteData } from "@stellarroute/route-visualizer";
```

## Export surface

Public API is re-exported from `src/index.ts`. Only documented props are semver-stable.

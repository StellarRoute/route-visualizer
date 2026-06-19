# Component structure

## Entry

`src/index.ts` exports:

- `RouteVisualizer` component
- Types from `src/types/`

## Component tree (conceptual)

```
RouteVisualizer
  ├── RouteHeader (source/destination amounts)
  ├── HopList
  │     └── HopRow (per RouteHop)
  │           ├── AssetBadge
  │           ├── PoolTypeLabel
  │           └── SlippageBadge
  └── RouteFooter (total slippage)
```

Exact file names live under `src/components/`. Each subfolder typically exports via `index.ts`.

## Utilities

`src/utils/format.ts` formats asset codes (truncated issuer), slippage percentages, and pool ID display strings. Unit tests in `format.test.ts`.

## Styles

Component styles use CSS modules or co-located CSS with tokens from `src/styles/tokens.css`. Theme prop toggles light/dark class on the root container.

## Testing

Components tested with Vitest and Testing Library (`src/test-setup.ts` configures jsdom).

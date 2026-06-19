# CSS tokens

File: `src/styles/tokens.css`

The library exposes design tokens as CSS custom properties on the visualizer root. Override them on a parent element or globally.

## Common tokens

| Token | Purpose |
|-------|---------|
| `--rv-accent` | Primary accent color |
| `--rv-bg` | Container background |
| `--rv-text` | Primary text |
| `--rv-text-muted` | Secondary labels |
| `--rv-border` | Hop connector lines |
| `--rv-amm-color` | AMM pool badge |
| `--rv-orderbook-color` | Order book badge |

## Example override

```css
.my-swap-panel {
  --rv-accent: #7c3aed;
  --rv-bg: #fafafa;
}
```

```tsx
<RouteVisualizer route={route} className="my-swap-panel" />
```

## Dark theme

When `theme="dark"` or auto resolves to dark, the root applies a dark token preset. Override tokens after the component mounts if you need brand-specific dark palettes.

See full token list in `src/styles/tokens.css`.

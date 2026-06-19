# Slippage severity colors

Implemented in slippage badge components using thresholds from README.

## Thresholds

| Slippage (`slippagePct`) | Color | Meaning |
|--------------------------|-------|---------|
| `< 1` | Green | Normal |
| `1` to `2.99` | Amber | Worth noting |
| `>= 3` | Red | High; user should review |

Values are percentages (e.g. `0.15` is 0.15%, well within green).

## Per-hop vs total

When `showSlippage={true}`:

- Each hop displays its own `RouteHop.slippagePct`
- Footer shows `RouteData.totalSlippagePct`

## Accessibility

Do not rely on color alone in host apps. The badge includes numeric percentage text for screen readers.

## Customization

Override `--rv-slippage-low`, `--rv-slippage-medium`, and `--rv-slippage-high` tokens if your design system uses different breakpoints (document overrides in host app CSS).

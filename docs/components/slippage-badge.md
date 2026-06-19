# SlippageBadge styling

Severity drives CSS module class selection.

## Classes

| Severity | Class | Visual |
|----------|-------|--------|
| normal | `.normal` | Transparent background, `--rv-success` text |
| warning | `.warning` | `--rv-warning` on `--rv-warning-bg` |
| danger | `.danger` | `--rv-danger` on `--rv-danger-bg` |

Severity comes from `slippageSeverity()` in `utils/format.ts` (1% and 3% thresholds).

Older docs referencing `--rv-slippage-low` tokens do not match `tokens.css`; use the classes above.

See `SlippageBadge.module.css`.

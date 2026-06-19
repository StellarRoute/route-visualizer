# Format utilities

`src/utils/format.ts` centralizes display rules used by nodes and badges.

| Function | Behavior |
|----------|----------|
| `formatAsset` | Missing issuer → `"XLM"`; else asset `code` |
| `formatIssuer` | Native → `"native"`; else first 4 + `…` + last 4 chars |
| `formatPoolId` | Length ≤12 unchanged; else 6 + `…` + 4 |
| `formatSlippage` | Two decimal places with `%` suffix |
| `slippageSeverity` | `<1` normal, `1-3` warning, `≥3` danger |

Utilities are **not** re-exported from `src/index.ts`; copy patterns or import from the package source path in monorepos.

Tests live in `format.test.ts`.

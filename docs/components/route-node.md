# RouteNode display rules

Each node renders a circular asset bubble and text labels.

## Bubble

48px circle shows first four characters of `asset.code` (uppercase styling in CSS).

## Text lines

- Full asset code below the bubble
- Issuer line: `"native"` for XLM, otherwise truncated via `formatIssuer`

## label prop

Optional override for accessibility `aria-label` and visible caption (for example `Source: XLM`).

See `RouteNode.tsx`, `RouteNode.module.css`, and `RouteNode.test.tsx`.

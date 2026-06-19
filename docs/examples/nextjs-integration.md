# Next.js integration

Route visualizer renders client-side only (DOM and `prefers-color-scheme`).

## App Router (Next.js 13+)

```tsx
"use client";

import { RouteVisualizer } from "@stellarroute/route-visualizer";
import type { RouteData } from "@stellarroute/route-visualizer";

export function RoutePanel({ route }: { route: RouteData }) {
  return (
    <div className="rounded-lg border p-4">
      <RouteVisualizer route={route} theme="auto" />
    </div>
  );
}
```

Fetch quote data in a Server Component or route handler, pass serialized `RouteData` as props to the client panel.

## CSS tokens in Next.js

Import global overrides in `app/globals.css`:

```css
.swap-route {
  --rv-accent: var(--brand-primary);
}
```

## SSR note

Do not import the visualizer in Server Components without `"use client"`. No SSR-specific API is required; the component mounts normally on the client.

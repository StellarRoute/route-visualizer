# maxHopsShown truncation

When `maxHopsShown` is set and `hops.length` exceeds it, the diagram slices the hop array.

## Visible hops

`visibleHops = hops.slice(0, maxHopsShown)`

## Overflow message

Renders `…and N more hop(s` with correct pluralization when truncated.

## Label quirk

The last **visible** node receives `Intermediate:` label even if it would have been the destination, because the true destination hop is hidden. Full destination label appears only when all hops are shown.

See `RouteDiagram.tsx` and `RouteVisualizer.test.tsx`.

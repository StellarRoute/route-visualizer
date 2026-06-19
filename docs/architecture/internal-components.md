# Internal component tree

Actual render tree (not aspirational names from early drafts):

```
RouteVisualizer
├── RouteDiagram
│   ├── RouteNode (source)
│   ├── RouteArrow (+ optional SlippageBadge child)
│   ├── RouteNode (intermediate/destination)
│   └── … repeated per hop
└── summary row with SlippageBadge (total slippage)
```

There is no `RouteHeader`, `HopList`, or separate legend component in source today.

See `src/components/RouteVisualizer.tsx` and `RouteDiagram.tsx`.

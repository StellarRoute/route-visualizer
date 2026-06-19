# Responsive layout

The diagram switches from horizontal scroll to vertical stack at narrow widths.

## Desktop flow

`RouteDiagram.module.css` uses flex row layout with `overflow-x: auto` so long multi-hop routes scroll horizontally instead of clipping.

## 480px breakpoint

Below 480px width the flow column stacks vertically. `RouteArrow.module.css` rotates the arrow for top-to-bottom reading order.

Test responsive behavior in Storybook with narrow viewport or browser devtools.

See `src/components/RouteDiagram/RouteDiagram.module.css` and `RouteArrow.module.css`.

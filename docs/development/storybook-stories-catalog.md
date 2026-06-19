# Storybook stories catalog

`src/stories/RouteVisualizer.stories.tsx` demonstrates common route shapes.

## Stories

| Story | Purpose |
|-------|---------|
| Default | Three-hop balanced route |
| DarkTheme | Explicit dark `data-rv-theme` |
| HighSlippage | Warning/danger badge colors |
| NoSlippage | Zero slippage hops |
| NoPoolIds | `showPoolIds={false}` |
| TruncatedHops | `maxHopsShown` overflow |
| FiveHopFull | Long route without truncation |

## Fixtures

Shared hop data in story file: `threeHop`, `highSlippage`, `fiveHop` objects.

## Preview

`.storybook/preview.ts` imports tokens and sets centered layout default.

Run `npm run storybook` locally before publishing Storybook to GitHub Pages.

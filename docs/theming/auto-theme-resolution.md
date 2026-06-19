# Auto theme resolution

`RouteVisualizer` supports `theme="auto"` to follow the OS color scheme.

## resolveTheme()

When theme is `auto`, the component reads `window.matchMedia("(prefers-color-scheme: dark)")` and maps to `"light"` or `"dark"` for `data-rv-theme`.

## useEffect listener

For `auto`, a `change` listener re-applies the theme when the user toggles system appearance. The listener is removed on unmount or when theme changes away from `auto`.

## SSR and first paint

The JSX sets `data-rv-theme={theme === "auto" ? undefined : theme}` on first render. The effect then sets the resolved value on the container ref. Server-rendered HTML may briefly lack `data-rv-theme` until hydration.

Host apps using SSR should expect a one-frame flash unless they pass explicit `light` or `dark`.

See `src/components/RouteVisualizer.tsx` and `src/styles/tokens.css`.

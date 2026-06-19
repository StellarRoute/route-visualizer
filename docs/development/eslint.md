# ESLint setup

Linting uses `.eslintrc.cjs` with TypeScript and React plugins.

## Plugins

- `@typescript-eslint`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

## Relaxed rules

- `react/react-in-jsx-scope` off (React 17+ JSX transform)
- `react/prop-types` off (TypeScript covers props)

## CI command

`npm run lint` runs ESLint on `src` with extensions `.ts` and `.tsx`.

Fix lint before opening PRs; CI fails on warnings configured as errors in the config.

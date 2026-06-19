# npm release checklist

Package: `@stellarroute/route-visualizer`

## Pre-release

1. Update version in `package.json` (semver)
2. Run full verification:

```bash
npm run typecheck
npm test
npm run build
npm run lint
```

3. Confirm `files` field in `package.json` includes only `dist/`

## Publish (maintainers)

```bash
npm publish --access public
```

Requires npm org access to `@stellarroute` scope.

## Post-release

1. Git tag: `v<version>`
2. GitHub release notes summarizing visual or API changes
3. Rebuild and deploy Storybook if stories changed

## Breaking changes

Bump major version when `RouteData` or public props change incompatibly. Document migration in CHANGELOG.

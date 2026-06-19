# TypeScript compiler settings

`tsconfig.json` targets strict library authoring.

## Notable flags

- `strict: true`
- `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`
- `declaration: true` with `emitDeclarationOnly` during typecheck build
- `rootDir: "src"`

## Exclusions

Story files (`**/*.stories.*`) are excluded from declaration emit so Storybook fixtures do not ship in `.d.ts` output.

Run `npm run typecheck` in CI before merge.

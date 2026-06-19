# Testing

## Run tests

```bash
npm test              # single run
npm run test:watch    # watch mode
npm run test:coverage # coverage report
```

## Stack

- **Vitest** test runner
- **Testing Library** for component behavior
- **jsdom** environment (`src/test-setup.ts`)

## Utility tests

`src/utils/format.test.ts` covers asset formatting and slippage display edge cases.

## Component tests

Add tests alongside components or under `src/components/**/*.test.tsx`. Prefer asserting visible text and ARIA labels over snapshot-only tests.

## CI

`.github/workflows/ci.yml` runs test, typecheck, lint, and build on push/PR to `main`.

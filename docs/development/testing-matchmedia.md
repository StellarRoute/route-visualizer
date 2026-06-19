# Testing matchMedia in jsdom

`RouteVisualizer` theme tests require a `matchMedia` stub because jsdom does not implement it by default.

## Pattern

In `RouteVisualizer.test.tsx` `beforeEach`:

```typescript
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })),
});
```

The stub must include `addEventListener` and `removeEventListener` for the auto-theme effect.

Global setup in `src/test-setup.ts` may add shared mocks; extend there if multiple components use media queries.

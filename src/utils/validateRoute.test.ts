import { describe, it, expect } from "vitest";
import { validateHopChain } from "./validateRoute";

describe("validateHopChain", () => {
  it("returns no warnings for a consistent chain", () => {
    const warnings = validateHopChain([
      {
        sourceAsset: { code: "XLM" },
        destinationAsset: { code: "USDC" },
        poolType: "amm",
        poolId: "1",
        slippagePct: 0.1,
      },
      {
        sourceAsset: { code: "USDC" },
        destinationAsset: { code: "BTC" },
        poolType: "orderbook",
        poolId: "2",
        slippagePct: 0.2,
      },
    ]);
    expect(warnings).toHaveLength(0);
  });

  it("flags broken intermediate asset links", () => {
    const warnings = validateHopChain([
      {
        sourceAsset: { code: "XLM" },
        destinationAsset: { code: "USDC" },
        poolType: "amm",
        poolId: "1",
        slippagePct: 0.1,
      },
      {
        sourceAsset: { code: "ETH" },
        destinationAsset: { code: "BTC" },
        poolType: "orderbook",
        poolId: "2",
        slippagePct: 0.2,
      },
    ]);
    expect(warnings).toHaveLength(1);
  });
});

import { describe, expect, it } from "vitest";
import { parsePathStepSource } from "./parsePathStep";

describe("parsePathStepSource", () => {
  it("maps sdex to orderbook pool", () => {
    expect(parsePathStepSource("sdex")).toEqual({ poolType: "orderbook", poolId: "sdex" });
  });

  it("maps amm prefix to pool address", () => {
    expect(parsePathStepSource("amm:CA3DPOOL")).toEqual({
      poolType: "amm",
      poolId: "CA3DPOOL",
    });
  });
});

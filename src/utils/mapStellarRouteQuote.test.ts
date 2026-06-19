import { describe, expect, it } from "vitest";
import { mapStellarRouteQuote } from "./mapStellarRouteQuote";

describe("mapStellarRouteQuote", () => {
  it("maps a two-hop quote into RouteData", () => {
    const route = mapStellarRouteQuote(
      {
        base: "native",
        quote: "USDC",
        total: "99500000",
        price_impact_bps: 50,
        path: [
          { venue_type: "sdex", selling_asset: "native", buying_asset: "USDC" },
          { venue_type: "amm", selling_asset: "USDC", buying_asset: "BTC" },
        ],
      },
      "100000000",
    );

    expect(route.hops).toHaveLength(2);
    expect(route.sourceAsset.code).toBe("XLM");
    expect(route.totalSlippagePct).toBe(0.5);
  });
});

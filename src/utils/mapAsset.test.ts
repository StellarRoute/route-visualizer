import { describe, expect, it } from "vitest";
import { mapStellarAsset } from "./mapAsset";

describe("mapStellarAsset", () => {
  it("maps native to XLM without issuer", () => {
    expect(mapStellarAsset({ asset_type: "native" })).toEqual({ code: "XLM" });
  });

  it("maps credit asset with code and issuer", () => {
    expect(
      mapStellarAsset({
        asset_type: "credit_alphanum4",
        asset_code: "USDC",
        asset_issuer: "GABC1234",
      }),
    ).toEqual({ code: "USDC", issuer: "GABC1234" });
  });
});

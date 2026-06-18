// Tests RouteArrow renders pool type labels and pool IDs correctly
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouteArrow } from "./RouteArrow";
import type { RouteHop } from "../../types";

const ammHop: RouteHop = {
  sourceAsset: { code: "XLM" },
  destinationAsset: { code: "USDC", issuer: "GABC" },
  poolType: "amm",
  poolId: "pool_amm_001",
  slippagePct: 0.15,
};

const obHop: RouteHop = {
  ...ammHop,
  poolType: "orderbook",
  poolId: "ob_12345",
};

describe("RouteArrow", () => {
  it("renders AMM label", () => {
    render(<RouteArrow hop={ammHop} showPoolIds={true} />);
    expect(screen.getByText("AMM")).toBeInTheDocument();
  });

  it("renders Order Book label", () => {
    render(<RouteArrow hop={obHop} showPoolIds={true} />);
    expect(screen.getByText("Order Book")).toBeInTheDocument();
  });

  it("shows pool ID when showPoolIds is true", () => {
    render(<RouteArrow hop={ammHop} showPoolIds={true} />);
    // pool_amm_001 is exactly 12 chars so formatPoolId returns it unchanged
    expect(screen.getByText("pool_amm_001")).toBeInTheDocument();
  });

  it("hides pool ID when showPoolIds is false", () => {
    render(<RouteArrow hop={ammHop} showPoolIds={false} />);
    expect(screen.queryByText(/pool/)).toBeNull();
  });

  it("has accessible role", () => {
    render(<RouteArrow hop={ammHop} showPoolIds={false} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

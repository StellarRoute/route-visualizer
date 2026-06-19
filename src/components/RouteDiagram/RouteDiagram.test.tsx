import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouteDiagram } from "./RouteDiagram";
import type { RouteData } from "../../types";

const sampleRoute: RouteData = {
  hops: [
    {
      sourceAsset: { code: "XLM" },
      destinationAsset: { code: "USDC", issuer: "GABC" },
      poolType: "amm",
      poolId: "pool-1",
      slippagePct: 0.5,
    },
  ],
  totalSlippagePct: 0.5,
  sourceAsset: { code: "XLM" },
  destinationAsset: { code: "USDC", issuer: "GABC" },
  sourceAmount: "1000000000",
  destinationAmount: "995000000",
};

describe("RouteDiagram", () => {
  it("renders empty state when no hops", () => {
    render(
      <RouteDiagram
        route={{ ...sampleRoute, hops: [] }}
        showSlippage
        showPoolIds
      />,
    );
    expect(screen.getByRole("status")).toHaveTextContent("No route hops");
  });

  it("truncates hops when maxHopsShown is set", () => {
    const multiHop: RouteData = {
      ...sampleRoute,
      hops: [
        sampleRoute.hops[0],
        { ...sampleRoute.hops[0], poolId: "pool-2" },
        { ...sampleRoute.hops[0], poolId: "pool-3" },
      ],
    };
    render(
      <RouteDiagram route={multiHop} showSlippage showPoolIds maxHopsShown={1} />,
    );
    expect(screen.getByText(/more hop/)).toBeInTheDocument();
  });
});

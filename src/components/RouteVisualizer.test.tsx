// Integration tests for the top-level RouteVisualizer component
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouteVisualizer } from "./RouteVisualizer";
import type { RouteData } from "../types";

// matchMedia not available in jsdom; stub it
beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });
});

const threeHopRoute: RouteData = {
  sourceAsset: { code: "XLM" },
  destinationAsset: { code: "BTC", issuer: "GBTC_ISSUER_XXXX" },
  sourceAmount: "1000",
  destinationAmount: "0.0012",
  totalSlippagePct: 0.45,
  hops: [
    {
      sourceAsset: { code: "XLM" },
      destinationAsset: { code: "USDC", issuer: "GUSDC_ISSUER_XX" },
      poolType: "amm",
      poolId: "amm_xlm_usdc_001",
      slippagePct: 0.12,
    },
    {
      sourceAsset: { code: "USDC", issuer: "GUSDC_ISSUER_XX" },
      destinationAsset: { code: "BTC", issuer: "GBTC_ISSUER_XXXX" },
      poolType: "orderbook",
      poolId: "ob_usdc_btc_002",
      slippagePct: 0.33,
    },
  ],
};

describe("RouteVisualizer", () => {
  it("renders all asset nodes", () => {
    render(<RouteVisualizer route={threeHopRoute} />);
    expect(screen.getAllByText("XLM").length).toBeGreaterThan(0);
    expect(screen.getAllByText("USDC").length).toBeGreaterThan(0);
    expect(screen.getAllByText("BTC").length).toBeGreaterThan(0);
  });

  it("renders total slippage summary by default", () => {
    render(<RouteVisualizer route={threeHopRoute} />);
    expect(screen.getByText("Total slippage")).toBeInTheDocument();
  });

  it("hides slippage when showSlippage is false", () => {
    render(<RouteVisualizer route={threeHopRoute} showSlippage={false} />);
    expect(screen.queryByText("Total slippage")).toBeNull();
  });

  it("hides pool IDs when showPoolIds is false", () => {
    render(<RouteVisualizer route={threeHopRoute} showPoolIds={false} />);
    expect(screen.queryByText(/amm_xlm/)).toBeNull();
  });

  it("truncates hops when maxHopsShown is set", () => {
    const longRoute: RouteData = {
      ...threeHopRoute,
      hops: [
        ...threeHopRoute.hops,
        {
          sourceAsset: { code: "BTC", issuer: "GBTC_ISSUER_XXXX" },
          destinationAsset: { code: "ETH", issuer: "GETH_ISSUER_XXXX" },
          poolType: "amm",
          poolId: "amm_btc_eth_003",
          slippagePct: 0.1,
        },
      ],
    };
    render(<RouteVisualizer route={longRoute} maxHopsShown={1} />);
    expect(screen.getByText(/and 2 more hops/)).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <RouteVisualizer route={threeHopRoute} className="my-custom-class" />
    );
    expect(container.firstChild).toHaveClass("my-custom-class");
  });
});

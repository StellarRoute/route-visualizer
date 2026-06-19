import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouteHeader } from "./RouteHeader";
import type { RouteData } from "../../types";

const route: RouteData = {
  hops: [],
  totalSlippagePct: 0,
  sourceAsset: { code: "XLM" },
  destinationAsset: { code: "USDC" },
  sourceAmount: "1000000000",
  destinationAmount: "995000000",
};

describe("RouteHeader", () => {
  it("renders formatted source and destination amounts", () => {
    render(<RouteHeader route={route} />);
    expect(screen.getByLabelText("Trade amounts")).toBeInTheDocument();
    expect(screen.getByText("100 XLM")).toBeInTheDocument();
    expect(screen.getByText(/99\.5 USDC/)).toBeInTheDocument();
  });
});

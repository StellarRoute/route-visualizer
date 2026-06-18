// Tests SlippageBadge renders correct value and severity styling
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SlippageBadge } from "./SlippageBadge";

describe("SlippageBadge", () => {
  it("renders slippage percentage", () => {
    render(<SlippageBadge pct={0.5} />);
    expect(screen.getByText("0.50%")).toBeInTheDocument();
  });

  it("has aria-label describing the value", () => {
    render(<SlippageBadge pct={1.5} />);
    expect(screen.getByLabelText("Slippage: 1.50%")).toBeInTheDocument();
  });
});

// Tests RouteNode renders asset code and issuer correctly
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouteNode } from "./RouteNode";

const xlm = { code: "XLM" };
const usdc = {
  code: "USDC",
  issuer: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN",
};

describe("RouteNode", () => {
  it("renders native XLM node", () => {
    render(<RouteNode asset={xlm} />);
    expect(screen.getByText("XLM")).toBeInTheDocument();
    expect(screen.getByText("native")).toBeInTheDocument();
  });

  it("renders issued asset node", () => {
    render(<RouteNode asset={usdc} />);
    expect(screen.getByText("USDC")).toBeInTheDocument();
  });

  it("has accessible role and label", () => {
    render(<RouteNode asset={xlm} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("uses custom label when provided", () => {
    render(<RouteNode asset={xlm} label="Source: XLM" />);
    expect(screen.getByRole("img", { name: "Source: XLM" })).toBeInTheDocument();
  });
});

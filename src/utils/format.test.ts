// Unit tests for all formatting utility functions
import { describe, it, expect } from "vitest";
import { formatAsset, formatIssuer, formatPoolId, formatSlippage, formatAmount, slippageSeverity } from "./format";

const xlm = { code: "XLM" };
const usdc = {
  code: "USDC",
  issuer: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN",
};

describe("formatAsset", () => {
  it("returns XLM for native", () => expect(formatAsset(xlm)).toBe("XLM"));
  it("returns code for issued asset", () => expect(formatAsset(usdc)).toBe("USDC"));
});

describe("formatIssuer", () => {
  it("returns native for XLM", () => expect(formatIssuer(xlm)).toBe("native"));
  it("truncates long issuer", () => expect(formatIssuer(usdc)).toBe("GA5Z…KZVN"));
  it("truncates to first 4 + last 4 chars", () => {
    const result = formatIssuer(usdc);
    expect(result).toMatch(/^.{4}….{4}$/);
  });
});

describe("formatPoolId", () => {
  it("returns short ids unchanged", () => expect(formatPoolId("abc123")).toBe("abc123"));
  it("truncates long pool ids", () => {
    const result = formatPoolId("abcdef1234567890");
    expect(result).toMatch(/^.{6}….{4}$/);
  });
});

describe("formatSlippage", () => {
  it("formats to 2 decimal places with percent sign", () => {
    expect(formatSlippage(0.5)).toBe("0.50%");
    expect(formatSlippage(1.234)).toBe("1.23%");
    expect(formatSlippage(0)).toBe("0.00%");
  });
});

describe("formatAmount", () => {
  it("formats stroops into asset units", () => {
    expect(formatAmount("10000000", xlm)).toBe("1 XLM");
  });
  it("handles zero", () => {
    expect(formatAmount("0", usdc)).toBe("0 USDC");
  });
});

describe("slippageSeverity", () => {
  it("returns normal for < 1%", () => expect(slippageSeverity(0.5)).toBe("normal"));
  it("returns warning for >= 1%", () => expect(slippageSeverity(1)).toBe("warning"));
  it("returns warning for 2.99%", () => expect(slippageSeverity(2.99)).toBe("warning"));
  it("returns danger for >= 3%", () => expect(slippageSeverity(3)).toBe("danger"));
  it("returns danger for > 3%", () => expect(slippageSeverity(5)).toBe("danger"));
});

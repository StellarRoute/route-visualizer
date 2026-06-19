// Formatting helpers for assets, pool IDs, and slippage values
import type { StellarAsset } from "../types";

export function formatAsset(asset: StellarAsset): string {
  if (asset.code === "XLM" && !asset.issuer) return "XLM";
  return asset.code;
}

export function formatIssuer(asset: StellarAsset): string {
  if (!asset.issuer) return "native";
  const { issuer } = asset;
  if (issuer.length <= 12) return issuer;
  return `${issuer.slice(0, 4)}…${issuer.slice(-4)}`;
}

export function formatPoolId(poolId: string): string {
  if (poolId.length <= 12) return poolId;
  return `${poolId.slice(0, 6)}…${poolId.slice(-4)}`;
}

export function formatSlippage(pct: number): string {
  return `${pct.toFixed(2)}%`;
}

const STELLAR_DECIMALS = 7;

export function formatAmount(amount: string, asset: StellarAsset): string {
  const code = formatAsset(asset);
  const trimmed = amount.trim();
  if (!trimmed || trimmed === "0") {
    return `0 ${code}`;
  }
  if (trimmed.includes(".")) {
    return `${trimmed} ${code}`;
  }
  const numeric = BigInt(trimmed);
  const divisor = BigInt(10 ** STELLAR_DECIMALS);
  const whole = numeric / divisor;
  const fraction = numeric % divisor;
  if (fraction === BigInt(0)) {
    return `${whole.toString()} ${code}`;
  }
  const fractionStr = fraction.toString().padStart(STELLAR_DECIMALS, "0").replace(/0+$/, "");
  return `${whole.toString()}.${fractionStr} ${code}`;
}

export function slippageSeverity(pct: number): "normal" | "warning" | "danger" {
  if (pct >= 3) return "danger";
  if (pct >= 1) return "warning";
  return "normal";
}

// Formatting helpers for assets, pool IDs, and slippage values
import type { StellarAsset } from "../types";

export function formatAsset(asset: StellarAsset): string {
  if (!asset.issuer) return "XLM";
  return asset.code;
}

export function formatIssuer(asset: StellarAsset): string {
  if (!asset.issuer) return "native";
  const { issuer } = asset;
  return `${issuer.slice(0, 4)}…${issuer.slice(-4)}`;
}

export function formatPoolId(poolId: string): string {
  if (poolId.length <= 12) return poolId;
  return `${poolId.slice(0, 6)}…${poolId.slice(-4)}`;
}

export function formatSlippage(pct: number): string {
  return `${pct.toFixed(2)}%`;
}

export function slippageSeverity(pct: number): "normal" | "warning" | "danger" {
  if (pct >= 3) return "danger";
  if (pct >= 1) return "warning";
  return "normal";
}

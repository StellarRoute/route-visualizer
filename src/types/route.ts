// Core data contract: mirrors the StellarRoute engine path response shape
import type { CSSProperties } from "react";

export type PoolType = "amm" | "orderbook";

export interface StellarAsset {
  code: string;
  issuer?: string; // undefined for native XLM
}

export interface RouteHop {
  sourceAsset: StellarAsset;
  destinationAsset: StellarAsset;
  poolType: PoolType;
  poolId: string;
  slippagePct: number; // e.g. 0.15 means 0.15%
}

export interface RouteData {
  hops: RouteHop[];
  totalSlippagePct: number;
  sourceAsset: StellarAsset;
  destinationAsset: StellarAsset;
  sourceAmount: string;
  destinationAmount: string;
}

export type Theme = "light" | "dark" | "auto";

export interface RouteVisualizerProps {
  route: RouteData;
  theme?: Theme;
  showSlippage?: boolean;
  showPoolIds?: boolean;
  showAmounts?: boolean;
  maxHopsShown?: number;
  className?: string;
  style?: CSSProperties;
}

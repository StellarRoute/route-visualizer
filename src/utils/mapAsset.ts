// Convert StellarRoute API asset shapes into visualizer StellarAsset.
import type { StellarAsset } from "../types";

export type StellarRouteAssetInfo = {
  asset_type: string;
  asset_code?: string;
  asset_issuer?: string;
};

export function mapStellarAsset(info: StellarRouteAssetInfo): StellarAsset {
  if (info.asset_type === "native") {
    return { code: "XLM" };
  }
  return {
    code: info.asset_code ?? "UNKNOWN",
    issuer: info.asset_issuer,
  };
}

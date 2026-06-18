// Renders a single asset circle with asset code and issuer label
import type { StellarAsset } from "../../types";
import { formatAsset, formatIssuer } from "../../utils";
import styles from "./RouteNode.module.css";

interface RouteNodeProps {
  asset: StellarAsset;
  label?: string;
}

export function RouteNode({ asset, label }: RouteNodeProps) {
  const code = formatAsset(asset);
  const issuer = formatIssuer(asset);
  const ariaLabel = label ?? `Asset: ${code}${asset.issuer ? ` issued by ${issuer}` : " (native XLM)"}`;

  return (
    <div className={styles.node} role="img" aria-label={ariaLabel}>
      <div className={styles.bubble}>{code.slice(0, 4)}</div>
      <span className={styles.code}>{code}</span>
      <span className={styles.issuer}>{issuer}</span>
    </div>
  );
}

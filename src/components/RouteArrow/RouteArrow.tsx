// Renders the directional arrow between two nodes, with pool type and ID labels
import type { RouteHop } from "../../types";
import { formatPoolId } from "../../utils";
import styles from "./RouteArrow.module.css";

interface RouteArrowProps {
  hop: RouteHop;
  showPoolIds: boolean;
  children?: React.ReactNode; // slot for SlippageBadge
}

export function RouteArrow({ hop, showPoolIds, children }: RouteArrowProps) {
  const poolLabel = hop.poolType === "amm" ? "AMM" : "Order Book";
  const poolTypeClass = hop.poolType === "amm" ? styles.poolTypeAmm : styles.poolTypeOrderbook;
  const ariaLabel = `Route via ${poolLabel}${showPoolIds ? ` pool ${hop.poolId}` : ""}`;

  return (
    <div className={styles.wrapper} role="img" aria-label={ariaLabel}>
      <div className={styles.label}>
        <span className={`${styles.poolType} ${poolTypeClass}`}>{poolLabel}</span>
        {showPoolIds && <span className={styles.poolId}>{formatPoolId(hop.poolId)}</span>}
        {children}
      </div>
      <div className={styles.line}>
        <div className={styles.shaft} />
        <div className={styles.arrowHead} />
      </div>
    </div>
  );
}

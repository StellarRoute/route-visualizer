// Displays source and destination trade amounts above the hop diagram.
import type { RouteData } from "../../types";
import { formatAmount, formatAsset } from "../../utils/format";
import styles from "./RouteHeader.module.css";

export interface RouteHeaderProps {
  route: RouteData;
}

export function RouteHeader({ route }: RouteHeaderProps) {
  return (
    <div className={styles.header} aria-label="Trade amounts">
      <span className={styles.amount}>
        {formatAmount(route.sourceAmount, route.sourceAsset)}
      </span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
      <span className={styles.amount}>
        {formatAmount(route.destinationAmount, route.destinationAsset)}
      </span>
    </div>
  );
}

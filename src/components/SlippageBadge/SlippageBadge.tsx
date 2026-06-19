// Displays a color-coded slippage percentage (green/amber/red thresholds)
import { formatSlippage, slippageSeverity } from "../../utils";
import styles from "./SlippageBadge.module.css";

interface SlippageBadgeProps {
  pct: number;
}

export function SlippageBadge({ pct }: SlippageBadgeProps) {
  const severity = slippageSeverity(pct);
  const severityClass = styles[severity];

  return (
    <span
      className={`${styles.badge} ${severityClass}`}
      aria-label={`Slippage: ${formatSlippage(pct)} (${severity})`}
    >
      {formatSlippage(pct)}
    </span>
  );
}

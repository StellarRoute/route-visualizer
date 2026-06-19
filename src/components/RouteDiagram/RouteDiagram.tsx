// Assembles RouteNode + RouteArrow + SlippageBadge into the full flow diagram
import type { RouteData } from "../../types";
import { formatSlippage, formatAsset } from "../../utils";
import { RouteNode } from "../RouteNode";
import { RouteArrow } from "../RouteArrow";
import { SlippageBadge } from "../SlippageBadge";
import styles from "./RouteDiagram.module.css";

interface RouteDiagramProps {
  route: RouteData;
  showSlippage: boolean;
  showPoolIds: boolean;
  maxHopsShown?: number;
}

export function RouteDiagram({ route, showSlippage, showPoolIds, maxHopsShown }: RouteDiagramProps) {
  const { hops, totalSlippagePct } = route;

  if (hops.length === 0) {
    return (
      <div className={styles.empty} role="status">
        No route hops to display
      </div>
    );
  }

  const truncated = maxHopsShown !== undefined && hops.length > maxHopsShown;
  const visibleHops = truncated ? hops.slice(0, maxHopsShown) : hops;
  const hiddenCount = hops.length - visibleHops.length;

  const routeDescription = hops
    .map((h, i) => {
      const from = formatAsset(h.sourceAsset);
      const to = formatAsset(h.destinationAsset);
      return i === 0 ? `${from} to ${to}` : `to ${to}`;
    })
    .join(", ");

  return (
    <div
      className={styles.flow}
      role="group"
      aria-label={`Trade route: ${routeDescription}. Total slippage: ${formatSlippage(totalSlippagePct)}`}
    >
      {visibleHops.map((hop, index) => (
        <div key={`${hop.poolId}-${index}`} style={{ display: "contents" }}>
          {index === 0 && (
            <RouteNode
              asset={hop.sourceAsset}
              label={`Source: ${formatAsset(hop.sourceAsset)}`}
            />
          )}
          <RouteArrow hop={hop} showPoolIds={showPoolIds}>
            {showSlippage && <SlippageBadge pct={hop.slippagePct} />}
          </RouteArrow>
          <RouteNode
            asset={hop.destinationAsset}
            label={
              index === visibleHops.length - 1 && !truncated
                ? `Destination: ${formatAsset(hop.destinationAsset)}`
                : `Intermediate: ${formatAsset(hop.destinationAsset)}`
            }
          />
        </div>
      ))}
      {truncated && (
        <div className={styles.truncatedHops}>…and {hiddenCount} more hop{hiddenCount !== 1 ? "s" : ""}</div>
      )}
    </div>
  );
}

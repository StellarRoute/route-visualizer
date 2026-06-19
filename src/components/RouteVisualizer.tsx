// Top-level exported component: handles theming, prop defaults, and composes the diagram
import { useEffect, useRef } from "react";
import type { RouteVisualizerProps, Theme } from "../types";
import { RouteDiagram } from "./RouteDiagram";
import { RouteHeader } from "../RouteHeader";
import { SlippageBadge } from "./SlippageBadge";
import "../styles/tokens.css";
import styles from "./RouteVisualizer.module.css";

function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return theme;
}

export function RouteVisualizer({
  route,
  theme = "auto",
  showSlippage = true,
  showPoolIds = true,
  showAmounts = true,
  maxHopsShown,
  className,
  style,
}: RouteVisualizerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const applyTheme = () => {
      el.setAttribute("data-rv-theme", resolveTheme(theme));
    };

    applyTheme();

    if (theme !== "auto") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", applyTheme);
    return () => mq.removeEventListener("change", applyTheme);
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className ?? ""}`.trim()}
      style={style}
      data-rv-theme={theme === "auto" ? undefined : theme}
    >
      {showAmounts && <RouteHeader route={route} />}
      <RouteDiagram
        route={route}
        showSlippage={showSlippage}
        showPoolIds={showPoolIds}
        maxHopsShown={maxHopsShown}
      />
      {showSlippage && (
        <div className={styles.summary}>
          <span className={styles.summaryLabel}>Total slippage</span>
          <span className={styles.summaryValue}>
            <SlippageBadge pct={route.totalSlippagePct} />
          </span>
        </div>
      )}
    </div>
  );
}

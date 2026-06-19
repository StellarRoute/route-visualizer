// Maps StellarRoute quote API responses into RouteData for the visualizer.
import type { RouteData, RouteHop, StellarAsset } from "../types";

interface StellarRouteQuoteResponse {
  path?: Array<{
    venue_type?: string;
    venue?: string;
    selling_asset?: string;
    buying_asset?: string;
    sell?: string;
    buy?: string;
  }>;
  price_impact_bps?: number;
  total?: string;
  amount?: string;
  base?: string;
  quote?: string;
}

function parseAsset(raw: string | undefined): StellarAsset {
  if (!raw || raw === "native" || raw === "XLM") {
    return { code: "XLM" };
  }
  if (raw.includes(":")) {
    const [code, issuer] = raw.split(":", 2);
    return { code, issuer };
  }
  return { code: raw };
}

function venueToPoolType(venue: string | undefined): RouteHop["poolType"] {
  const normalized = (venue ?? "").toLowerCase();
  return normalized.includes("amm") ? "amm" : "orderbook";
}

export function mapStellarRouteQuote(
  response: StellarRouteQuoteResponse,
  sourceAmount: string,
): RouteData {
  const path = response.path ?? [];
  const hops: RouteHop[] = path.map((step, index) => {
    const sell = step.selling_asset ?? step.sell ?? "";
    const buy = step.buying_asset ?? step.buy ?? "";
    const next = path[index + 1];
    return {
      sourceAsset: parseAsset(sell),
      destinationAsset: parseAsset(next ? (next.selling_asset ?? next.sell ?? buy) : buy),
      poolType: venueToPoolType(step.venue_type ?? step.venue),
      poolId: `${step.venue_type ?? step.venue ?? "venue"}-${index}`,
      slippagePct: (response.price_impact_bps ?? 0) / 100,
    };
  });

  const sourceAsset = hops[0]?.sourceAsset ?? parseAsset(response.base);
  const destinationAsset = hops.at(-1)?.destinationAsset ?? parseAsset(response.quote);

  return {
    hops,
    totalSlippagePct: (response.price_impact_bps ?? 0) / 100,
    sourceAsset,
    destinationAsset,
    sourceAmount,
    destinationAmount: response.total ?? sourceAmount,
  };
}

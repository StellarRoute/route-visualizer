// Map StellarRoute PathStep.source strings into visualizer pool fields.
export type ParsedPathStep = {
  poolType: "amm" | "orderbook";
  poolId: string;
};

export function parsePathStepSource(source: string): ParsedPathStep {
  if (source === "sdex" || source === "orderbook") {
    return { poolType: "orderbook", poolId: "sdex" };
  }
  if (source.startsWith("amm:")) {
    return { poolType: "amm", poolId: source.slice(4) };
  }
  return { poolType: "orderbook", poolId: source };
}

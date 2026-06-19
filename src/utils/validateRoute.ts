// Validates consecutive hops share intermediate assets in a route chain.
import type { RouteHop } from "../types";

export function validateHopChain(hops: RouteHop[]): string[] {
  const warnings: string[] = [];
  for (let i = 0; i < hops.length - 1; i += 1) {
    const currentDest = hops[i].destinationAsset.code;
    const nextSource = hops[i + 1].sourceAsset.code;
    if (currentDest !== nextSource) {
      warnings.push(
        `Hop ${i + 1} destination (${currentDest}) does not match hop ${i + 2} source (${nextSource})`,
      );
    }
  }
  return warnings;
}

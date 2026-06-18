// Storybook stories covering all RouteVisualizer prop variants
import type { Meta, StoryObj } from "@storybook/react";
import { RouteVisualizer } from "../components/RouteVisualizer";
import type { RouteData } from "../types";

const threeHop: RouteData = {
  sourceAsset: { code: "XLM" },
  destinationAsset: { code: "BTC", issuer: "GBTCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" },
  sourceAmount: "1000",
  destinationAmount: "0.0012",
  totalSlippagePct: 0.45,
  hops: [
    {
      sourceAsset: { code: "XLM" },
      destinationAsset: { code: "USDC", issuer: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN" },
      poolType: "amm",
      poolId: "0a1b2c3d4e5f6789abcdef",
      slippagePct: 0.12,
    },
    {
      sourceAsset: { code: "USDC", issuer: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN" },
      destinationAsset: { code: "BTC", issuer: "GBTCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" },
      poolType: "orderbook",
      poolId: "orderbook_main_0042",
      slippagePct: 0.33,
    },
  ],
};

const highSlippage: RouteData = {
  ...threeHop,
  totalSlippagePct: 4.2,
  hops: [
    { ...threeHop.hops[0], slippagePct: 1.2 },
    { ...threeHop.hops[1], slippagePct: 3.0 },
  ],
};

const fiveHop: RouteData = {
  sourceAsset: { code: "XLM" },
  destinationAsset: { code: "ETH", issuer: "GETH_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" },
  sourceAmount: "5000",
  destinationAmount: "0.82",
  totalSlippagePct: 1.1,
  hops: [
    { sourceAsset: { code: "XLM" }, destinationAsset: { code: "USDC", issuer: "GUSDC_XX" }, poolType: "amm", poolId: "pool_001", slippagePct: 0.1 },
    { sourceAsset: { code: "USDC", issuer: "GUSDC_XX" }, destinationAsset: { code: "yUSDC", issuer: "GYUSDC_X" }, poolType: "amm", poolId: "pool_002", slippagePct: 0.2 },
    { sourceAsset: { code: "yUSDC", issuer: "GYUSDC_X" }, destinationAsset: { code: "WBTC", issuer: "GWBTC_XX" }, poolType: "orderbook", poolId: "ob_003", slippagePct: 0.3 },
    { sourceAsset: { code: "WBTC", issuer: "GWBTC_XX" }, destinationAsset: { code: "ETH", issuer: "GETH_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" }, poolType: "amm", poolId: "pool_004", slippagePct: 0.5 },
  ],
};

const meta: Meta<typeof RouteVisualizer> = {
  title: "Components/RouteVisualizer",
  component: RouteVisualizer,
  argTypes: {
    theme: { control: "radio", options: ["light", "dark", "auto"] },
  },
};
export default meta;

type Story = StoryObj<typeof RouteVisualizer>;

export const Default: Story = {
  args: { route: threeHop, theme: "light" },
  name: "Default (2-hop, light)",
};

export const DarkTheme: Story = {
  args: { route: threeHop, theme: "dark" },
  name: "Dark theme",
  parameters: { backgrounds: { default: "dark" } },
};

export const HighSlippage: Story = {
  args: { route: highSlippage, theme: "light" },
  name: "High slippage (amber + red)",
};

export const NoSlippage: Story = {
  args: { route: threeHop, theme: "light", showSlippage: false },
  name: "Slippage hidden",
};

export const NoPoolIds: Story = {
  args: { route: threeHop, theme: "light", showPoolIds: false },
  name: "Pool IDs hidden",
};

export const TruncatedHops: Story = {
  args: { route: fiveHop, theme: "light", maxHopsShown: 2 },
  name: "Truncated long route (maxHopsShown=2)",
};

export const FiveHopFull: Story = {
  args: { route: fiveHop, theme: "light" },
  name: "4-hop route (full)",
};

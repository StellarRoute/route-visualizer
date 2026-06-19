import type { Meta, StoryObj } from "@storybook/react";
import { SlippageBadge } from "../components/SlippageBadge";

const meta: Meta<typeof SlippageBadge> = {
  title: "Components/SlippageBadge",
  component: SlippageBadge,
};

export default meta;
type Story = StoryObj<typeof SlippageBadge>;

export const Normal: Story = { args: { pct: 0.4 } };
export const Warning: Story = { args: { pct: 1.5 } };
export const Danger: Story = { args: { pct: 4.2 } };

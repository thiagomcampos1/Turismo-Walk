// src/app/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'lg'],
      },
    },
    intent: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    underline: {
      control: 'boolean',
    },
    href: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    size: 'lg',
    intent: 'primary',
    underline: false,
    children: "Button",
    href: "#",
  },
};

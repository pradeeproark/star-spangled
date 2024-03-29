import { Story } from "@storybook/react";
import React from "react";
import AdjustableNumber, {
  AdjustableNumberProps,
  DISPLAYMODE,
} from "./AdjustableNumber";

export default {
  title: "AdjustableNumber",
  component: AdjustableNumber,
  argTypes: {
    displayNumber: {
      control: {
        type: "number",
      },
    },
    displayMode: {
      control: "radio",
      options: [DISPLAYMODE.DISPLAY, DISPLAYMODE.EDIT],
      defaultValue: DISPLAYMODE.DISPLAY,
    },
    varName: {
      control: "text",
    },
  },
};

const Template: Story<AdjustableNumberProps> = (
  args: JSX.IntrinsicAttributes & AdjustableNumberProps
) => (
  <p>
    Click on the number to adjust <AdjustableNumber {...args} />
  </p>
);

export const DefaultAdjustableNumber = Template.bind({});

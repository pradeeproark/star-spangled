import { Story } from "@storybook/react";
import React from "react";
import AdjustableNumber from "../AdjustableNumber";
import Expression from "../Expression/Expression";
import Spangled, { SpangledProps } from "./Spangled";

export default {
  title: "Spangled",
  component: Spangled,
};

const Template: Story<SpangledProps> = () => (
  <Spangled>
    <p>
      When you eat <AdjustableNumber varName="cookies" displayNumber={3} />{" "}
      cookies, you consume <Expression expression="100*cookies" /> calories.
      That's <Expression expression="((100*cookies)/2000) * 100" />% of your
      recommended daily calories.
    </p>
  </Spangled>
);

export const DefaultSpangled = Template.bind({});

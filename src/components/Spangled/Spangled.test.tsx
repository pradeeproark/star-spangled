import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spangled from "./Spangled";
import React from "react";
import AdjustableNumber from "../AdjustableNumber";
import Expression from "../Expression/Expression";

test("that a spangled document can propogate values and evaluate expressions from children", () => {
  render(
    <Spangled>
      <p>
        When you eat <AdjustableNumber varName="cookies" displayNumber={3} />{" "}
        cookies, you consume <Expression expression="100*cookies" /> calories.
        That's <Expression expression="((100*cookies)/2000) * 100" />% of your
        recommended daily calories.
      </p>
    </Spangled>
  );

  expect(screen.getByTestId("spangled")).toHaveTextContent(
    "When you eat 3 cookies, you consume 300 calories. That's 15% of your recommended daily calories."
  );
});

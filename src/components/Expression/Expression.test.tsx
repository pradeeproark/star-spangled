import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Expression from "./Expression";
import React from "react";
import { VarContext } from "../../interfaces/Common";

test("that a simple expression can be evaluated and displayed", () => {
  // ARRANGE
  render(<Expression expression="2+10" />);

  // ASSERT
  expect(screen.getByText("12")).toBeInTheDocument();
});

test("that a non-existent expression renders appropriate", () => {
  // ARRANGE
  render(<Expression expression="" />);

  // ASSERT
  const expressionTag = screen.queryByTestId("expression");
  expect(expressionTag?.textContent).toBe("");
  expect(expressionTag?.title).toBe("Missing Expression");
});

test("that a expression with vars evaluates fine", () => {
  // ARRANGE
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const updateVars = (k: string, v: number) => {};
  const vars = new Map<string, number>();
  vars.set("x", 10);
  render(
    <VarContext.Provider value={{ vars, updateVars }}>
      <Expression expression="2+x" />
    </VarContext.Provider>
  );

  // ASSERT
  const expressionTag = screen.queryByTestId("expression");
  expect(expressionTag?.textContent).toBe("12");
  expect(expressionTag?.title).toBe("2+x");
});

test("that a expression that is invalid or missing vars renders correctly", () => {
  // ARRANGE
  // eslint-disable-next-line @typescript-eslint/no-empty-function

  render(<Expression expression="2+x" />);

  // ASSERT
  const expressionTag = screen.queryByTestId("expression");
  expect(expressionTag?.textContent).toBe("error");
  expect(expressionTag?.title).toBe("2+x");
});

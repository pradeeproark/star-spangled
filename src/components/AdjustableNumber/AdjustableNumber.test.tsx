import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AdjustableNumber from "./AdjustableNumber";
import React from "react";

test("on load just display given number and no edit controls", () => {
  // ARRANGE
  render(<AdjustableNumber varName="cookies" displayNumber={100} />);

  // ASSERT
  expect(screen.queryByRole("button", { name: /←/i })).not.toBeInTheDocument();
  expect(screen.queryByRole("button", { name: /→/i })).not.toBeInTheDocument();
});

test("on double click show edit controls", () => {
  // ARRANGE
  render(<AdjustableNumber varName="cookies" displayNumber={100} />);

  // ACT
  userEvent.dblClick(screen.getByText("100"));

  // ASSERT
  expect(screen.queryByRole("button", { name: /←/i })).toBeVisible();
  expect(screen.queryByRole("button", { name: /→/i })).toBeVisible();
});

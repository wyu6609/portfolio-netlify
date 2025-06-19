import React from "react";
import { render, screen } from "@testing-library/react";
import ScoreBoard from "./ScoreBoard";

describe("ScoreBoard", () => {
  it("renders score board", () => {
    render(<ScoreBoard />);
    expect(screen.getByText(/score/i)).toBeInTheDocument();
  });
});

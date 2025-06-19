import React from "react";
import { render, screen } from "@testing-library/react";
import Tile from "./Tile";

describe("Tile", () => {
  it("renders tile", () => {
    render(<Tile value={2} />);
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputLabel from "@/components/ui/InputLabel";

describe("InputLabel component", () => {
  it("should render the label text correctly", () => {
    render(<InputLabel text="Label Text" />);
    expect(screen.getByText("Label Text")).toBeInTheDocument();
  });

  it("should apply the correct class to the label", () => {
    render(<InputLabel text="Label Text" />);
    const label = screen.getByText("Label Text");
    expect(label).toHaveClass("text-sm font-normal text-[#212121]");
  });
});

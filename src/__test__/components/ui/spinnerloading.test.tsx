import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SpinnerLoading } from "@/components/ui/SpinnerLoading";

describe("SpinnerLoading component", () => {
  it("should render the SVG", () => {
    render(<SpinnerLoading />);

    const svgElement = screen.getByTestId("loading-spinner");
    expect(svgElement).toBeInTheDocument();
  });

  it("should have the correct width, height, and viewBox attributes", () => {
    render(<SpinnerLoading />);

    const svgElement = screen.getByTestId("loading-spinner");
    expect(svgElement).toHaveAttribute("width", "21");
    expect(svgElement).toHaveAttribute("height", "20");
    expect(svgElement).toHaveAttribute("viewBox", "0 0 21 20");
  });

  it("should have the animate-spin class", () => {
    render(<SpinnerLoading />);

    const svgElement = screen.getByTestId("loading-spinner");
    expect(svgElement).toHaveClass("animate-spin");
  });

  it("should render the correct path with stroke and strokeWidth", () => {
    render(<SpinnerLoading />);

    const pathElement = screen
      .getByTestId("loading-spinner")
      .querySelector("path");
    expect(pathElement).toHaveAttribute("stroke", "#98a1b2");
    expect(pathElement).toHaveAttribute("stroke-width", "2");
  });

  it("should apply the clipPath properly", () => {
    render(<SpinnerLoading />);

    const clipPathElement = screen
      .getByTestId("loading-spinner")
      .querySelector("clipPath");
    expect(clipPathElement).toBeInTheDocument();
    expect(clipPathElement).toHaveAttribute("id", "clip0_6822_264280");
  });
});

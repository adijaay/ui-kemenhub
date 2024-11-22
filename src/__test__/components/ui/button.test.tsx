import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/ui/Button";

describe("Button component", () => {
  it("should render the button text", () => {
    render(<Button text="Click Me" onClick={jest.fn()} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should call onClick handler when button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" onClick={handleClick} />);
    const button = screen.getByText("Click Me");

    fireEvent.mouseUp(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick if the button is disabled", () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" onClick={handleClick} disabled />);
    const button = screen.getByText("Click Me");

    fireEvent.mouseUp(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should apply the correct class when pressed", () => {
    render(<Button text="Press Me" onClick={jest.fn()} />);
    const button = screen.getByText("Press Me");

    fireEvent.mouseDown(button);

    expect(button).toHaveClass("bg-[#182230]");

    fireEvent.mouseUp(button);
    expect(button).toHaveClass("bg-[#0C111D]");
  });

  it("should apply the correct class when disabled", () => {
    render(<Button text="Disabled Button" onClick={jest.fn()} disabled />);
    const button = screen.getByText("Disabled Button");

    expect(button).toHaveClass("cursor-not-allowed");
    expect(button).toHaveClass("bg-[#EAECF0]");
    expect(button).toHaveClass("!text-[#98A1B2]");
  });
});

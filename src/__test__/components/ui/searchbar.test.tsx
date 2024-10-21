import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Searchbar from "@/components/ui/Searchbar";

describe("Searchbar component", () => {
  const mockOnChange = jest.fn();
  const mockOnClear = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render with the correct placeholder", () => {
    render(
      <Searchbar
        placeholder="Search here..."
        value=""
        onClear={mockOnClear}
        onChange={mockOnChange}
      />,
    );

    const input = screen.getByPlaceholderText("Search here...");
    expect(input).toBeInTheDocument();
  });

  it("should call onChange when typing in the input", () => {
    render(
      <Searchbar
        placeholder="Search..."
        value=""
        onClear={mockOnClear}
        onChange={mockOnChange}
      />,
    );

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "test" } });

    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object)); // You can refine this if you want to inspect the event more closely
  });

  it("should display the clear icon when value is present", () => {
    render(
      <Searchbar
        placeholder="Search..."
        value="test"
        onClear={mockOnClear}
        onChange={mockOnChange}
      />,
    );

    const clearIcon = screen.getByTestId("icon-x");
    expect(clearIcon).toBeInTheDocument();
  });

  it("should call onClear when clear icon is clicked", () => {
    render(
      <Searchbar
        placeholder="Search..."
        value="test"
        onClear={mockOnClear}
        onChange={mockOnChange}
      />,
    );

    const clearIcon = screen.getByTestId("icon-x");
    fireEvent.click(clearIcon);

    expect(mockOnClear).toHaveBeenCalled();
  });
});

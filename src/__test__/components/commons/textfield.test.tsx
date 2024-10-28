import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextField from "@/components/commons/TextField";

describe("TextField Component", () => {
  const mockOnChange = jest.fn();
  const mockOnClear = jest.fn();

  it("should render correctly with a label", () => {
    render(
      <TextField
        type="text"
        label="Test Label"
        placeholder="Enter text"
        value=""
        onChange={mockOnChange}
        onClear={mockOnClear}
      />,
    );

    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("should call onChange when input changes", () => {
    render(
      <TextField
        type="text"
        label="Test Label"
        placeholder="Enter text"
        value=""
        onChange={mockOnChange}
        onClear={mockOnClear}
      />,
    );

    const input = screen.getByPlaceholderText("Enter text");
    fireEvent.change(input, { target: { value: "New value" } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it("should display error message when error is true", () => {
    render(
      <TextField
        type="text"
        label="Test Label"
        placeholder="Enter text"
        value=""
        onChange={mockOnChange}
        onClear={mockOnClear}
        error={true}
        errorDesc="This field is required"
      />,
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("should not display error message when error is false", () => {
    render(
      <TextField
        type="text"
        label="Test Label"
        placeholder="Enter text"
        value=""
        onChange={mockOnChange}
        onClear={mockOnClear}
        error={false}
        errorDesc="This field is required"
      />,
    );

    expect(
      screen.queryByText("This field is required"),
    ).not.toBeInTheDocument();
  });

  it("should call onClear when clear icon is clicked", () => {
    render(
      <TextField
        type="text"
        label="Test Label"
        placeholder="Enter text"
        value="Some value"
        onChange={mockOnChange}
        onClear={mockOnClear}
        clearable={true}
      />,
    );

    const clearButton = screen.getByTestId("icon-x");
    fireEvent.click(clearButton);

    expect(mockOnClear).toHaveBeenCalled();
  });
});

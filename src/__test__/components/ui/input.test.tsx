import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IconX } from "@tabler/icons-react";
import Input from "@/components/ui/Input";

describe("Input component", () => {
  it("should render the input with the correct placeholder", () => {
    render(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={jest.fn()}
        onClear={jest.fn()}
      />,
    );
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("should update the input value on change", () => {
    const handleChange = jest.fn();
    render(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={handleChange}
        onClear={jest.fn()}
      />,
    );
    const input = screen.getByPlaceholderText("Enter text");

    fireEvent.change(input, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should show the clear icon when `clearable` is true and there is a value", () => {
    render(
      <Input
        type="text"
        placeholder="Enter text"
        value="test"
        onChange={jest.fn()}
        onClear={jest.fn()}
        clearable
      />,
    );
    expect(screen.getByTestId("icon-x")).toBeInTheDocument();
  });

  it("should hide the clear icon when `clearable` is false or value is empty", () => {
    const { rerender } = render(
      <Input
        type="text"
        placeholder="Enter text"
        value="test"
        onChange={jest.fn()}
        onClear={jest.fn()}
        clearable={false}
      />,
    );
    expect(screen.queryByTestId("icon-x")).not.toBeInTheDocument();

    rerender(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={jest.fn()}
        onClear={jest.fn()}
        clearable
      />,
    );
    expect(screen.queryByTestId("icon-x")).not.toBeInTheDocument();
  });

  it("should clear the input value when the clear icon is clicked", () => {
    const handleClear = jest.fn();
    render(
      <Input
        type="text"
        placeholder="Enter text"
        value="test"
        onChange={jest.fn()}
        onClear={handleClear}
        clearable
      />,
    );
    const clearIcon = screen.getByTestId("icon-x");

    fireEvent.click(clearIcon);
    expect(handleClear).toHaveBeenCalledTimes(1);
  });

  it("should apply the error class when `error` is true", () => {
    render(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={jest.fn()}
        onClear={jest.fn()}
        error
      />,
    );
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toHaveClass("border-[#F04438]");
  });

  it("should not apply the error class when `error` is false", () => {
    render(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={jest.fn()}
        onClear={jest.fn()}
        error={false}
      />,
    );
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toHaveClass("border-[#D0D5DD]");
  });

  it("should set 'min' attribute to 0 when type is 'number'", () => {
    render(
      <Input
        type="number"
        placeholder="Enter number"
        value="5"
        onChange={jest.fn()}
        onClear={jest.fn()}
      />,
    );
    const input = screen.getByPlaceholderText("Enter number");
    expect(input).toHaveAttribute("min", "0");
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Snackbar from "@/components/ui/Snackbar";

jest.useFakeTimers();

describe("Snackbar component", () => {
  const mockSetShow = jest.fn();

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  it("should render success icon and text when isSuccess is true", () => {
    render(
      <Snackbar
        isShow={true}
        setShow={mockSetShow}
        text="Success message"
        isSuccess={true}
      />,
    );

    expect(screen.getByText("Success message")).toBeInTheDocument();
    expect(screen.getByTestId("success-icon")).toHaveAttribute(
      "fill",
      "#19B26B",
    );
  });

  it("should render error icon and text when isSuccess is false", () => {
    render(
      <Snackbar
        isShow={true}
        setShow={mockSetShow}
        text="Error message"
        isSuccess={false}
      />,
    );

    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.getByTestId("x-icon")).toHaveAttribute("stroke", "#AF2A2D");
  });

  it("should be visible when isShow is true", () => {
    render(
      <Snackbar
        isShow={true}
        setShow={mockSetShow}
        text="Visible message"
        isSuccess={true}
      />,
    );

    const snackbar = screen.getByText("Visible message").parentElement;
    expect(snackbar).toHaveClass("translate-y-0");
  });

  it("should be hidden when isShow is false", () => {
    render(
      <Snackbar
        isShow={false}
        setShow={mockSetShow}
        text="Hidden message"
        isSuccess={true}
      />,
    );

    const snackbar = screen.getByText("Hidden message").parentElement;
    expect(snackbar).toHaveClass("-translate-y-[calc(200%)]");
  });

  it("should hide after 2 seconds", () => {
    render(
      <Snackbar
        isShow={true}
        setShow={mockSetShow}
        text="Auto hide message"
        isSuccess={true}
      />,
    );

    jest.advanceTimersByTime(2000);

    expect(mockSetShow).toHaveBeenCalledWith(false);
  });

  it("should clear the timeout when component unmounts", () => {
    const { unmount } = render(
      <Snackbar
        isShow={true}
        setShow={mockSetShow}
        text="Auto hide message"
        isSuccess={true}
      />,
    );

    unmount();

    jest.advanceTimersByTime(2000);
    expect(mockSetShow).not.toHaveBeenCalled();
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Bottomsheet from "@/components/commons/Bottomsheet";

describe("Bottomsheet Component", () => {
  const mockSetShow = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly with title and children", () => {
    render(
      <Bottomsheet title="Test Title" isShow={true} setShow={mockSetShow}>
        <p>Bottomsheet Content</p>
      </Bottomsheet>,
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Bottomsheet Content")).toBeInTheDocument();
  });

  it("should be visible when isShow is true", () => {
    render(
      <Bottomsheet title="Test Title" isShow={true} setShow={mockSetShow}>
        <p>Bottomsheet Content</p>
      </Bottomsheet>,
    );

    const bottomsheet = screen.getByTestId("bottomsheet");
    expect(bottomsheet).toHaveClass("visible");
    expect(bottomsheet).toHaveClass("opacity-100");
  });

  it("should not be visible when isShow is false", () => {
    render(
      <Bottomsheet title="Test Title" isShow={false} setShow={mockSetShow}>
        <p>Bottomsheet Content</p>
      </Bottomsheet>,
    );

    const bottomsheet = screen.getByTestId("bottomsheet");
    expect(bottomsheet).toHaveClass("invisible");
    expect(bottomsheet).toHaveClass("opacity-0");
  });

  it("should call setShow when close icon is clicked", () => {
    render(
      <Bottomsheet title="Test Title" isShow={true} setShow={mockSetShow}>
        <p>Bottomsheet Content</p>
      </Bottomsheet>,
    );

    const closeButton = screen.getByTestId("close-icon");
    fireEvent.click(closeButton);

    expect(mockSetShow).toHaveBeenCalledWith(false);
  });

  it("should call setShow when backdrop is clicked", () => {
    render(
      <Bottomsheet title="Test Title" isShow={true} setShow={mockSetShow}>
        <p>Bottomsheet Content</p>
      </Bottomsheet>,
    );

    const backdrop = screen.getByTestId("bottomsheet");
    fireEvent.click(backdrop);

    expect(mockSetShow).toHaveBeenCalledWith(false);
  });

  it("should set body overflow to hidden when isShow is true", () => {
    render(
      <Bottomsheet title="Test Title" isShow={true} setShow={mockSetShow}>
        Content
      </Bottomsheet>,
    );

    expect(document.body.style.overflow).toBe("hidden");
  });

  it("should reset body overflow when unmounted or isShow is false", () => {
    const { unmount } = render(
      <Bottomsheet title="Test Title" isShow={true} setShow={mockSetShow}>
        Content
      </Bottomsheet>,
    );

    unmount();
    expect(document.body.style.overflow).toBe("");

    render(
      <Bottomsheet title="Test Title" isShow={false} setShow={mockSetShow}>
        Content
      </Bottomsheet>,
    );
    expect(document.body.style.overflow).toBe("");
  });
});

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Notifikasi from "@/components/commons/Notifikasi";

describe("Notifikasi Component", () => {
  const setShowMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the notification when isShow is true", () => {
    render(
      <Notifikasi
        isShow={true}
        setShow={setShowMock}
        message="Test Message"
        status="info"
      />,
    );

    expect(screen.getByText("Test Message")).toBeInTheDocument();
  });

  it("should not render the notification when isShow is false", () => {
    render(
      <Notifikasi
        isShow={false}
        setShow={setShowMock}
        message="Test Message"
        status="info"
      />,
    );

    expect(screen.queryByText("Test Message")).not.toBeInTheDocument();
  });

  it("should display the correct icon for each status", () => {
    render(
      <Notifikasi
        isShow={true}
        setShow={setShowMock}
        message="Test Message"
        status="caution"
      />,
    );
    expect(screen.getByTestId("icon-caution")).toBeInTheDocument();

    render(
      <Notifikasi
        isShow={true}
        setShow={setShowMock}
        message="Test Message"
        status="alert"
      />,
    );
    expect(screen.getByTestId("icon-alert")).toBeInTheDocument();

    render(
      <Notifikasi
        isShow={true}
        setShow={setShowMock}
        message="Test Message"
        status="info"
      />,
    );
    expect(screen.getByTestId("icon-info")).toBeInTheDocument();
  });

  it("should have correct styles based on status", () => {
    const { rerender } = render(
      <Notifikasi
        isShow={true}
        setShow={setShowMock}
        message="Test Message"
        status="caution"
      />,
    );
    expect(screen.getByTestId("notifikasi")).toHaveClass(
      "!border-[#FEDF88] !bg-[#FFFCF5]",
    );

    rerender(
      <Notifikasi
        isShow={true}
        setShow={setShowMock}
        message="Test Message"
        status="alert"
      />,
    );
    expect(screen.getByTestId("notifikasi")).toHaveClass(
      "!border-[#DBB7B7] !bg-[#F8F2F2]",
    );

    rerender(
      <Notifikasi
        isShow={true}
        setShow={setShowMock}
        message="Test Message"
        status="info"
      />,
    );
    expect(screen.getByTestId("notifikasi")).toHaveClass(
      "!border-[#B2CCFF] !bg-[#F6F8FF]",
    );
  });

  it("should call setShow when the close icon is clicked", () => {
    render(
      <Notifikasi
        isShow={true}
        setShow={setShowMock}
        closeable={true}
        message="Test Message"
        status="info"
      />,
    );

    fireEvent.click(screen.getByTestId("icon-close"));
    expect(setShowMock).toHaveBeenCalledWith(false);
  });

  it("should shake when triggerShake is true", async () => {
    render(
      <Notifikasi
        isShow={true}
        setShow={setShowMock}
        triggerShake={true}
        message="Test Message"
        status="info"
      />,
    );

    const notification = screen.getByTestId("notifikasi");
    expect(notification).toHaveClass("gentle-shake");

    await waitFor(() => {
      expect(notification).not.toHaveClass("gentle-shake");
    });
  });

  it("should render children correctly", () => {
    render(
      <Notifikasi
        isShow={true}
        setShow={setShowMock}
        message="Test Message"
        status="info"
      >
        <span>Child Component</span>
      </Notifikasi>,
    );

    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import CardInfo from "@/components/commons/CardInfo";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("CardInfo Component", () => {
  const mockPush = jest.fn();
  const mockRouter = { push: mockPush };
  (useRouter as jest.Mock).mockReturnValue(mockRouter);

  const props = {
    title: "Card Title",
    desc: "Card Description",
    img: "http://example.com/image.jpg",
    link: "/test-link",
  };

  it("should render with correct props", () => {
    render(<CardInfo {...props} />);

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();

    const img = screen.getByAltText("info");
    expect(img).toHaveAttribute("src", "http://example.com/image.jpg");
  });

  it("should navigate to the correct link on click", () => {
    render(<CardInfo {...props} />);

    fireEvent.click(screen.getByTestId("container"));
    expect(mockPush).toHaveBeenCalledWith("/test-link");
  });

  it("should have the correct accessibility attributes", () => {
    render(<CardInfo {...props} />);

    const img = screen.getByAltText("info");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "http://example.com/image.jpg");
  });
});

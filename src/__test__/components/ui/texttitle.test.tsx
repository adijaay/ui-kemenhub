import TextTitle from "@/components/ui/TextTitle";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("TextTitle component", () => {
  it("should render the text correctly", () => {
    render(<TextTitle>Text</TextTitle>);
    expect(screen.getByText("Text")).toBeInTheDocument();
  });

  it("should render text color default correctly", () => {
    render(<TextTitle>Text</TextTitle>);
    expect(screen.getByTestId("text-title")).toHaveClass("text-[#1f1f1f]");
  });

  it("should render change text color instead default correctly", () => {
    render(<TextTitle className="text-red-500">Text</TextTitle>);
    expect(screen.getByTestId("text-title")).toHaveClass("text-red-500");
  });
});

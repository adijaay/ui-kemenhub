import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Chip from "@/components/ui/Chip";

const MOCK_COMPLETE = "Complete Chip";
const MOCK_WARNING = "Warning Chip";
const MOCK_INFO = "Information Chip";
const MOCK_ERROR = "Error Chip";

describe("Chip component", () => {
  it("should render the text", () => {
    render(<Chip text={MOCK_COMPLETE} type="complete" />);
    expect(screen.getByText(MOCK_COMPLETE)).toBeInTheDocument();
  });

  it('should apply correct styles for "complete" type', () => {
    render(<Chip text={MOCK_COMPLETE} type="complete" />);
    const chip = screen.getByText(MOCK_COMPLETE).parentElement;
    expect(chip).toHaveClass("bg-[#ECFEF3]");
    expect(chip).toHaveClass("text-[#19B26B]");
  });

  it('should apply correct styles for "warning" type', () => {
    render(<Chip text={MOCK_WARNING} type="warning" />);
    const chip = screen.getByText(MOCK_WARNING).parentElement;
    expect(chip).toHaveClass("bg-[#FFFAEA]");
    expect(chip).toHaveClass("text-[#F79008]");
  });

  it('should apply correct styles for "info" type', () => {
    render(<Chip text={MOCK_INFO} type="info" />);
    const chip = screen.getByText(MOCK_INFO).parentElement;
    expect(chip).toHaveClass("bg-[#F6F8FF]");
    expect(chip).toHaveClass("text-[#2871FF]");
  });

  it('should apply correct styles for "error" type', () => {
    render(<Chip text={MOCK_ERROR} type="error" />);
    const chip = screen.getByText(MOCK_ERROR).parentElement;
    expect(chip).toHaveClass("bg-[#F4EAEA]");
    expect(chip).toHaveClass("text-[#AF2A2D]");
  });
});

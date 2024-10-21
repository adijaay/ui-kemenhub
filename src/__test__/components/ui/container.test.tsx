import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Container from "@/components/ui/Container";

const MOCK_TEXT = "CONTAINER_TITLE";

describe("Container component", () => {
  it("should render the children text", () => {
    render(
      <Container>
        <h2>{MOCK_TEXT}</h2>
      </Container>,
    );
    expect(screen.getByText(MOCK_TEXT)).toBeInTheDocument();
  });

  it("should apply correct styles for rounded 'rounded-xl'", () => {
    render(
      <Container rounded="rounded-xl">
        <h2>{MOCK_TEXT}</h2>
      </Container>,
    );
    const container = screen.getByTestId("container");
    expect(container).toHaveClass("rounded-xl");
  });
});

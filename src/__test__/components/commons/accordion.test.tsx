import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Accordion, { IAccordionData } from "@/components/commons/Accordion";

describe("Accordion Component", () => {
  const accordionData: IAccordionData[] = [
    { title: "Item 1", content: "<p>Content for Item 1</p>", isOpen: false },
    { title: "Item 2", content: "<p>Content for Item 2</p>", isOpen: false },
    { title: "Item 3", content: "<p>Content for Item 3</p>", isOpen: false },
  ];

  it("should render the correct number of accordion items", () => {
    render(<Accordion accordionData={accordionData} />);
    expect(screen.getAllByRole("button")).toHaveLength(accordionData.length);
  });

  it("should toggle the content when clicking on the button", () => {
    render(<Accordion accordionData={accordionData} />);

    fireEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getByText("Content for Item 1").parentElement).toHaveClass(
      "block",
    );

    fireEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getByText("Content for Item 1").parentElement).toHaveClass(
      "hidden",
    );
  });

  it("should initially display the content based on isOpen state", () => {
    const initialData: IAccordionData[] = [
      { title: "Item 1", content: "<p>Content for Item 1</p>", isOpen: true },
      { title: "Item 2", content: "<p>Content for Item 2</p>", isOpen: false },
    ];

    render(<Accordion accordionData={initialData} />);

    expect(screen.getByText("Content for Item 1").parentElement).toHaveClass(
      "block",
    );
    expect(screen.getByText("Content for Item 2").parentElement).toHaveClass(
      "hidden",
    );
  });

  it("should update when new accordionData is provided", () => {
    const { rerender } = render(<Accordion accordionData={accordionData} />);

    const newAccordionData: IAccordionData[] = [
      {
        title: "Item 1",
        content: "<p>New Content for Item 1</p>",
        isOpen: false,
      },
      {
        title: "Item 2",
        content: "<p>New Content for Item 2</p>",
        isOpen: false,
      },
    ];

    rerender(<Accordion accordionData={newAccordionData} />);

    expect(screen.getByText("New Content for Item 1")).toBeInTheDocument();
    expect(screen.getByText("New Content for Item 2")).toBeInTheDocument();
  });
});

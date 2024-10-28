import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DockingButton from "@/components/ui/DockingButton";

describe("DockingButton component", () => {
  it("should render the text within a button when `button` prop is true", () => {
    render(<DockingButton text="Submit" button active />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render the text within a link when `button` prop is false", () => {
    render(<DockingButton text="Go Home" link="/home" />);
    expect(screen.getByText("Go Home")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should trigger onClick when button is clicked", () => {
    const handleClick = jest.fn();

    render(<DockingButton text="Click Me" button onClick={handleClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should not trigger onClick when button is inactive", () => {
    const handleClick = jest.fn();

    render(
      <DockingButton
        text="Inactive Button"
        button
        onClick={handleClick}
        active={false}
      />,
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should disable the link when inactive", () => {
    render(<DockingButton text="Inactive Link" link="/test" active={false} />);
    const link = screen.getByRole("link");
    expect(link).toHaveClass("pointer-events-none");
    expect(link).toHaveAttribute("aria-disabled", "true");
  });

  it("should apply the correct class when button is inactive", () => {
    render(<DockingButton text="Inactive Button" button active={false} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "pointer-events-none bg-tertiary-fill text-tertiary-text",
    );
  });

  it("should apply the correct class when button is active", () => {
    render(<DockingButton text="Active Button" button active />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-text-primary text-white");
  });

  it("should render children correctly", () => {
    render(
      <DockingButton text="With Children">
        <span>Child Element</span>
      </DockingButton>,
    );
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
});

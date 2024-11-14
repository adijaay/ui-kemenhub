import ErrorState from "@/components/commons/ErrorState";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ErrorState Component", () => {
  const mock_props = {
    title: "Error Title",
    subtitle: "Error Subtitle",
    onClick: jest.fn(),
    buttonText: "Button Text",
    image: "/assets/notfound.png",
  };
  
  const mock_props2 = {
    title: "Error Title",
    buttonText: "Button Text",
    image: "/assets/notfound.png",
  };
  
  it("should render correctly", () => {
    render(<ErrorState {...mock_props}/>);

    expect(screen.getByText(mock_props.title)).toBeInTheDocument();
    expect(screen.getByText(mock_props.subtitle)).toBeInTheDocument();
    expect(screen.getByText(mock_props.buttonText)).toBeInTheDocument();
  });

  it("correct render when subtitle is not provided", () => {
    render(<ErrorState {...mock_props2}/>);

    expect(screen.getByText(mock_props2.title)).toBeInTheDocument();
    expect(screen.queryByTestId("subtitle")).not.toBeInTheDocument();
  });

  it("should not render DockingButton when onClick not provided", () => {
    render(<ErrorState {...mock_props2} />);

    expect(screen.queryByText((content, element) => 
      content == mock_props2.buttonText && element?.tagName.toLowerCase() == "button"
    )).not.toBeInTheDocument();
  });
});

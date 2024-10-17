import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import Faq from "@/components/pages/Faq/Faq";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const useRouterMock = useRouter as jest.Mock;

describe("Faq", () => {
  let push: jest.Mock;

  beforeEach(() => {
    push = jest.fn();
    useRouterMock.mockImplementation(() => ({
      push,
    }));
  });

  it("render faq component correctly", () => {
    const page = render(<Faq />);
    expect(page).toMatchSnapshot();
  });
});

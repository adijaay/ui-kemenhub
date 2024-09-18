import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import TujuanProgram from "@/components/pages/TujuanProgram/TujuanProgram";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const useRouterMock = useRouter as jest.Mock;

describe("Tujuan Program", () => {
  let push: jest.Mock;

  beforeEach(() => {
    push = jest.fn();
    useRouterMock.mockImplementation(() => ({
      push,
    }));
  });

  it("render tujuan program component correctly", () => {
    const page = render(<TujuanProgram />);
    expect(page).toMatchSnapshot();
  });
});

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import Kategori from "@/components/pages/Kategori/Kategori";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const useRouterMock = useRouter as jest.Mock;

describe("Kategori", () => {
  let push: jest.Mock;

  beforeEach(() => {
    push = jest.fn();
    useRouterMock.mockImplementation(() => ({
      push,
    }));
  });

  it("render kategori component correctly", () => {
    const page = render(<Kategori />);
    expect(page).toMatchSnapshot();
  });
});

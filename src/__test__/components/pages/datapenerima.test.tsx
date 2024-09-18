import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import DataPenerima from "@/components/pages/DataPenerima/DataPenerima";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const useRouterMock = useRouter as jest.Mock;
const mockNik = "1234567890123456";
const mockNisn = "1234567890";

describe("Data Penerima", () => {
  let push: jest.Mock;

  beforeEach(() => {
    push = jest.fn();
    useRouterMock.mockImplementation(() => ({
      push,
      query: { nik: mockNik, nisn: mockNisn },
    }));
  });

  it("render data penerima component correctly", () => {
    const page = render(<DataPenerima />);
    expect(page).toMatchSnapshot();
  });
});

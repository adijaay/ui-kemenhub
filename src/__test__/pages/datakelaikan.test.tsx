import DataKelaikanPage from "@/pages/data-kelaikan-kendaraan";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("next/head");
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("firebase/performance", () => ({
  getPerformance: jest.fn(),
}));

describe("Data Kelaikan Page", () => {
  it("should render correctly", () => {
    render(<DataKelaikanPage />);
  });
});
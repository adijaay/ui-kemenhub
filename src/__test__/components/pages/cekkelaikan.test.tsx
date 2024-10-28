import CekKelaikan from "@/components/pages/Home/CekKelaikan";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("Cek Kelaikan Page", () => {
  it("should render correctly", () => {
    render(<CekKelaikan />);

    const textTitle = screen.getByText("Plat Nomor Kendaraan");
    expect(textTitle).toBeInTheDocument();
  });
});

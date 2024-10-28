import Custom404Page from "@/pages/404";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("Custom404Page", () => {
  it("should render correctly", () => {
    render(<Custom404Page />);

    const title = screen.getByText("Halaman Tidak Ditemukan");
    const subtitle = screen.getByText(
      "Maaf, halaman yang Anda tuju tidak ditemukan. Silakan akses halaman lain melalui beranda.",
    );
    const buttonText = screen.getByText("Kembali ke Beranda");

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
});

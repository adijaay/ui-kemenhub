import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Custom408Page from "@/pages/408";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("Custom408Page", () => {
  it("should render correctly", () => {
    render(<Custom408Page />);

    const title = screen.getByText("Halaman Tidak Dapat Diakses");
    const subtitle = screen.getByText(
      "Maaf, sedang terjadi kendala teknis. Silakan perbarui halaman ini beberapa saat lagi.",
    );
    const buttonText = screen.getByText("Kembali ke Beranda");

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
});

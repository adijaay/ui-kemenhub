import LoadFailed from "@/components/commons/ErrorState/LoadFailed";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("LoadFailed component", () => {
  it("should render correctly", () => {
    render(<LoadFailed />);

    const title = screen.getByText("Gagal Memuat Halaman");
    const subtitle = screen.getByText(
      "Maaf, terjadi kesalahan teknis. Silakan muat ulang untuk mengakses halaman ini.",
    );

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});

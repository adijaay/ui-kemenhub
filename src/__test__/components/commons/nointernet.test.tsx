import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoInternet from "@/components/commons/ErrorState/NoInternet";

describe("NoInternet component", () => {
  it("should render correctly", () => {
    render(<NoInternet />);

    const title = screen.getByText("Tidak Ada Koneksi Internet");
    const subtitle = screen.getByText(
      "Pastikan perangkat terhubung dengan koneksi internet untuk memuat ulang halaman ini.",
    );

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});

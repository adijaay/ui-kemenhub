import CustomInvalidStatePage from "@/pages/invalid-site";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CustomInvalidStatePage", () => {
  it("should render correctly", () => {
    render(<CustomInvalidStatePage />);

    const text = screen.getByText(
      "Maaf, layanan ini hanya bisa diakses melalui aplikasi Portal Pelayanan Publik",
    );

    expect(text).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Custom500Page from "@/pages/500";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("Custom408Page", () => {
  it("should render correctly", () => {
    render(<Custom500Page />);

    const title = screen.getByText("Sedang Terjadi Kendala Teknis");
    const subtitle = screen.getByText(
      "Maaf, sedang terjadi kendala teknis dan saat ini kami dalam proses memperbaikinya. Silakan coba akses beberapa saat lagi.",
    );
    const buttonText = screen.getByText("Kembali ke Beranda");

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
});

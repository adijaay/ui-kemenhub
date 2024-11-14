import Home from "@/pages";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

jest.mock("@/utils/utilssdkv2.4.4", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    setTitle: jest.fn(() => Promise.resolve()),
    clearHistory: jest.fn(() => Promise.resolve()),
    onBack: jest.fn(() => Promise.resolve()),
    allowPullToRefresh: jest.fn(() => Promise.resolve()),
  })),
}));

describe("Home Page", () => {
  it("should render notification correctly", () => {
    render(<Home />);

    const notifikasi = screen.getByTestId("notifikasi");
    const icon = screen.getByTestId("icon-info");

    expect(notifikasi).toBeInTheDocument();
    expect(notifikasi).toHaveTextContent(
      "Anda hanya dapat melakukan pengecekan kendaraan berplat nomor kuning.",
    );
    expect(notifikasi).toHaveClass("!border-[#B2CCFF]");
    expect(notifikasi).toHaveClass("!bg-[#F6F8FF]");

    expect(icon).toBeInTheDocument();
  });
});

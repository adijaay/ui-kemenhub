import KategoriPage from "@/pages/kategori";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/components/ui/Page", () => {
  return jest.fn().mockImplementation(({ children }) => {
    return <div>{children}</div>;
  });
});

jest.mock("@/utils/firebase", () => ({
  analytics: jest.fn(),
  logEvent: jest.fn(),
}));

describe("KategoriPage", () => {
  (useRouter as jest.Mock).mockReturnValue({
    query: {},
  });

  it("render kategori page correctly", async () => {
    const page = render(<KategoriPage />);
    await waitFor(() => {
      expect(page).toMatchSnapshot();
    });
  });
});

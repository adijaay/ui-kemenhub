import DataPenerimaPage from "@/pages/data-penerima";
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

describe("DataPenerimaPage", () => {
  (useRouter as jest.Mock).mockReturnValue({
    query: {},
  });

  it("render data penerima page correctly", async () => {
    const page = render(<DataPenerimaPage />);
    await waitFor(() => {
      expect(page).toMatchSnapshot();
    });
  });
});

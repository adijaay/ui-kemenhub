import FaqPage from "@/pages/faq";
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

describe("FaqPage", () => {
  (useRouter as jest.Mock).mockReturnValue({
    query: {},
  });

  it("render faq page correctly", async () => {
    const page = render(<FaqPage />);
    await waitFor(() => {
      expect(page).toMatchSnapshot();
    });
  });
});

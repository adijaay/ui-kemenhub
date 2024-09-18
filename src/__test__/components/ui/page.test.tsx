import Page from "@/components/ui/Page";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";

jest.mock("@/utils/utilssdkv2.3", () => {
  return jest.fn().mockImplementation(() => ({
    setTitle: jest.fn(),
    clearHistory: jest.fn(),
    onBack: jest.fn(),
  }));
});

describe("Page", () => {
  it("render page component correctly", async () => {
    const mockTitle = "Test Title";

    const { getByText } = render(
      <Page pageTitle={mockTitle} onBackLink="/">
        <p>Test Page</p>
      </Page>,
    );

    await waitFor(() => {
      expect(getByText("Test Page")).toBeInTheDocument();
    });
  });
});

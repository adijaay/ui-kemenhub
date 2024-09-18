import MyApp from "@/pages/_app";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { AppPropsType } from "next/dist/shared/lib/utils";
import { NextRouter } from "next/router";

jest.mock("next/font/google", () => ({
  Inter: () => ({ className: "mock-inter-font" }),
}));

const MockComponent = ({ text }: { text: string }) => (
  <div>
    <p>{text}</p>
  </div>
);

const mockRouter: NextRouter = {
  basePath: "",
  pathname: "",
  route: "",
  asPath: "",
  query: {},
  push: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  beforePopState: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
  isReady: true,
  reload: jest.fn(),
  replace: jest.fn(),
  defaultLocale: "en",
  domainLocales: [],
  locale: "en",
  locales: ["en"],
};

describe("MyApp", () => {
  it("should render the component with the Inter font class", () => {
    const pageProps = { text: "Test Text" };
    const Component = MockComponent as AppPropsType["Component"];

    const { container, getByText } = render(
      <MyApp Component={Component} pageProps={pageProps} router={mockRouter} />,
    );

    expect(container.querySelector("main")).toHaveClass("mock-inter-font");
    expect(getByText("Test Text")).toBeInTheDocument();
  });
});

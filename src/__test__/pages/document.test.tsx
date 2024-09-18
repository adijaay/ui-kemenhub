import Document from "@/pages/_document";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

jest.mock("next/document", () => ({
  Html: ({ lang, children }: { lang: string; children: React.ReactNode }) => (
    <html lang={lang}>{children}</html>
  ),
  // eslint-disable-next-line @next/next/no-head-element
  Head: () => <head />,
  Main: () => <main id="main" />,
  NextScript: () => <script />,
}));

describe("Document", () => {
  it("should render the correct document structure", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    render(<Document />, { container });

    expect(container.querySelector("html")).toHaveAttribute("lang", "en");
    expect(container.querySelector("head")).toBeInTheDocument();
    expect(container.querySelector("#main")).toBeInTheDocument();
    expect(container.querySelector("script")).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import UtilsSDK from "@/utils/utilssdkv2.4.3";
import Page from "@/components/ui/Page";

jest.mock("@/utils/utilssdkv2.4.3", () => {
  return jest.fn().mockImplementation(() => ({
    setTitle: jest.fn().mockResolvedValue(null),
    clearHistory: jest.fn().mockResolvedValue(null),
    onBack: jest.fn().mockResolvedValue(null),
  }));
});

describe("Page component", () => {
  it("should render children correctly", () => {
    render(
      <Page pageTitle="Test Page">
        <div>Test Child</div>
      </Page>,
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  // it("should call setTitle with the correct pageTitle", () => {
  //   render(
  //     <Page pageTitle="Test Page">
  //       <div>Test Child</div>
  //     </Page>,
  //   );

  //   const mockUtilsSDK = new UtilsSDK();
  //   expect(mockUtilsSDK.setTitle).toHaveBeenCalledWith("Test Page");
  // });

  // it("should call clearHistory when homePage is true", () => {
  //   render(
  //     <Page pageTitle="Home Page" homePage>
  //       <div>Test Child</div>
  //     </Page>,
  //   );

  //   const mockUtilsSDK = new UtilsSDK();
  //   expect(
  //     mockUtilsSDK.clearHistory().catch((err) => {
  //       throw err;
  //     }),
  //   ).toThrow();
  // });

  // it("should call onBack with a custom link when onBackLink is provided", () => {
  //   render(
  //     <Page pageTitle="Page with Back Link" onBackLink="/back">
  //       <div>Test Child</div>
  //     </Page>,
  //   );

  //   const mockUtilsSDK = new UtilsSDK();
  //   expect(mockUtilsSDK.onBack).toHaveBeenCalledWith(
  //     "custom",
  //     "location.href='/back'",
  //   );
  // });

  // it("should call onBack with a custom function when onBackCustom is provided", () => {
  //   const customBack = jest.fn();
  //   render(
  //     <Page pageTitle="Page with Custom Back" onBackCustom={customBack}>
  //       <div>Test Child</div>
  //     </Page>,
  //   );

  //   const mockUtilsSDK = new UtilsSDK();
  //   expect(mockUtilsSDK.onBack).toHaveBeenCalledWith("custom", `${customBack}`);
  // });

  // it("should not call clearHistory or onBack when homePage is false and no onBackLink or onBackCustom is provided", () => {
  //   render(
  //     <Page pageTitle="Regular Page">
  //       <div>Test Child</div>
  //     </Page>,
  //   );

  //   const mockUtilsSDK = new UtilsSDK();
  //   expect(mockUtilsSDK.clearHistory).not.toHaveBeenCalled();
  //   expect(mockUtilsSDK.onBack).not.toHaveBeenCalled();
  // });
});

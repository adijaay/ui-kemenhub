import React, { useEffect } from "react";
import UtilsSDK from "@/utils/utilssdkv2.4.4";

interface IPage {
  children: React.ReactNode;
  pageTitle: string;
  homePage?: boolean;
  onBackLink?: string;
  onBackCustom?: () => void;
}

export default function Page({
  children,
  pageTitle,
  homePage = false,
  onBackLink,
  onBackCustom,
}: IPage) {
  useEffect(() => {
    const sdk = new UtilsSDK();

    sdk.setTitle(pageTitle).catch((err) => {console.error(err);});

    if (homePage) {
      sdk.clearHistory().catch((err) => {console.error(err);});
    } else {
      if (onBackLink) {
        sdk.onBack("custom", `location.href="${onBackLink}"`).catch((err) => {console.error(err);});
      } else if (onBackCustom) {
        sdk.onBack("custom", `${onBackCustom}`).catch((err) => {console.error(err);});
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col gap-4 bg-[#F9FAFB] p-4">
      {children}
    </div>
  );
}

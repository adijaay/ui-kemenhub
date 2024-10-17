/* eslint-disable @typescript-eslint/no-unused-vars */
import "@/styles/globals.css";
import { AppPropsType } from "next/dist/shared/lib/utils";
import { Inter } from "next/font/google";
import Head from "next/head";
import "@/styles/notifikasi.css";
import NetworkProvider from "@/hooks/useCheckNetwork";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppPropsType) {
  useEffect(() => {
    const contentContainer = document.getElementById("contentContainer");

    if (contentContainer) {
      contentContainer.style.display = "block";
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>

      <NetworkProvider>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </NetworkProvider>
    </>
  );
}

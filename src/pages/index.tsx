import Home from "@/components/pages/Home/Home";
import Page from "@/components/ui/Page";
import sendFirebase from "@/utils/firebase";
import Head from "next/head";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    sendFirebase({
      id_list_product: 829001,
      list_product_name: "program-indonesia-pintar",
    });
  }, []);

  return (
    <Page homePage pageTitle="Program Indonesia Pintar">
      <Head>
        <title>Program Indonesia Pintar</title>
      </Head>
      
      <Home />
    </Page>
  );
}

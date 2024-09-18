import Faq from "@/components/pages/Faq/Faq";
import Page from "@/components/ui/Page";
import sendFirebase from "@/utils/firebase";
import Head from "next/head";
import { useEffect } from "react";

export default function FaqPage() {
  useEffect(() => {
    sendFirebase({
      id_list_product: 829005,
      list_product_name: "faq-pip",
    });
  }, []);

  return (
    <Page pageTitle="FAQ" onBackLink="/">
      <Head>
        <title>FAQ</title>
      </Head>
      <Faq />
    </Page>
  );
}

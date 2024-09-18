import TujuanProgram from "@/components/pages/TujuanProgram/TujuanProgram";
import Page from "@/components/ui/Page";
import sendFirebase from "@/utils/firebase";
import Head from "next/head";
import { useEffect } from "react";

export default function TujuanProgramPage() {
  useEffect(() => {
    sendFirebase({
      id_list_product: 829003,
      list_product_name: "tujuan-program",
    });
  }, []);

  return (
    <Page pageTitle="Tujuan Program" onBackLink="/">
      <Head>
        <title>Tujuan Program</title>
      </Head>
      <TujuanProgram />
    </Page>
  );
}

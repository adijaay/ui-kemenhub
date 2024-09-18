import Kategori from "@/components/pages/Kategori/Kategori";
import Page from "@/components/ui/Page";
import sendFirebase from "@/utils/firebase";
import Head from "next/head";
import { useEffect } from "react";

export default function KategoriPage() {
  useEffect(() => {
    sendFirebase({
      id_list_product: 829004,
      list_product_name: "kategori-penerima-program",
    });
  }, []);

  return (
    <Page pageTitle="Kategori Penerima Program" onBackLink="/">
      <Head>
        <title>Kategori Penerima Program</title>
      </Head>
      <Kategori />
    </Page>
  );
}

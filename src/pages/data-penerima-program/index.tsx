import DataPenerima from "@/components/pages/DataPenerima/DataPenerima";
import Page from "@/components/ui/Page";
import Head from "next/head";

export default function DataPenerimaPage() {
  return (
    <Page pageTitle="Data Penerima Program" onBackLink="/">
      <Head>
        <title>Data Penerima Program</title>
      </Head>
      <DataPenerima />
    </Page>
  );
}

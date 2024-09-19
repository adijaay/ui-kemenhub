import DataKelaikan from "@/components/pages/DataKelaikan/DataKelaikan";

import Page from "@/components/ui/Page";
import Head from "next/head";

export default function DataPenerimaPage() {
  return (
    <Page pageTitle="Cek Kelaikan Kendaraan" onBackLink="/">
      <Head>
        <title>Cek Kelaikan Kendaraan</title>
      </Head>
      <DataKelaikan />
    </Page>
  );
}

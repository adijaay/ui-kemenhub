import Home from "@/components/pages/Home/Home";
import Page from "@/components/ui/Page";
import Head from "next/head";

export default function HomePage() {
  return (
    <Page homePage pageTitle="Cek Kelaikan Kendaraan">
      <Head>
        <title>Cek Kelaikan Kendaraan</title>
      </Head>

      <Home />
    </Page>
  );
}

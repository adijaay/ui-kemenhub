/* eslint-disable @typescript-eslint/no-empty-function */
import Notifikasi from "@/components/commons/Notifikasi";
import CekKelaikan from "./CekKelaikan";
import Accordion from "@/components/commons/Accordion";
import { faqData } from "@/constants/faq";

export default function Home() {
  return (
    <>
      <Notifikasi
        setShow={() => {}}
        data-testid="notifikasi"
        isShow={true}
        message="Anda hanya dapat melakukan pengecekan kendaraan berplat nomor kuning."
        status="info"
      />

      <CekKelaikan />

      <div className="text-[16px] font-semibold capitalize leading-6 text-[#000]">
        <p>Paling banyak ditanya</p>
      </div>
      <Accordion accordionData={faqData} />
    </>
  );
}

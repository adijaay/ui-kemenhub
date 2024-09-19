import Notifikasi from "@/components/commons/Notifikasi";
import React, { useState } from "react";
import CekKelaikan from "./CekKelaikan";
import Accordion from "@/components/commons/Accordion";
import { faqData } from "@/constants/faq";
import Snackbar from "@/components/ui/Snackbar";

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

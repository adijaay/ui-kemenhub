import Notifikasi from "@/components/commons/Notifikasi";
import React, { useState } from "react";
import CekPenerimaProgram from "./CekPenerimaProgram";
import Accordion from "@/components/commons/Accordion";
import { faqData } from "@/constants/faq";

export default function Home() {
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const [shakeTrigger, setShakeTrigger] = useState<boolean>(false);

  return (
    <>
      <Notifikasi
        data-testid="notifikasi"
        isShow={showNotification}
        setShow={setShowNotification}
        message="Anda hanya dapat melakukan pengecekan kendaraan berplat nomor kuning."
        status="info"
        triggerShake={shakeTrigger}
      />

      <CekPenerimaProgram
        setShowNotification={setShowNotification}
        setShakeTrigger={setShakeTrigger}
      />

      <Accordion accordionData={faqData} />
    </>
  );
}

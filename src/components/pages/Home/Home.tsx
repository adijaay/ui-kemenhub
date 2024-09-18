import CardInfo from "@/components/commons/CardInfo";
import Notifikasi from "@/components/commons/Notifikasi";
import React, { useState } from "react";
import CekPenerimaProgram from "./CekPenerimaProgram";

export default function Home() {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [shakeTrigger, setShakeTrigger] = useState<boolean>(false);

  return (
    <>
      <Notifikasi
        data-testid="notifikasi"
        isShow={showNotification}
        setShow={setShowNotification}
        title="NIK dan NISN Tidak Cocok"
        message="Data tidak ditemukan atau tidak terdaftar sebagai penerima PIP."
        status="alert"
        triggerShake={shakeTrigger}
      />

      <CekPenerimaProgram
        setShowNotification={setShowNotification}
        setShakeTrigger={setShakeTrigger}
      />

      <CardInfo
        img="/img/target.png"
        title="Tujuan Program"
        desc="Lihat tujuan dari layanan pendidikan Program Indonesia Pintar."
        link="/tujuan-program"
      />

      <CardInfo
        img="/img/category.png"
        title="Kategori Penerima Program"
        desc="Ketahui syarat dan ketentuan penerima Program Indonesia Pintar."
        link="/kategori-penerima-program"
      />

      <CardInfo
        img="/img/faq.png"
        title="FAQ (Frequently Ask Question)"
        desc="Daftar pertanyaan terkait Program Indonesia Pintar."
        link="/faq-pip"
      />
    </>
  );
}

import ErrorState from "@/components/commons/ErrorState";

import { useRouter } from "next/navigation";
import React from "react";

const Custom404Page = () => {
  const { push } = useRouter();
  return (
    <ErrorState
      title="Halaman Tidak Ditemukan"
      subtitle="Maaf, halaman yang Anda tuju tidak ditemukan. Silakan akses halaman lain melalui beranda."
      image="/assets/notfoundgeneral.svg"
      onClick={() => push("/")}
      buttonText="Kembali ke Beranda"
    />
  );
};

export default Custom404Page;

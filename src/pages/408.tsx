import ErrorState from "@/components/commons/ErrorState";

import { useRouter } from "next/navigation";
import React from "react";

const Custom404Page = () => {
  const { push } = useRouter();
  return (
    <ErrorState
      title="Halaman Tidak Dapat Diakses"
      subtitle="Maaf, sedang terjadi kendala teknis. Silakan perbarui halaman ini beberapa saat lagi."
      image="/assets/408error.svg"
      onClick={() => push("/")}
      buttonText="Kembali ke Beranda"
    />
  );
};

export default Custom404Page;

import ErrorState from "@/components/commons/ErrorState";

import { useRouter } from "next/navigation";
import React from "react";

const Custom500Page = () => {
  const { push } = useRouter();
  return (
    <ErrorState
      title="Sedang Terjadi Kendala Teknis"
      subtitle="Maaf, sedang terjadi kendala teknis dan saat ini kami dalam proses memperbaikinya. Silakan coba akses beberapa saat lagi. "
      image="/assets/servererrorgeneral.svg"
      onClick={() => push("/")}
      buttonText="Kembali ke Beranda"
    />
  );
};

export default Custom500Page;

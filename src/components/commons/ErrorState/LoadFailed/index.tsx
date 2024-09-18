import React from "react";
import ErrorState from "..";

const LoadFailed = () => {
  return (
    <ErrorState
      title="Gagal Memuat Halaman"
      subtitle="Maaf, terjadi kesalahan teknis. Silakan muat ulang untuk mengakses halaman ini."
      image="/assets/failedload.png"
      onClick={() => {}}
      buttonText="Muat Ulang"
    />
  );
};

export default LoadFailed;

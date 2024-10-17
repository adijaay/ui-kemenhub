/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import ErrorState from "..";

const NoInternet = () => {
  return (
    <ErrorState
      title="Tidak Ada Koneksi Internet"
      subtitle="Pastikan perangkat terhubung dengan koneksi internet untuk memuat ulang halaman ini."
      image="/assets/nointernet.png"
      onClick={() => {}}
      buttonText="Muat Ulang"
    />
  );
};

export default NoInternet;

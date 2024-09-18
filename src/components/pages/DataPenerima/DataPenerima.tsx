/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import LihatKartu from "./CardLihatKartu";
import CardDataPenerima from "./CardDataPenerima";
import RiwayatPenyaluran from "./RiwayatPenyaluran";
import { useRouter } from "next/router";

type TRiwayatPenyaluran = {
  tahun: string;
  tanggal_cair: string | null;
  bank: string;
  nominal: string | null;
  is_kembalikan_negara: number;
};

type TRiwayatSekolah = {
  jenjang: string;
  sekolah: string;
  npsn: string;
  kecamatan: string;
  kabupaten: string;
  propinsi: string;
  riwayat_penyaluran: TRiwayatPenyaluran[];
};

type TData = {
  nama_lengkap: string;
  nik: string;
  nisn: string;
  has_kartu: boolean;
  no_kartu: string;
  riwayat_sekolah: TRiwayatSekolah[];
};

export type TResponseData = {
  success: boolean;
  message: string;
  data: TData;
};

export default function DataPenerima() {
  const router = useRouter();
  const { nik, nisn } = router.query;

  const [dataPenerima, setDataPenerima] = useState<TResponseData>({
    success: false,
    message: "",
    data: {
      nama_lengkap: "-",
      nik: "",
      nisn: "",
      has_kartu: false,
      no_kartu: "",
      riwayat_sekolah: [],
    },
  });

  const [riwayatSekolah, setRiwayatSekolah] = useState<TRiwayatSekolah[]>([]);

  const fetchData = async (
    nik?: string | string[],
    nisn?: string | string[],
  ): Promise<TResponseData> => {
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/v1/data-penerima?nik=${nik}&nisn=${nisn}`,
    );
    const responseJson: Promise<TResponseData> = await response.json();

    return responseJson;
  };

  useEffect(() => {
    if (nik && nisn) {
      fetchData(nik, nisn).then((response) => {
        if (!response.success) {
          router.push("/");
        }

        setDataPenerima(response);
        setRiwayatSekolah(response.data.riwayat_sekolah);
      });
    }
  }, [nik, nisn]);

  return (
    <>
      <CardDataPenerima
        nama={dataPenerima.data.nama_lengkap}
        nik={dataPenerima.data.nik}
        nisn={dataPenerima.data.nisn}
      />

      {dataPenerima.data.has_kartu && (
        <LihatKartu noKartu={dataPenerima.data.no_kartu} />
      )}

      <RiwayatPenyaluran dataPenyaluran={riwayatSekolah} />
    </>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import CardDataKelaikan from "./CardDataKelaikan";

import { useRouter } from "next/router";
import Notifikasi from "@/components/commons/Notifikasi";
import { IconChevronRight } from "@tabler/icons-react";
import Bottomsheet from "@/components/commons/Bottomsheet";

const defaultData = {
  data_rampcheck: "",
  data_spionam: {
    spionam_id: 0,
    noken: "",
    no_uji: "",
    tgl_exp_uji: "",
    no_kps: "",
    tgl_exp_kps: "",
    no_srut: 0,
    nama_perusahaan: "",
  },
  data_blue: {
    blue_id: 0,
    date: "",
    no_srut: 0,
    tgl_srut: "",
    no_registrasi_kendaraan: "",
    keterangan_hasil_uji: 0,
    masa_berlaku: "",
  },
};
type TDataSpionam = {
  spionam_id: number;
  noken: string;
  no_uji: string;
  tgl_exp_uji: string;
  no_kps: string;
  tgl_exp_kps: string;
  no_srut: number;
  nama_perusahaan: string;
};

type TDataBlue = {
  blue_id: number;
  date: string;
  no_srut: number;
  tgl_srut: string;
  no_registrasi_kendaraan: string;
  keterangan_hasil_uji: number;
  masa_berlaku: string;
};

export type TDataKendaraan = {
  data_rampcheck: string;
  data_spionam: TDataSpionam;
  data_blue: TDataBlue;
};

export type TResponseData = {
  success: boolean;
  message: string;
  data: TDataKendaraan;
  error: string;
};

export default function DataKelaikan() {
  const router = useRouter();
  const { vehicleCity, vehicleNumber, vehicleCode } = router.query;
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [dataKendaraan, setDataKendaraan] = useState<TResponseData>({
    success: false,
    message: "",
    data: defaultData,
    error: "",
  });

  const fetchData = async (
    vehicleCity?: string | string[],
    vehicleNumber?: string | string[],
    vehicleCode?: string | string[],
  ): Promise<TResponseData> => {
    setIsFetching(true);
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/v1/layak-jalan?no_reg_kendaraan=${vehicleCity}${vehicleNumber}${vehicleCode}`,
    );
    const responseJson: Promise<TResponseData> = await response.json();

    setIsFetching(false);

    return responseJson;
  };

  useEffect(() => {
    if (vehicleCity && vehicleNumber && vehicleCode) {
      fetchData(vehicleCity, vehicleNumber, vehicleCode).then((response) => {
        setDataKendaraan(response);
      });
    }
  }, [vehicleCity, vehicleNumber, vehicleCode]);

  return (
    <>
      {!isFetching ? (
        <Notifikasi
          isShow
          setShow={() => {}}
          status="info"
          message="Informasi yang ditampilkan di bawah ini berasal dari HUBNET."
        >
          <div
            className="flex cursor-pointer items-center justify-start gap-1"
            onClick={() => setShowBottomSheet(true)}
          >
            <p className="items-center text-[12px] font-semibold leading-tight text-[#2871FF]">
              Tentang HUBNET
            </p>
            <IconChevronRight
              width={16}
              height={16}
              stroke-width="2.25"
              className="pb-0.25"
              color="#2871FF"
            />
          </div>
        </Notifikasi>
      ) : undefined}

      <CardDataKelaikan
        vehicleIdentity={`${vehicleCity} ${vehicleNumber} ${vehicleCode}`}
        data={dataKendaraan.data}
        isSuccess={dataKendaraan.success}
        error={dataKendaraan.error}
        isLoading={isFetching}
      />

      <Bottomsheet
        isShow={showBottomSheet}
        setShow={setShowBottomSheet}
        title="Tentang HUBNET"
      >
        <div className="mt-4 flex w-full flex-col gap-4">
          <img
            src="/img/hubnet.svg"
            alt="hubnet-logo"
            className="w-full max-w-[216px]"
          />
          <p className="text-[14px] font-normal leading-5 text-[#1F1F1F]">
            HUBNET adalah Sistem Penghubung Layanan Transportasi (SPLT) yang
            disediakan oleh Kementerian Perhubungan untuk mendorong percepatan
            Transformasi Digital Sektor Transportasi, menguatkan penerapan
            Sistem Pemerintahan Berbasis Elektronik (SPBE), serta memudahkan
            Interoperabilitas & Kolaborasi lintas Pihak Berkepentingan di Sektor
            Transportasi.
          </p>
        </div>
      </Bottomsheet>
    </>
  );
}

import React, { useEffect, useState } from "react";
import CardDataKelaikan from "./CardDataKelaikan";
import Notifikasi from "@/components/commons/Notifikasi";
import { IconChevronRight } from "@tabler/icons-react";
import Bottomsheet from "@/components/commons/Bottomsheet";
import { defaultData } from "@/constants/vehicle";
import { TResponseData } from "@/definitions/vehicle";
import { AxiosError } from "axios";
import { fetchDataKendaraan } from "@/hooks/fetch";
import { useRouter } from "next/router";

export default function DataKelaikan() {
  const router = useRouter();

  const [vehicleNumber, setVehicleNumber] = useState<string>("");
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const [dataKendaraan, setDataKendaraan] = useState<TResponseData>({
    success: null,
    message: "",
    data: defaultData,
    error: "",
  });

  const fetchData = async (
    no_reg_kendaraan: string | string[],
  ): Promise<TResponseData> => {
    setIsFetching(true);

    const responseData = await fetchDataKendaraan(no_reg_kendaraan);
    return responseData;
  };

  useEffect(() => {
    const vehicleCity = window.localStorage.getItem("vehicleCity");
    const vehicleNumber = window.localStorage.getItem("vehicleNumber");
    const vehicleCode = window.localStorage.getItem("vehicleCode");

    if (vehicleCity && vehicleNumber && vehicleCode) {
      const no_reg_vehicle = `${vehicleCity}${vehicleNumber}${vehicleCode}`;

      setVehicleNumber(`${vehicleCity} ${vehicleNumber} ${vehicleCode}`);

      fetchData(no_reg_vehicle)
        .then((response: TResponseData) => {
          setDataKendaraan({
            success: response.success,
            message: response.message,
            data: response.data,
            error: response.error,
          });
        })
        .catch((err: AxiosError | unknown) => {
          if (err instanceof AxiosError) {
            switch (err.response?.status) {
              case 408:
                router.push("/408");
                return;
              case 500:
                router.push("/500");
                return;
              case 404:
                setDataKendaraan({
                  ...dataKendaraan,
                  success: false,
                });
            }
          }
        })
        .finally(() => {
          setIsFetching(false);
        });
    }

    return () => {
      window.localStorage.removeItem("vehicleCity");
      window.localStorage.removeItem("vehicleNumber");
      window.localStorage.removeItem("vehicleCode");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isFetching ? (
        <Notifikasi
          isShow
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
              strokeWidth="2.25"
              className="pb-0.25"
              color="#2871FF"
            />
          </div>
        </Notifikasi>
      ) : undefined}

      <CardDataKelaikan
        vehicleIdentity={vehicleNumber}
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

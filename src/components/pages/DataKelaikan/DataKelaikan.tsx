/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import CardDataKelaikan from "./CardDataKelaikan";
import Notifikasi from "@/components/commons/Notifikasi";
import { IconChevronRight } from "@tabler/icons-react";
import Bottomsheet from "@/components/commons/Bottomsheet";
import { getCookie } from "@/utils/utils";
import { decrypt, encrypt } from "@/utils/encrypt";
import { v4 as uuidv4 } from "uuid";
import fetchApi from "@/utils/axios";
import { defaultData } from "@/constants/vehicle";
import { TEncResponseData, TResponseData } from "@/definitions/vehicle";

export default function DataKelaikan() {
  const [vehicleNumber, setVehicleNumber] = useState<string>("");
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [dataKendaraan, setDataKendaraan] = useState<TResponseData>({
    success: false,
    message: "",
    data: defaultData,
    error: "",
  });

  const fetchData = async (no_reg_kendaraan: string | string[]) => {
    setIsFetching(true);

    const token = getCookie("inaku_token");
    const formData = new FormData();
    const formBody = {
      no_reg_kendaraan,
    };

    const encryptedData = encrypt(formBody);
    if (typeof encryptedData === "string") {
      formData.append("data", encryptedData);
    } else {
      throw new Error("Encryption failed, expected a string.");
    }

    try {
      const response = await fetchApi.post("/v1/layak-jalan", formData, {
        headers: {
          token: token,
          "Content-Type": "multipart/form-data",
          "X-Request-ID": uuidv4(),
        },
      });

      const { data } = response;

      return data;
    } catch (err) {
      console.error("error occured when fetching:", err);
    }
  };

  useEffect(() => {
    const vehicleCity = window.localStorage.getItem("vehicleCity");
    const vehicleNumber = window.localStorage.getItem("vehicleNumber");
    const vehicleCode = window.localStorage.getItem("vehicleCode");

    const no_reg_vehicle = `${vehicleCity}${vehicleNumber}${vehicleCode}`;

    if (no_reg_vehicle) {
      setVehicleNumber(`${vehicleCity} ${vehicleNumber} ${vehicleCode}`);

      fetchData(no_reg_vehicle)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((response: TEncResponseData) => {
          const decryptData = decrypt(response.data);

          setDataKendaraan({
            success: response.success,
            message: response.message,
            data: decryptData,
            error: response.error,
          });
        })
        .catch((err) => {
          console.error("error occured in useEffect:", err);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }

    return () => {
      window.localStorage.removeItem("data");
    };
  }, []);

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
            <p className="text-[12px] font-semibold leading-tight text-[#2871FF]">
              Tentang HUBNET
            </p>
            <IconChevronRight
              width={16}
              height={16}
              strokeWidth="2.75"
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

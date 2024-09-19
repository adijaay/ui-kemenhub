import Container from "@/components/ui/Container";

import React, { useEffect } from "react";
import sendFirebase from "@/utils/firebase";

import Chip from "@/components/ui/Chip";
import { TDataKendaraan } from "./DataKelaikan";
import { formatDate, isDateExpired } from "@/utils/utils";
import CardLoadingDataKelaikan from "./CardLoadingDataKelaikan";

interface ICardDataKelaikan {
  vehicleIdentity: string;
  data: TDataKendaraan;
  isSuccess: boolean;
  error: string;
  isLoading: boolean;
}

export default function CardDataKelaikan({
  vehicleIdentity,
  data,
  isSuccess,
  error,
  isLoading,
}: ICardDataKelaikan) {
  useEffect(() => {
    if (vehicleIdentity) {
      // sendFirebase({
      //   id_list_product: 829002,
      //   list_product_name: "data-penerima-program",
      //   id_product: parseInt(nisn),
      //   product_name: nama,
      // });
    }
  }, [vehicleIdentity]);

  return (
    <>
      {isLoading ? (
        <CardLoadingDataKelaikan />
      ) : (
        <Container className="!gap-0 !p-4">
          <div className="flex w-full flex-col gap-1">
            <p className="text-[16px] font-semibold leading-6 text-[#1F1F1F]">
              {vehicleIdentity}
            </p>
            <p className="text-[14px] font-normal leading-5 text-[#667085]">
              {data?.data_spionam?.nama_perusahaan || "-"}
            </p>
          </div>
          <hr className="mb-4 mt-5" />
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-[16px] font-semibold leading-6 text-[#1F1F1F]">
                Izin Angkutan
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-normal leading-5 text-[#667085]">
                Nomor Uji
              </p>
              <p className="text-[14px] font-medium leading-5 text-[#1F1F1F]">
                {data?.data_spionam?.no_uji || "-"}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-normal leading-5 text-[#667085]">
                Nomor KPS
              </p>
              <p className="text-[14px] font-medium leading-5 text-[#1F1F1F]">
                {data?.data_spionam?.no_kps || "-"}
              </p>
            </div>

            {isSuccess ? (
              <Chip
                type={
                  isDateExpired(data?.data_spionam?.tgl_exp_kps.split(" ")[0])
                    ? "error"
                    : "complete"
                }
                text={
                  isSuccess
                    ? `${
                        isDateExpired(
                          data?.data_spionam?.tgl_exp_kps.split(" ")[0],
                        )
                          ? "Kedaluwarsa sejak"
                          : "Berlaku sampai"
                      } ${formatDate(data?.data_spionam?.tgl_exp_kps.split(" ")[0])}`
                    : error
                }
              />
            ) : (
              <Chip type="error" text="Data Tidak Ditemukan" />
            )}
          </div>

          <hr className="mb-4 mt-5" />

          <div className="flex flex-col gap-3">
            <div>
              <p className="text-[16px] font-semibold leading-6 text-[#1F1F1F]">
                Uji Berkala
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-normal leading-5 text-[#667085]">
                Tanggal Uji
              </p>
              <p className="text-[14px] font-medium leading-5 text-[#1F1F1F]">
                {isSuccess
                  ? formatDate(data?.data_blue?.date.split(" ")[0])
                  : "-"}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-normal leading-5 text-[#667085]">
                Keterangan Hasil Uji
              </p>
              <p className="text-[14px] font-medium leading-5 text-[#1F1F1F]">
                {isSuccess ? (
                  <>
                    {data?.data_blue?.keterangan_hasil_uji == 1
                      ? "Lulus Uji Berkala"
                      : "Tidak Lulus Uji Berkala"}
                  </>
                ) : (
                  "-"
                )}
              </p>
            </div>

            {isSuccess ? (
              <Chip
                type={
                  isDateExpired(data?.data_spionam?.tgl_exp_uji.split(" ")[0])
                    ? "error"
                    : "complete"
                }
                text={
                  isSuccess
                    ? `${
                        isDateExpired(
                          data?.data_spionam?.tgl_exp_uji.split(" ")[0],
                        )
                          ? "Kedaluwarsa sejak"
                          : "Berlaku sampai"
                      } ${formatDate(data?.data_spionam?.tgl_exp_uji.split(" ")[0])}`
                    : error
                }
              />
            ) : (
              <Chip type="error" text="Data Tidak Ditemukan" />
            )}
          </div>
        </Container>
      )}
    </>
  );
}

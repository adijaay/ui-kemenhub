import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import TextTitle from "@/components/ui/TextTitle";
import { formatCurrencyToLocale, formatDateToLocale } from "@/utils/transform";
import { IconCheck, IconChevronDown, IconX } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

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
  show_riwayat?: boolean;
  riwayat_penyaluran: TRiwayatPenyaluran[];
};

interface IRiwayatPenyaluran {
  dataPenyaluran: TRiwayatSekolah[];
}

export default function RiwayatPenyaluran({
  dataPenyaluran,
}: IRiwayatPenyaluran) {
  const [dataPenyaluranMapped, setDataPenyaluranMapped] = useState<
    TRiwayatSekolah[]
  >(
    dataPenyaluran.map((data) => ({
      ...data,
      show_riwayat: false,
    })),
  );

  useEffect(() => {
    if (dataPenyaluran) {
      const dataMapped = dataPenyaluran
        .slice()
        .reverse()
        .map((data) => ({
          ...data,
          show_riwayat: false,
          riwayat_penyaluran: data.riwayat_penyaluran.slice().reverse(),
        }));

      setDataPenyaluranMapped(dataMapped);
    }
  }, [dataPenyaluran]);

  return (
    <>
      <Container className="!gap-0 divide-y divide-[#EAECF0] !p-0">
        <div className="px-4 py-3">
          <TextTitle className="text-sm">Riwayat Penerimaan</TextTitle>
        </div>

        {dataPenyaluranMapped.map((data, indexData) => (
          <div key={indexData}>
            <div
              className={"px-4 py-2"}
              onClick={() => {
                setDataPenyaluranMapped((prevData) =>
                  prevData?.map((d, i) =>
                    i === indexData
                      ? { ...d, show_riwayat: !d.show_riwayat }
                      : d,
                  ),
                );
              }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex w-full flex-col gap-2">
                    <p className="text-xs font-normal leading-5 text-[#667085]">
                      Jenjang {data.jenjang}
                    </p>
                    <div>
                      <TextTitle className="text-sm">{data.sekolah}</TextTitle>
                      <Text className="text-xs !text-text-secondary">
                        NPSN: <span className="font-medium">{data.npsn}</span>
                      </Text>
                    </div>
                  </div>
                  <IconChevronDown
                    size={16}
                    color="#667085"
                    stroke={3}
                    className={`shrink-0 duration-300 ${data.show_riwayat ? "rotate-180" : ""}`}
                  />
                </div>
                {data.show_riwayat && (
                  <div className="flex w-full flex-col gap-2">
                    <div className="flex justify-between">
                      <Text className="text-xs !text-text-secondary">
                        Kecamatan
                      </Text>
                      <Text className="text-right text-xs font-semibold">
                        {data.kecamatan.replace("Kec. ", "")}
                      </Text>
                    </div>
                    <div className="flex justify-between">
                      <Text className="text-xs !text-text-secondary">
                        Kabupaten/Kota
                      </Text>
                      <Text className="text-right text-xs font-semibold">
                        {data.kabupaten.replace("Kab. ", "")}
                      </Text>
                    </div>
                    <div className="flex justify-between">
                      <Text className="text-xs !text-text-secondary">
                        Provinsi
                      </Text>
                      <Text className="text-right text-xs font-semibold">
                        {data.propinsi.replace("Prov. ", "")}
                      </Text>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {data.show_riwayat && (
              <div className="p-4">
                <div id="LgnStepper" className="flex h-full w-full flex-col">
                  {data.riwayat_penyaluran.map((riwayat, indexRiwayat) => (
                    <div
                      key={indexRiwayat}
                      className="flex h-full w-full gap-2"
                    >
                      {/* section stepper bar */}
                      <div className="flex flex-col items-center">
                        {/* {indexRiwayat !== 0 && !riwayat.tanggal_cair ? (
                          riwayat.is_kembalikan_negara ? (
                            <div
                              className={`h-full w-[2px] grow bg-[#AF2A2D] ${indexRiwayat === 0 ? "invisible opacity-0" : "visible opacity-100"}`}
                            />
                          ) : (
                            <div
                              className={`h-full w-[2px] grow bg-[#D0D5DD] ${indexRiwayat === 0 ? "invisible opacity-0" : "visible opacity-100"}`}
                            />
                          )
                        ) : (
                          <div
                            className={`h-full w-[2px] grow bg-fill-success ${indexRiwayat === 0 ? "invisible opacity-0" : "visible opacity-100"}`}
                          />
                        )} */}

                        {!riwayat.tanggal_cair ? (
                          riwayat.is_kembalikan_negara ? (
                            <div className="flex h-6 w-6 min-w-6 shrink-0 items-center justify-center rounded-full bg-fill-critical">
                              <IconX
                                size={18}
                                color="#ffffff"
                                className="shrink-0"
                                stroke={3}
                              />
                            </div>
                          ) : (
                            <div className="flex h-6 w-6 min-w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#D0D5DD] bg-[#F2F4F7] p-[2px]">
                              <div className="h-[10px] w-[10px] rounded-full bg-[#D0D5DD]"></div>
                            </div>
                          )
                        ) : (
                          <div className="flex h-6 w-6 min-w-6 shrink-0 items-center justify-center rounded-full bg-fill-success">
                            <IconCheck
                              size={18}
                              color="#ffffff"
                              className="shrink-0"
                              stroke={3}
                            />
                          </div>
                        )}

                        {indexRiwayat !== data.riwayat_penyaluran.length - 1 &&
                          (!data.riwayat_penyaluran[indexRiwayat + 1]
                            .tanggal_cair ? (
                            data.riwayat_penyaluran[indexRiwayat + 1]
                              .is_kembalikan_negara ? (
                              <div
                                className={`h-full w-[2px] grow bg-fill-critical ${indexRiwayat === data.riwayat_penyaluran.length - 1 ? "invisible opacity-0" : "visible opacity-100"}`}
                              />
                            ) : (
                              <div
                                className={`h-full w-[2px] grow bg-[#D0D5DD] ${indexRiwayat === data.riwayat_penyaluran.length - 1 ? "invisible opacity-0" : "visible opacity-100"}`}
                              />
                            )
                          ) : (
                            <div
                              className={`h-20 w-[2px] grow bg-fill-success ${indexRiwayat === data.riwayat_penyaluran.length - 1 ? "invisible opacity-0" : "visible opacity-100"}`}
                            />
                          ))}

                        {indexRiwayat ===
                          data.riwayat_penyaluran.length - 1 && (
                          <div
                            className={`h-full w-[2px] grow bg-fill-critical ${indexRiwayat === data.riwayat_penyaluran.length - 1 ? "invisible opacity-0" : "visible opacity-100"}`}
                          />
                        )}
                      </div>

                      {/* section keterangan */}
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold text-[#1f1f1f]">
                          Tahun {riwayat.tahun}
                        </p>
                        <p className="text-xs leading-5 text-[#667085]">
                          {riwayat.tanggal_cair
                            ? `Diterima ${formatDateToLocale(riwayat.tanggal_cair)}.`
                            : riwayat.is_kembalikan_negara
                              ? "Pencairan gagal, dana dikembalikan ke negara."
                              : "Menunggu pencairan."}
                        </p>
                        {riwayat.tanggal_cair && (
                          <>
                            {/* <p className="text-xs leading-5 text-[#667085]">
                              (Rp
                              {riwayat.nominal
                                ? formatCurrencyToLocale(riwayat.nominal)
                                : "-"}
                              )
                            </p> */}
                            <p className="text-xs leading-5 text-[#667085]">
                              Bank Penyalur:{" "}
                              <span className="font-semibold">
                                {riwayat.bank.toUpperCase()}
                              </span>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </Container>
    </>
  );
}

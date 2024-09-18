import Container from "@/components/ui/Container";
import { capitalizeEachWord } from "@/utils/transform";
import React, { useEffect, useState } from "react";
import sendFirebase from "@/utils/firebase";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

interface ICardDataPenerima {
  nama: string;
  nik: string;
  nisn: string;
}

export default function CardDataPenerima({
  nama,
  nik,
  nisn,
}: ICardDataPenerima) {
  const [hideNik, setHideNik] = useState(false);

  useEffect(() => {
    if (nama && nisn) {
      sendFirebase({
        id_list_product: 829002,
        list_product_name: "data-penerima-program",
        id_product: parseInt(nisn),
        product_name: nama,
      });
    }
  }, [nama, nisn]);

  return (
    <Container className="!gap-0 !p-0">
      <div className="border-b border-[#EDEDED] px-4 py-3">
        <p className="text-sm font-semibold text-[#1f1f1f]">
          Data Diri Penerima
        </p>
      </div>
      <div className="flex flex-col gap-2 px-4 py-2">
        <p className="text-xs font-normal leading-5 text-[#667085]">
          Nama Lengkap
        </p>
        <p className="text-sm font-semibold text-[#1F1F1F]">
          {capitalizeEachWord(nama) || "-"}
        </p>
      </div>
      {/* <div className="flex flex-col gap-2 px-4 py-2">
        <p className="text-xs font-normal leading-5 text-[#667085]">NIK</p>
        <div className="flex items-center">
          <p className="text-sm font-semibold text-[#1F1F1F]">
            {hideNik ? "****************" : nik || "-"}
          </p>

          <span
            className="ml-2 focus:outline-none"
            onClick={() => setHideNik(!hideNik)}
          >
            {hideNik ? (
              <IconEye className="h-5 w-5 text-gray-500" />
            ) : (
              <IconEyeOff className="h-5 w-5 text-gray-500" />
            )}
          </span>
        </div>
      </div> */}
      <div className="flex flex-col gap-2 px-4 py-2">
        <p className="text-xs font-normal leading-5 text-[#667085]">NISN</p>
        <p className="text-sm font-semibold text-[#1F1F1F]">{nisn || "-"}</p>
      </div>
    </Container>
  );
}

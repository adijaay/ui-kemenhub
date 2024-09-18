import Container from "@/components/ui/Container";
import TextTitle from "@/components/ui/TextTitle";
import React from "react";

export default function CardKategoriPIP() {
  return (
    <Container>
      <TextTitle>Kategori Penerima Program</TextTitle>
      <ul className="flex list-none flex-col gap-2">
        <li className="flex gap-2 text-sm font-semibold text-[#1f1f1f]">
          <div className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-[#182230]"></div>
          <span>Peserta pemegang Kartu Indonesia Pintar (KIP).</span>
        </li>
        <li className="flex gap-2 text-sm font-semibold text-[#1f1f1f]">
          <div className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-[#182230]"></div>
          <span>
            Peserta didik dari keluarga miskin/rentan miskin dan/atau dengan
            pertimbangan khusus:
          </span>
        </li>
        <ul className="flex list-none flex-col gap-2">
          <li className="flex gap-2 pl-4 text-sm font-normal text-[#1f1f1f]">
            <div className="mt-[6px] h-1 w-1 shrink-0 rounded-full border border-black"></div>
            <span>
              Peserta didik dari keluarga peserta Program Keluarga Harapan
              (PKH).
            </span>
          </li>
          <li className="flex gap-2 pl-4 text-sm font-normal text-[#1f1f1f]">
            <div className="mt-[6px] h-1 w-1 shrink-0 rounded-full border border-black"></div>
            <span>
              Peserta didik dari keluarga pemegang Kartu Keluarga Sejahtera
              (KKS).
            </span>
          </li>
          <li className="flex gap-2 pl-4 text-sm font-normal text-[#1f1f1f]">
            <div className="mt-[6px] h-1 w-1 shrink-0 rounded-full border border-black"></div>
            <span>
              Peserta didik yang berstatus yatim piatu/yatim/piatu dari sekolah,
              panti sosial, atau panti asuhan.
            </span>
          </li>
          <li className="flex gap-2 pl-4 text-sm font-normal text-[#1f1f1f]">
            <div className="mt-[6px] h-1 w-1 shrink-0 rounded-full border border-black"></div>
            <span>Peserta didik yang terkena dampak bencana alam.</span>
          </li>
          <li className="flex gap-2 pl-4 text-sm font-normal text-[#1f1f1f]">
            <div className="mt-[6px] h-1 w-1 shrink-0 rounded-full border border-black"></div>
            <span>
              Peserta didik putus sekolah dan yang diharapkan kembali
              bersekolah.
            </span>
          </li>
          <li className="flex gap-2 pl-4 text-sm font-normal text-[#1f1f1f]">
            <div className="mt-[6px] h-1 w-1 shrink-0 rounded-full border border-black"></div>
            <span>
              Peserta didik yang mengalami kelainan fisik, korban musibah, dari
              orang tua yang mengalami pemutusan hubungan kerja, di daerah
              konflik, dari keluarga terpidana, berada di Lembaga
              Pemasyarakatan, memiliki lebih dari 3 saudara tinggal serumah.
            </span>
          </li>
          <li className="flex gap-2 pl-4 text-sm font-normal text-[#1f1f1f]">
            <div className="mt-[6px] h-1 w-1 shrink-0 rounded-full border border-black"></div>
            <span>
              Peserta didik yang berada pada lembaga kursus atau satuan
              pendidikan nonformal lainnya.
            </span>
          </li>
        </ul>
      </ul>
    </Container>
  );
}

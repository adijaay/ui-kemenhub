import Container from "@/components/ui/Container";
import TextTitle from "@/components/ui/TextTitle";
import React from "react";

export default function TujuanPIP() {
  return (
    <Container>
      <TextTitle>Tujuan Program</TextTitle>
      <ul className="flex list-disc flex-col gap-2 pl-4">
        <li className="pl-2 text-sm font-normal text-[#1f1f1f]">
          Mencegah siswa dari kemungkinan putus sekolah.
        </li>
        <li className="pl-2 text-sm font-normal text-[#1f1f1f]">
          Mengajak siswa yang telah putus sekolah bisa kembali melanjutkan
          pendidikannya.
        </li>
        <li className="pl-2 text-sm font-normal text-[#1f1f1f]">
          Meringankan beban biaya pendidikan peserta didik, baik biaya langsung
          maupun tidak langsung.
        </li>
      </ul>
    </Container>
  );
}

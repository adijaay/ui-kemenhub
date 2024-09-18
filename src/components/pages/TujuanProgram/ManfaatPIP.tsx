import Container from "@/components/ui/Container";
import TextTitle from "@/components/ui/TextTitle";
import React from "react";

export default function ManfaatPIP() {
  return (
    <Container>
      <TextTitle>Manfaat Program</TextTitle>
      <ul className="flex list-disc flex-col gap-2 pl-4">
        <li className="pl-2 text-sm font-normal text-[#1f1f1f]">
          Akses pendidikan merata sehingga semua peserta didik terdaftar dapat
          menyelesaikan pendidikan hingga tamat tingkat menengah.
        </li>
        <li className="pl-2 text-sm font-normal text-[#1f1f1f]">
          Dukungan finansial untuk mengurangi beban biaya yang harus ditanggung
          oleh keluarga peserta didik.
        </li>
        <li className="pl-2 text-sm font-normal text-[#1f1f1f]">
          Meningkatkan kesempatan bagi anak-anak untuk memperoleh pendidikan
          yang layak.
        </li>
      </ul>
    </Container>
  );
}

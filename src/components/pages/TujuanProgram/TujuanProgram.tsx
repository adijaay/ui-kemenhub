import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import React from "react";
import ManfaatPIP from "./ManfaatPIP";
import TujuanPIP from "./TujuanPIP";
import ButtonKategoriPenerima from "./ButtonKategoriPenerima";

export default function TujuanProgram() {
  return (
    <>
      <Container>
        <img src="/img/kartu-kip.png" alt="kartu-kip" />
        <Text className="text-justify">
          <span className="font-semibold">Program Indonesia Pintar (PIP)</span>{" "}
          ini dirancang untuk memastikan anak-anak usia sekolah dari keluarga
          miskin, rentan miskin, dan prioritas tetap mendapatkan akses
          pendidikan hingga tamat pendidikan menengah. Program ini mencakup
          jalur formal(SD hingga SMA/SMK dan jalur nonformal paket A hingga
          paket C, serta pendidikan khusus.
        </Text>
      </Container>

      <TujuanPIP />
      <ManfaatPIP />
      <ButtonKategoriPenerima />
    </>
  );
}

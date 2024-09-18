/* eslint-disable react-hooks/exhaustive-deps */
import TextField from "@/components/commons/TextField";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextTitle from "@/components/ui/TextTitle";
import { validateNik, validateNisn } from "@/utils/validation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TResponseData } from "../DataPenerima/DataPenerima";
import { SpinnerLoading } from "@/components/ui/SpinnerLoading";

interface ICekPenerimaProgram {
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
  setShakeTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CekPenerimaProgram({
  setShowNotification,
  setShakeTrigger,
}: ICekPenerimaProgram) {
  const router = useRouter();

  const [nisn, setNisn] = useState({
    data: "",
    error: false,
    errorDesc: "",
  });

  const [nik, setNik] = useState({
    data: "",
    error: false,
    errorDesc: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangeNisn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) && inputValue.length <= 10) {
      setNisn({ ...nisn, data: e.target.value });
    }
  };

  const handleChangeNik = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) && inputValue.length <= 16) {
      setNik({ ...nik, data: e.target.value });
    }
  };

  const submitHandler = async () => {
    const nisnError = validateNisn(nisn.data);
    const nikError = validateNik(nik.data);

    if (nisnError || nikError) {
      if (nisnError) {
        setNisn({ ...nisn, error: true, errorDesc: nisnError });
      } else {
        setNisn({ ...nisn, error: false, errorDesc: "" });
      }

      if (nikError) {
        setNik({ ...nik, error: true, errorDesc: nikError });
      } else {
        setNik({ ...nik, error: false, errorDesc: "" });
      }

      if (!navigator.onLine) {
        router.push("/offline");
      }
    } else {
      setIsSubmitting(true);
      try {
        const response = await fetch(
          `${process.env.BASE_API_URL}/api/v1/data-penerima?nik=${nik.data}&nisn=${nisn.data}`,
        );

        if (response.status === 408) {
          router.push("/408");
          return;
        }

        const responseJson: TResponseData = await response.json();

        if (responseJson.success) {
          router.push({
            pathname: "/data-penerima-program",
            query: { nisn: nisn.data, nik: nik.data },
          });
        } else {
          setShowNotification(true);
          setShakeTrigger((prev) => !prev);
        }
      } catch (error) {
        if (!navigator.onLine) {
          router.push("/offline");
        } else {
          setShowNotification(true);
          setShakeTrigger((prev) => !prev);
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  useEffect(() => {
    setNisn({ ...nisn, error: false, errorDesc: "" });
  }, [nisn.data]);

  useEffect(() => {
    setNik({ ...nik, error: false, errorDesc: "" });
  }, [nik.data]);

  return (
    <Container>
      <TextTitle className="text-base">Cek Penerima Program</TextTitle>
      <TextField
        id="nisn"
        data-testid="nisn"
        label="Nomor Induk Siswa Nasional (NISN)"
        placeholder="Contoh: 112377281"
        type="text"
        inputMode="numeric"
        pattern="\d*"
        value={nisn.data}
        onClear={() => setNisn({ ...nisn, data: "" })}
        onChange={handleChangeNisn}
        error={nisn.error}
        errorDesc={nisn.errorDesc}
        clearable
      />

      <TextField
        id="nik"
        data-testid="nik"
        label="Nomor Induk Kependudukan (NIK)"
        placeholder="Contoh: 3530009712399000"
        type="text"
        inputMode="numeric"
        pattern="\d*"
        value={nik.data}
        onClear={() => setNik({ ...nik, data: "" })}
        onChange={handleChangeNik}
        error={nik.error}
        errorDesc={nik.errorDesc}
        clearable
      />

      <Button
        data-testid="cekPenerima"
        text={isSubmitting ? <SpinnerLoading /> : "Cek Penerima"}
        onClick={submitHandler}
        disabled={isSubmitting}
      />
    </Container>
  );
}

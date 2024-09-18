/* eslint-disable react-hooks/exhaustive-deps */
import TextField from "@/components/commons/TextField";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextTitle from "@/components/ui/TextTitle";
import { validateCity, validateCode, validateNumber } from "@/utils/validation";
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

  const [vehicleCity, setVehicleCity] = useState({
    data: "",
    error: false,
    errorDesc: "",
  });

  const [vehicleNumber, setVehicleNumber] = useState({
    data: "",
    error: false,
    errorDesc: "",
  });

  const [vehicleCode, setVehicleCode] = useState({
    data: "",
    error: false,
    errorDesc: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^[a-zA-Z]*$/.test(inputValue) && inputValue.length <= 2) {
      setVehicleCity({ ...vehicleCity, data: e.target.value });
    }
  };
  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^[a-zA-Z0-9]*$/.test(inputValue) && inputValue.length <= 4) {
      setVehicleNumber({ ...vehicleNumber, data: e.target.value });
    }
  };

  const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^[a-zA-Z]*$/.test(inputValue) && inputValue.length <= 3) {
      setVehicleCode({ ...vehicleCode, data: e.target.value });
    }
  };

  const submitHandler = async () => {
    const vehicleCityError = validateCity(vehicleCity.data);
    const vehicleNumberError = validateNumber(vehicleNumber.data);
    const vehicleCodeError = validateCode(vehicleCode.data);

    if (vehicleCityError || vehicleNumberError || vehicleCodeError) {
      if (vehicleCityError) {
        setVehicleCity({
          ...vehicleCity,
          error: true,
          errorDesc: vehicleCityError,
        });
      } else {
        setVehicleCity({ ...vehicleCity, error: false, errorDesc: "" });
      }
      if (vehicleNumberError) {
        setVehicleNumber({
          ...vehicleNumber,
          error: true,
          errorDesc: vehicleNumberError,
        });
      } else {
        setVehicleNumber({ ...vehicleNumber, error: false, errorDesc: "" });
      }

      if (vehicleCodeError) {
        setVehicleCode({
          ...vehicleCode,
          error: true,
          errorDesc: vehicleCodeError,
        });
      } else {
        setVehicleCode({ ...vehicleCode, error: false, errorDesc: "" });
      }

      if (!navigator.onLine) {
        router.push("/offline");
      }
    } else {
      setIsSubmitting(true);
      try {
        const response = await fetch(
          `${process.env.BASE_API_URL}/api/v1/data-penerima?area=${vehicleCode.data}&code=${vehicleCity.data}&number=${vehicleNumber.data}`,
        );

        if (response.status === 408) {
          router.push("/408");
          return;
        }

        const responseJson: TResponseData = await response.json();

        if (responseJson.success) {
          router.push({
            pathname: "/data-penerima-program",
            query: {
              vehicleCity: vehicleCity.data,
              vehicleNumber: vehicleNumber.data,
              vehicleCode: vehicleCode.data,
            },
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
    setVehicleCity({ ...vehicleCity, error: false, errorDesc: "" });
    setVehicleCode({ ...vehicleCode, error: false, errorDesc: "" });
    setVehicleNumber({ ...vehicleNumber, error: false, errorDesc: "" });
  }, [vehicleCity.data, vehicleCode.data, vehicleNumber.data]);

  return (
    <Container>
      <TextTitle className="text-base">Plat Nomor Kendaraan</TextTitle>
      <div className="flex w-full items-center justify-start gap-2">
        <div className="w-full max-w-[64px]">
          <TextField
            id="vehicleCity"
            data-testid="vehicleCity"
            placeholder="XX"
            type="text"
            inputMode="text"
            value={vehicleCity.data}
            onClear={() => setVehicleCity({ ...vehicleCity, data: "" })}
            onChange={handleChangeCity}
            error={vehicleCity.error}
            errorDesc={vehicleCity.errorDesc}
          />
        </div>

        <div className="w-full">
          <TextField
            id="vehicleNumber"
            data-testid="vehicleNumber"
            placeholder="1234"
            type="text"
            inputMode="numeric"
            pattern="\d*"
            value={vehicleNumber.data}
            onClear={() => setVehicleNumber({ ...vehicleNumber, data: "" })}
            onChange={handleChangeNumber}
            error={vehicleNumber.error}
            errorDesc={vehicleNumber.errorDesc}
          />
        </div>

        <div className="w-full max-w-[64px]">
          <TextField
            id="vehicleCode"
            data-testid="vehicleCode"
            placeholder="XX"
            type="text"
            inputMode="text"
            value={vehicleCode.data}
            onClear={() => setVehicleCode({ ...vehicleCode, data: "" })}
            onChange={handleChangeCode}
            error={vehicleCode.error}
            errorDesc={vehicleCode.errorDesc}
          />
        </div>
      </div>

      <Button
        data-testid="cekPenerima"
        text={isSubmitting ? <SpinnerLoading /> : "Cek"}
        onClick={submitHandler}
        disabled={isSubmitting}
      />
    </Container>
  );
}

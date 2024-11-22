/* eslint-disable react-hooks/exhaustive-deps */
import TextField from "@/components/commons/TextField";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TextTitle from "@/components/ui/TextTitle";
import { validateCity, validateCode, validateNumber } from "@/utils/validation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SpinnerLoading } from "@/components/ui/SpinnerLoading";
import { IconAlertTriangleFilled } from "@tabler/icons-react";
import Text from "@/components/ui/Text";

export default function CekKelaikan() {
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
        if (vehicleCity && vehicleNumber && vehicleCode) {
          localStorage.setItem("vehicleCity", vehicleCity.data);
          localStorage.setItem("vehicleNumber", vehicleNumber.data);
          localStorage.setItem("vehicleCode", vehicleCode.data);
          router.push("/data-kelaikan-kendaraan");
        }
      } catch (error) {
        if (!navigator.onLine) {
          router.push("/offline");
        } else {
          console.error(error);
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
      <TextTitle className="text-base !font-medium">
        Plat Nomor Kendaraan
      </TextTitle>
      <div className="flex w-full items-center justify-start gap-2">
        <div className="w-full max-w-16">
          <TextField
            id="vehicleCity"
            data-testid="vehicleCity"
            placeholder="XX"
            type="text"
            inputMode="text"
            style={{ textTransform: "uppercase" }}
            value={vehicleCity.data}
            onClear={() => setVehicleCity({ ...vehicleCity, data: "" })}
            onChange={handleChangeCity}
            error={vehicleCity.error}
            errorDesc={vehicleCity.errorDesc}
            showError={false}
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
            style={{ textTransform: "uppercase" }}
            value={vehicleNumber.data}
            onClear={() => setVehicleNumber({ ...vehicleNumber, data: "" })}
            onChange={handleChangeNumber}
            error={vehicleNumber.error}
            errorDesc={vehicleNumber.errorDesc}
            showError={false}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              const regex = /[^0-9]/g;

              if (regex.test(target.value)) {
                target.value = target.value.replace(regex, "");
              }
              if (target.value.length > 4) {
                target.value = target.value.slice(0, 4);
              }
            }}
            onKeyDown={(e) => {
              const isNumeric = /^[0-9]$/;
              const isControlKey = [
                "Backspace",
                "ArrowLeft",
                "ArrowRight",
                "Delete",
              ].includes(e.key);
              if (!isNumeric.test(e.key) && !isControlKey) {
                e.preventDefault();
              }
            }}
          />
        </div>

        <div className="w-full max-w-16">
          <TextField
            id="vehicleCode"
            data-testid="vehicleCode"
            placeholder="XX"
            type="text"
            inputMode="text"
            style={{ textTransform: "uppercase" }}
            value={vehicleCode.data.toUpperCase()}
            onClear={() => setVehicleCode({ ...vehicleCode, data: "" })}
            onChange={(e) => {
              handleChangeCode(e);
              e.target.value = e.target.value.toUpperCase();
            }}
            error={vehicleCode.error}
            errorDesc={vehicleCode.errorDesc}
            showError={false}
          />
        </div>
      </div>

      {vehicleCity.error || vehicleNumber.error || vehicleCode.error ? (
        <div className="flex items-center gap-1">
          <IconAlertTriangleFilled size={12} color="#F04438" />
          <Text className="!text-xs !text-[#F04438]">
            {vehicleCity.errorDesc}
            {vehicleNumber.errorDesc}
            {vehicleCode.errorDesc}
          </Text>
        </div>
      ) : undefined}

      <Button
        data-testid="cekKelaikan"
        text={isSubmitting ? <SpinnerLoading /> : "Cek"}
        onClick={submitHandler}
        disabled={isSubmitting || !vehicleCity.data || !vehicleNumber.data || !vehicleCode.data}
      />
    </Container>
  );
}

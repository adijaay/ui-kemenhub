/* eslint-disable react-hooks/exhaustive-deps */
import { IconCircleCheckFilled, IconCircleX } from "@tabler/icons-react";
import React, { useEffect } from "react";
import Text from "./Text";

interface ISnackbar {
  isShow: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  isSuccess: boolean;
}

export default function Snackbar({
  isShow,
  setShow,
  text,
  isSuccess,
}: ISnackbar) {
  useEffect(() => {
    if (isShow) {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isShow]);

  return (
    <div
      className={`fixed left-4 right-4 top-4 z-40 flex items-center gap-2 rounded-xl bg-white p-4 shadow-[0_0_3px_0_#0000001A] ${isShow ? "translate-y-0" : "-translate-y-[calc(200%)]"} duration-300 ease-in-out`}
      style={{ boxShadow: "0 4px 20px 0 #00000026" }}
    >
      {isSuccess ? (
        <IconCircleCheckFilled
          data-testid="success-icon"
          size={24}
          color="#19B26B"
        />
      ) : (
        <IconCircleX data-testid="x-icon" size={24} color="#AF2A2D" />
      )}
      <Text className="!font-medium">{text}</Text>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import TextTitle from "../ui/TextTitle";
import Text from "../ui/Text";
import {
  IconAlertCircle,
  IconCircleX,
  IconInfoCircle,
  IconX,
} from "@tabler/icons-react";

interface INotifikasi extends React.HTMLAttributes<HTMLDivElement> {
  isShow: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  closeable?: boolean;
  title?: string;
  message: string;
  status: "caution" | "alert" | "info";
  triggerShake?: boolean;
}

export default function Notifikasi({
  isShow = true,
  setShow,
  closeable = false,
  title = "",
  message,
  status,
  triggerShake,
  children,
  ...props
}: INotifikasi) {
  const [isShaking, setIsShaking] = useState<boolean>(false);

  const statusIcon = (status: "caution" | "alert" | "info") => {
    switch (status) {
      case "caution":
        return (
          <IconAlertCircle
            data-testid="icon-caution"
            size={24}
            color="#F79008"
            className="shrink-0"
          />
        );
      case "alert":
        return (
          <IconCircleX
            data-testid="icon-alert"
            size={24}
            color="#AF2A2D"
            className="shrink-0"
          />
        );
      case "info":
        return (
          <IconInfoCircle
            data-testid="icon-info"
            size={24}
            color="#2871FF"
            className="shrink-0"
          />
        );
    }
  };

  const styleContainer = (status: "caution" | "alert" | "info") => {
    switch (status) {
      case "caution":
        return "!border-[#FEDF88] !bg-[#FFFCF5]";
      case "alert":
        return "!border-[#DBB7B7] !bg-[#F8F2F2]";
      case "info":
        return "!border-[#B2CCFF] !bg-[#F6F8FF]";
    }
  };

  useEffect(() => {
    if (isShow) {
      setIsShaking(true);
      const timer = setTimeout(() => {
        setIsShaking(false);
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [isShow, triggerShake]);

  return (
    isShow && (
      <Container
        id="notifikasi"
        data-testid="notifikasi"
        className={`${isShaking ? "gentle-shake" : ""} !rounded-xl !p-4 ${styleContainer(status)}`}
        {...props}
      >
        <div className="flex gap-3">
          {statusIcon(status)}
          <div className="flex">
            <div className="flex w-full flex-col gap-1">
              {title && <TextTitle className="text-sm">{title}</TextTitle>}
              <Text className="text-xs leading-[18px]">{message}</Text>

              {children}
            </div>
            {closeable && (
              <IconX
                data-testid="icon-close"
                onClick={() => setShow(false)}
                size={12}
                color="#182230"
                className="shrink-0"
              />
            )}
          </div>
        </div>
      </Container>
    )
  );
}

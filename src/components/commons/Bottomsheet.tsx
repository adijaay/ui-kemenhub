import { IconX } from "@tabler/icons-react";
import { useEffect } from "react";

interface IBottomsheet {
  title?: string;
  isShow: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function Bottomsheet({
  title = "",
  isShow,
  setShow,
  children,
}: IBottomsheet) {
  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isShow]);

  return (
    <>
      <div
        onClick={() => setShow(false)}
        className={`fixed left-0 top-0 z-20 h-screen w-screen bg-[#1018287A] ${isShow ? "visible opacity-100" : "invisible opacity-0"} duration-300`}
      />
      <div
        className={`fixed bottom-0 left-0 z-30 flex w-full flex-col gap-4 rounded-t-2xl bg-white p-4 ${isShow ? "translate-y-0" : "translate-y-full"} duration-300`}
      >
        <div className="flex w-full items-center justify-between">
          <p className="text-base font-semibold text-[#212121]">{title}</p>
          <IconX
            color="#182230"
            width={16}
            height={16}
            cursor={"pointer"}
            onClick={() => setShow(false)}
          />
        </div>

        {children}
      </div>
    </>
  );
}

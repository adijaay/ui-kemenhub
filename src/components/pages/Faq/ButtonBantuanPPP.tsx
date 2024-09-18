import { IconChevronRight } from "@tabler/icons-react";
import React from "react";
import UtilsSDK from "@/utils/utilssdkv2.4.3";

export default function ButtonBantuanPPP() {
  const sdk = new UtilsSDK();

  const buttonHandler = () => {
    sdk.toMainApp("/home");
  };

  return (
    <button
      type="button"
      onClick={buttonHandler}
      className="relative flex items-center justify-between overflow-hidden rounded-xl bg-[#AF2A2D] px-4 py-3"
    >
      <img
        src="/decorations/vector-button-1.png"
        alt="vector-1"
        className="absolute right-0 top-13 w-[100px] rounded-br-xl"
      />
      <img
        src="/decorations/vector-button-2.png"
        alt="vector-2"
        className="absolute bottom-[27px] right-[35px] w-[100px] rounded-br-xl"
      />
      <img
        src="/decorations/vector-button-3.png"
        alt="vector-3"
        className="absolute left-[0px] top-[28px] w-[100px] rounded-bl-xl"
      />

      <div className="z-10 w-full text-start">
        <p className="text-xs font-normal text-white">
          Anda dapat mencoba menghubungi
        </p>
        <p className="text-sm font-bold text-white">
          Pusat Bantuan Portal Pelayanan Publik
        </p>
      </div>
      <IconChevronRight size={24} color="#ffffff" stroke={2} />
    </button>
  );
}

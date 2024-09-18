import { useEffect } from "react";

interface IBottomsheet {
  imgKip: string | undefined;
  isShow: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Bottomsheet({ imgKip, isShow, setShow }: IBottomsheet) {
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
        className={`fixed bottom-0 left-0 z-30 flex w-full flex-col gap-4 rounded-t-2xl bg-white px-4 ${isShow ? "translate-y-0" : "translate-y-full"} duration-300`}
      >
        <div className="pt-4">
          <p className="text-base font-semibold text-[#212121]">
            Kartu Indonesia Pintar
          </p>
        </div>
        <div className="max-w-full overflow-hidden rounded-md border">
          <img
            src={imgKip}
            alt="kartu-kip"
            className="mx-auto w-[500px] max-w-full scale-x-[106.5%] scale-y-[106.5%]"
          />
        </div>
        <div className="border-t border-[#EAECF0]">
          <button
            type="button"
            onClick={() => setShow(false)}
            className="h-12 w-full text-center text-sm font-semibold text-[#1f1f1f]"
          >
            Tutup
          </button>
        </div>
      </div>
    </>
  );
}

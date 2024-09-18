import Bottomsheet from "@/components/commons/Bottomsheet";
import Snackbar from "@/components/ui/Snackbar";
import { IconCopy } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

interface ICardLihatKartu {
  noKartu: string;
}

export default function CardLihatKartu({ noKartu }: ICardLihatKartu) {
  const [bottomsheetShow, setBottomsheetShow] = useState<boolean>(false);
  const [snackbarShow, setSnackbarShow] = useState<boolean>(false);
  const [snackbarData, setSnackbarData] = useState({
    isSuccess: true,
    text: "Berhasil Disalin",
  });

  const [imageKip, setImageKip] = useState<string>();

  const buttonCopyHandle = async () => {
    try {
      await navigator.clipboard.writeText(noKartu);
      setSnackbarData({ isSuccess: true, text: "Berhasil Disalin" });
    } catch (err) {
      setSnackbarData({ isSuccess: false, text: "Gagal Menyalin" });
    }
    setSnackbarShow(true);
  };

  const buttonKartuHandle = () => {
    setBottomsheetShow(true);
  };

  useEffect(() => {
    if (noKartu) {
      fetch(`${process.env.BASE_API_URL}/api/v1/kartu-kip/${noKartu}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch image");
          }
          return response.blob();
        })
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          setImageKip(url);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [noKartu]);

  return (
    <>
      <Snackbar
        isShow={snackbarShow}
        setShow={setSnackbarShow}
        text={snackbarData.text}
        isSuccess={snackbarData.isSuccess}
      />
      <Bottomsheet
        imgKip={imageKip}
        isShow={bottomsheetShow}
        setShow={setBottomsheetShow}
      />

      <div className="relative flex items-center justify-between rounded-xl bg-[#AF2A2D] px-4 py-3">
        <img
          src="/decorations/vector-button-1.png"
          alt="decoration-1"
          className="absolute bottom-0 right-0 w-[100px] rounded-br-xl"
        />
        <img
          src="/decorations/vector-button-2.png"
          alt="decoration-2"
          className="absolute bottom-[30px] right-[35px] w-[100px]"
        />
        <img
          src="/decorations/vector-button-3.png"
          alt="decoration-3"
          className="absolute bottom-0 left-0 w-[100px] rounded-bl-xl"
        />

        <div className="z-10 flex flex-col gap-1">
          <p className="text-xs font-normal text-white">
            Kartu Indonesia Pintar
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-white">{noKartu}</p>
            <button type="button" onClick={buttonCopyHandle}>
              <IconCopy size={24} color="#FCFCFD" />
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={buttonKartuHandle}
          className="z-10 rounded-2xl bg-white px-3 py-[6px] text-xs font-semibold text-[#AF2A2D]"
        >
          Lihat kartu
        </button>
      </div>
    </>
  );
}

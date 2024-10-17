/* eslint-disable @typescript-eslint/no-empty-function */
import Notifikasi from "@/components/commons/Notifikasi";
import CekKelaikan from "./CekKelaikan";
import Accordion from "@/components/commons/Accordion";
import { faqData } from "@/constants/faq";
import { useEffect, useState } from "react";
import { getAllCookies } from "@/utils/utils";

export default function Home() {
  const [cookies, setCookies] = useState<{ [key: string]: string }>();

  useEffect(() => {
    const allCookies = getAllCookies();

    setCookies(allCookies);
  }, []);
  return (
    <>
      <Notifikasi
        setShow={() => {}}
        data-testid="notifikasi"
        isShow={true}
        message="Anda hanya dapat melakukan pengecekan kendaraan berplat nomor kuning."
        status="info"
      />

      <CekKelaikan />

      <div className="text-[16px] font-semibold capitalize leading-6 text-[#000]">
        <p>Paling banyak ditanya</p>
      </div>
      <Accordion accordionData={faqData} />

      <div className="space-y-2 text-red-500">
        <h3>All Cookies</h3>
        {cookies && (
          <ul>
            {Object.entries(cookies).map(([name, value]) => (
              <li key={name}>
                <strong>{name}:</strong> {value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

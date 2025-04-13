import { TResponseData } from "@/definitions/vehicle";
import { MouseEvent, useEffect, useState } from "react"
import { GoogleGenAI } from "@google/genai";
import { IconPaperclip, IconX } from "@tabler/icons-react";

interface ConversationHistoryItem {
  role: string;
  parts: { text: string }[];
}

export default function ChatbotBase({vehicleNumber="", dataKendaraan}: {vehicleNumber: string, dataKendaraan: TResponseData}) {
  const [chatText, setChatText] = useState('');
  const [spionamText, setSpionamText] = useState(``);
  const [conversationHistory, setConversationHistory] = useState<ConversationHistoryItem[]>([]);
  const [blueText, setBlueText] = useState(``);
  const [loading, setLoading] = useState(false);
  const [attachment, setAttachment] = useState<string[]>([]);

  useEffect(() => {
    const now = new Date();
    console.log(dataKendaraan?.data);
    if(dataKendaraan?.data.data_spionam.tgl_exp_kps !== "") {
      const expiredDateSpionam = new Date(dataKendaraan?.data?.data_spionam.tgl_exp_kps);
      const isexpiredDateSpionamBiggerThanNow = expiredDateSpionam.getTime() > now.getTime();
      if(!isexpiredDateSpionamBiggerThanNow) {
        setSpionamText('Data Spionam Kendaraan ini sudah tidak berlaku sejak tanggal ' + expiredDateSpionam.toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) + 'Jangan khawatir, Kendaraan tetap dapat digunakan asal uji BLUe masih berlaku.');
      }
    } else {
      setSpionamText('Data Spionam Kendaraan ini tidak ditemukan. Jangan khawatir, Kendaraan tetap dapat digunakan asal uji BLUe masih berlaku.');
    }
      const expiredDateBlue = new Date(dataKendaraan?.data?.data_blue.masa_berlaku);
      const isexpiredDateBlueBiggerThanNow = expiredDateBlue.getTime() > now.getTime();
      if (isexpiredDateBlueBiggerThanNow) {
        setBlueText(`<br/><strong>Pernyataan Hasil Uji BLUe</strong><br/>Kendaraan ini dinyatakan <strong style="color: green;">layak jalan</strong> dengan uji BLUe masih berlaku hingga ` + expiredDateBlue.toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }));
      } else {
        setBlueText(`<br/><strong>Pernyataan Hasil Uji BLUe</strong><br/>Kendaraan ini dinyatakan <strong style="color: red;">tidak layak jalan</strong> dengan uji BLUe sudah tidak berlaku sejak tanggal ` + expiredDateBlue.toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }));
      }
    }, [])

    useEffect(() => {
      setConversationHistory([{role: "model", parts: [{ text: `Halo, GebrINA di sini akan membantu Anda mendapatkan informasi terkait kelaiakan kendaraan pada nopol ${vehicleNumber}. ${spionamText}<br/> ${blueText} <br/><br/> Adakah yang bisa GebrINA bantu kembali?` }] }]);
    }, [spionamText, blueText])

    const apiKey = process.env.GOOGLE_GENAI_APIKEY
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_APIKEY });


    async function sendMessage (e: MouseEvent<Element, MouseEvent>) {
      e.preventDefault();
      setLoading(true);
      if(conversationHistory.length === 0) {setLoading(false); return;}
      let attachmentString = attachment.join('; ');
      conversationHistory.push({role: "user", parts: [{ text: chatText + (attachmentString ? `<br/><br/>Lampiran: ${attachmentString}` : '') }] });
      setChatText("");
      setAttachment([]);
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [...conversationHistory],
        config: {
          systemInstruction: "Namamu GebrINA. Kamu berada di sebuah layanan bernama Cek Kelaiakan Kendaraan pada aplikasi INAku yang terintegrasi dengan Kementerian Perhubungan Indonesia. kamu adalah sebuah customer service untuk melayani permintaan pengguna terhadap informasi cek kelaiakan kendaraan pada tanggal hari ini. Format teks balasan adalah tag html, gunakan <strong> dan <br/> untuk membuat teks menjadi bold dan baris baru. Jika pengguna ingin melaporkan sebuah aduan, maka mintalah detail kejadian yang menimpa pengguna. Tanyalah apakah pengguna ingin melaporkan kejadian ini atau tidak setelah pengguna menjawab detail kejadian. jika pengguna menjawab iya pada balasan selanjutnya, mintalah lampiran bukti foto. data Cek Kelaiakan Kendaraan terdiri dari data uji BLUe dan data SPIONAM. data SPIONAM memiliki jarak sinkronisasi dari data offline Kementerian Perhubungan ke online dengan waktu yang belum diketahui. jika data uji BLUe tidak expired maka kendaraan dinyatakan layak jalan, data SPIONAM tidak terlalu berpengaruh karena jika kendaraan memiliki data uji BLUe yang aktif maka dapat dipastikan perizinan yang lain sudah aman. Ingatlah bahwa tanggal expired tergantung dengan tanggal hari ini. KPS adalah spionam dan uji adalah uji BLUe. Kamu tidak perlu menjelaskan terkait data kembali, jawab saja tergantung permasalahan yang ada pada pengguna. Jika ada pemilik/vendor yang mengadukan keluhan data tidak sesuai, mohon terima keluhan dan minta lampiran data yang sesuai",
        }
      });
      setConversationHistory([...conversationHistory, {role: "model", parts: [{ text: response.text ?? "" }] }]);
      setLoading(false);
    }

    useEffect(() => {
      console.log(conversationHistory);
      const bodychat = document.getElementById("bodychat");
      bodychat?.scrollTo({ top: bodychat.scrollHeight, behavior: "smooth" });
    }, [conversationHistory]);

    return (
      <div style={{
          boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        }}
        className=" bg-white p-6 rounded-lg border border-[#e5e7eb] h-auto">
        <div className="pr-4 pb-8" style={{ minWidth: '100%', display: 'table' }}>
          {conversationHistory && conversationHistory.map((item, index) => {
            if(item.role === "model") {
              return (
                <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1"><span
                  className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1"><svg stroke="none" fill="black" stroke-width="1.5"
                      viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                      </path>
                    </svg></div>
                </span>
                <p className="leading-relaxed break-words"><span className="block font-bold text-gray-700">GebrINA </span><span className="block" dangerouslySetInnerHTML={{ __html: item.parts[0].text ?? `` }}></span>
                </p>
                </div>
              )
            } else {
              return (
                <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1"><span
                  className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1"><svg stroke="none" fill="black" stroke-width="0"
                      viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z">
                      </path>
                    </svg></div>
                </span>
                <p className="leading-relaxed break-words"><span className="block font-bold text-gray-700">You </span><span className="block" style={{ wordBreak: 'break-word' }} dangerouslySetInnerHTML={{ __html: item.parts[0].text ?? "" }}></span></p>
              </div>
              )
            }
          })}
        </div>
          
        <div className="flex flex-col items-center pt-0 fixed bottom-0 w-full left-0 p-4 justify-center" >
          {attachment.map((item, index) => {
            return(
              <div className="w-full flex justify-start items-center mb-1">
                <p className="text-sm font-regular italic text-gray-600 px-3 bg-blue-100 rounded-full flex justify-center items-center">{item}<span className="text-black ml-3" onClick={() => setAttachment(attachment.filter((_, i) => i !== index))}><IconX size={16} color="#000000" /></span></p>
              </div>
            )
          })}
          <form className="flex items-center justify-center w-full space-x-2">
            <textarea
              className="resize-none flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
              style={{
                boxShadow: "0 0 #0000, 0 0 #0000, 0 2px 4px 0 rgb(0 0 0 / 0.25)",
              }}
              placeholder="Tulis pesan Anda disini" value={chatText} onChange={(e) => setChatText(e.target.value)} onInput={(e) => {
                const textarea = e.target as HTMLTextAreaElement;
                textarea.style.height = 'auto';
              }}/>
            <input type="file" className="hidden" id="file" name="file" onChange={(e) => {
              const file = (e.target as HTMLInputElement).files?.[0];
              if (file) {
                console.log(file.name);
                  setAttachment([...attachment, file.name]);
              }
            }}/>
            <label htmlFor="file" className="flex items-center justify-center text-sm font-medium text-black hover:text-blue-400 h-10 py-2 rounded-md cursor-pointer ">
             <IconPaperclip size={20} />
            </label>
            <button
            style={{
              boxShadow: "0 0 #0000, 0 0 #0000, 0 2px 4px 0 rgb(0 0 0 / 0.25)",
            }}
            disabled={!chatText || loading}
            onClick={(e: any) => sendMessage(e)}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2">
              Kirim</button>
          </form>
        </div>

      </div>
    )
}
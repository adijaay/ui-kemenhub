import React from "react";

interface IChip {
  text: string;
}

export default function Chip({ text }: IChip) {
  const chipStyle = (statusChip: string) => {
    switch (statusChip) {
      case "Selesai":
        return "bg-[#ECFEF3] text-[#19B26B]";
      case "Perlu Aktivasi":
        return "bg-[#FFFAEA] text-[#F79008]";
      //TBD: Info textnya apa
      case "info":
        return "bg-[#F6F8FF] text-[#2871FF]";
    }
  };

  return (
    <div className={`rounded-full px-2 py-1 ${chipStyle(text)}`}>
      <p className="text-sm font-medium leading-5">{text}</p>
    </div>
  );
}

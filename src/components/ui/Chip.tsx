import React from "react";

interface IChip {
  text: string;
  type: "complete" | "warning" | "info" | "error";
}

export default function Chip({ text, type = "complete" }: IChip) {
  const chipStyle = (statusChip: string) => {
    switch (statusChip) {
      case "complete":
        return "bg-[#ECFEF3] text-[#19B26B]";
      case "warning":
        return "bg-[#FFFAEA] text-[#F79008]";
      case "info":
        return "bg-[#F6F8FF] text-[#2871FF]";
      case "error":
        return "bg-[#F4EAEA] text-[#AF2A2D]";
    }
  };

  return (
    <div className={`max-w-fit rounded-full px-2 py-1 ${chipStyle(type)}`}>
      <p className="text-[14px] font-medium leading-5">{text}</p>
    </div>
  );
}

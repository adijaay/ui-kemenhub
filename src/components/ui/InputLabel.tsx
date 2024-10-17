import React from "react";

interface IInputLabel {
  text: string;
}

export default function InputLabel({ text }: IInputLabel) {
  return <p className="text-sm font-normal text-[#212121]">{text}</p>;
}

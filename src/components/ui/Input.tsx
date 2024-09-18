import { IconX } from "@tabler/icons-react";
import React from "react";

export interface IInputBase
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "number";
  placeholder: string;
  error?: false;
  value: string;
  onClear: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearable?: boolean;
}

export interface IInputWithError
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "number";
  placeholder: string;
  error: true;
  value: string;
  onClear: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearable?: boolean;
}

type IInput = IInputBase | IInputWithError;

export default function Input({
  type = "text",
  placeholder = "Contoh: ...",
  error = false,
  value,
  onClear,
  onChange,
  clearable = false,
  ...props
}: IInput) {
  return (
    <div className="relative flex items-center">
      <input
        type={type}
        min={0}
        value={value}
        onChange={onChange}
        className={`h-12 w-full shrink-0 rounded-xl border bg-[#F9FAFB] pl-4 pr-12 text-base font-normal leading-6 text-[#1D2939] outline-none placeholder-ellipsis focus:border-[#1F1F1F] focus:shadow-[0_0_0_2px_#EAECF0] ${error ? "border-[#F04438]" : "border-[#E1E2EA]"}`}
        placeholder={placeholder}
        {...props}
      />
      {clearable && value && (
        <IconX
          onClick={onClear}
          size={24}
          color="#182230"
          className="absolute right-5 hover:cursor-pointer"
        />
      )}
    </div>
  );
}

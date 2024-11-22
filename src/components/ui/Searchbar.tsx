import { IconSearch, IconX } from "@tabler/icons-react";
import React from "react";

interface ISearchbar {
  placeholder: string;
  value: string;
  onClear: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Searchbar({
  placeholder = "Cari...",
  value,
  onClear,
  onChange,
}: ISearchbar) {
  return (
    <div className="relative flex h-11 items-center gap-3 rounded-xl border border-[#D0D5DD] bg-white px-4">
      <IconSearch size={20} color="#667085" className="shrink-0" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full text-sm font-normal text-[#1F1F1F] outline-none placeholder:text-[#667085]"
      />
      {value && (
        <IconX
          data-testid="icon-x"
          onClick={onClear}
          size={24}
          color="#182230"
          className="shrink-0 hover:cursor-pointer"
        />
      )}
    </div>
  );
}

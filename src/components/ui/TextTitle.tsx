import React from "react";

interface ITextTitle {
  children: React.ReactNode;
  className?: string;
}

export default function TextTitle({ children, className }: ITextTitle) {
  return (
    <p className={`font-semibold text-[#1f1f1f] ${className}`}>{children}</p>
  );
}

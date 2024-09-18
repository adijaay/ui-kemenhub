import React from "react";

interface IText {
  className?: string;
  children: React.ReactNode;
}

export default function Text({ children, className }: IText) {
  return (
    <p className={`text-text-primary text-sm font-normal ${className}`}>
      {children}
    </p>
  );
}

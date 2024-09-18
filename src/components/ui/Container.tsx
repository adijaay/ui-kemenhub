import React from "react";

interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
  rounded?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Container({
  rounded = "rounded-2xl",
  className,
  children,
  ...props
}: IContainer) {
  return (
    <div
      className={`flex flex-col gap-4 ${rounded} border border-[#EAECF0] bg-white px-4 py-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

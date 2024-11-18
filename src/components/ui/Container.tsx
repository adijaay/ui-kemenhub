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
      data-testid="container"
      className={`flex flex-col gap-4 ${rounded} border border-[#EAECF0] bg-white p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

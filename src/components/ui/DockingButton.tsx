import Link from "next/link";
import React from "react";

interface IButtonNext {
  active?: boolean;
  position?: "fixed" | "sticky" | "static";
  text: string;
  button?: boolean;
  link?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function DockingButton({
  active = true,
  position = "fixed",
  text,
  button = false,
  link = "/",
  onClick,
  children,
  type = "button",
}: IButtonNext) {
  return (
    <div
      className={`${position} bottom-0 left-0 w-full border border-[#EDEDED] bg-white p-4`}
    >
      {children}
      {button ? (
        <button
          // eslint-disable-next-line react/button-has-type
          type={type}
          disabled={!active}
          onClick={onClick}
          className={`flex w-full items-center justify-center rounded-xl ${active ? "bg-text-primary text-white" : "pointer-events-none bg-tertiary-fill text-tertiary-text"} h-12 text-center text-sm font-semibold`}
        >
          {text}
        </button>
      ) : (
        <Link
          aria-disabled={!active}
          tabIndex={active ? 0 : -1}
          href={link}
          className={`flex w-full items-center justify-center rounded-xl ${active ? "bg-text-primary text-white" : "pointer-events-none bg-tertiary-fill text-tertiary-text"} h-12 text-center text-sm font-semibold`}
        >
          {text}
        </Link>
      )}
    </div>
  );
}

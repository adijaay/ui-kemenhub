import React, { useState } from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: React.ReactNode;
  onClick: () => void;
}

export default function Button({ text, onClick, disabled, ...props }: IButton) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressStart = () => {
    if (!disabled) {
      setIsPressed(true);
    }
  };

  const handlePressEnd = () => {
    if (!disabled) {
      setIsPressed(false);
      onClick();
    }
  };

  const buttonClass = `flex h-13 rounded-xl items-center justify-center text-base font-semibold ${
    isPressed ? "bg-[#182230]" : "bg-[#0C111D]"
  } ${disabled ? "cursor-not-allowed bg-[#EAECF0] text-[#98A1B2]" : ""}`;

  return (
    <button
      type="button"
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      className={buttonClass}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
}

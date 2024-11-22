import DockingButton from "@/components/ui/DockingButton";
import Image from "next/image";
import React from "react";

interface IErrorState {
  title: string;
  subtitle?: string;
  onClick?: () => void;
  buttonText?: string;
  image: string;
}

const ErrorState: React.FC<IErrorState> = ({
  title = "",
  subtitle = "",
  onClick,
  buttonText = "Button",
  image = "/assets/notfound.png",
}) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-white px-4 text-text-primary">
      <div
        className={"-mt-[83px] flex flex-col items-center justify-center gap-4"}
      >
        <Image src={image} alt="error-image" width={278} height={219} />
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <div className="text-base font-semibold capitalize leading-6">
            {title}
          </div>
          {subtitle ? (
            <div data-testid="subtitle" className="text-center text-sm font-normal leading-5">
              {subtitle}
            </div>
          ) : undefined}
        </div>
      </div>

      {onClick ? (
        <DockingButton onClick={onClick} text={buttonText} button />
      ) : undefined}
    </div>
  );
};

export default ErrorState;

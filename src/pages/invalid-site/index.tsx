import React from "react";

const CustomInvalidStatePage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 px-4">
      <div
        className={"-mt-[67px] flex flex-col items-center justify-center gap-4"}
      >
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <div className="text-center text-sm font-normal leading-5">
            Maaf, layanan ini hanya bisa diakses melalui aplikasi Portal
            Pelayanan Publik
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomInvalidStatePage;

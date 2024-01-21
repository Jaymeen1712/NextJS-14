import LogoIcon from "@/images/icons/logo";
import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center items-end">
      <span className={`font-extrabold text-6xl text-primary`}>V</span>
      <LogoIcon />
    </div>
  );
};

export default Logo;

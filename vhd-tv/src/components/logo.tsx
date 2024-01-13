import LogoIcon from "@/images/icons/logo";
import { colors } from "@/utils";
import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <span className={`font-extrabold text-5xl ${colors.primary.text}`}>V</span>
      <LogoIcon />
    </div>
  );
};

export default Logo;

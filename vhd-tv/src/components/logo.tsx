import React from "react";

const Logo = ({ size = 5 }: { size?: 5 | 7 | 9 }) => {
  return (
    <div className={`flex items-center justify-center text-${size}xl`}>
      <span className={`font-bold text-primary subpixel-antialiased`}>V</span>
      <span className="ml-1 font-bold -tracking-widest text-white">HD</span>
    </div>
  );
};

export default Logo;

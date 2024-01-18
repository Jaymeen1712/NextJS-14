import Image, { ImageProps } from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

interface CarouselImageProps extends ImageProps {}

const CarouselImage = ({ alt, ...rest }: CarouselImageProps) => {
  const aspectRatio = 16 / 9; 
  const width = 1920;
  const height = Math.round(width / aspectRatio);
  
  return (
    <div className="relative group cursor-pointer">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="rounded-full bg-white bg-opacity-10 p-7 backdrop-blur-md group-hover:bg-opacity-20 duration-200">
          <FaPlay color="white" size={35} className="pl-2" />
        </div>
      </div>
      <Image className="rounded-3xl" alt={alt} {...rest} width={width} height={height} />
    </div>
  );
};

export default CarouselImage;

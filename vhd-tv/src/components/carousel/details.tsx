import { colors } from "@/utils";
import { Button, Chip } from "@nextui-org/react";
import React from "react";
import { FaPlay } from "react-icons/fa";

interface CarouselDetailsProps {
  chips?: string[];
  title: string;
  rating: string;
  description: string;
}

const CarouselDetails = ({
  chips,
  title,
  rating,
  description,
}: CarouselDetailsProps) => {
  return (
    <div className="h-[75%] grid">
      <div className="flex justify-start items-center mb-4 space-x-2">
        {chips?.map((chip) => (
          <Chip
            key={chip}
            className={`${colors.primary.text} bg-neutral-800 rounded-md`}
            size="sm"
          >
            {chip}
          </Chip>
        ))}
      </div>
      <h1 className="text-white font-bold tracking-wide text-3xl mb-4">
        {title}
      </h1>
      <div className="text-white mb-6">{rating}</div>
      <div className="text-white mb-8 line-clamp-3">{description}</div>
      <Button
        className={`w-[12rem] px-8 py-7 rounded-full justify-center items-center ${colors.primary.background} bg-opacity-30 hover:cursor-pointer hover:scale-110 hover:bg-opacity-100 group`}
        disableRipple
      >
        <FaPlay
          className={`${colors.primary.text} group-hover:text-black`}
          size={15}
        />
        <h1 className={`ml-1 ${colors.primary.text} group-hover:text-black`}>
          Watch now
        </h1>
      </Button>
    </div>
  );
};

export default CarouselDetails;

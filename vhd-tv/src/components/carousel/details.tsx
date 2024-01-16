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
    <div>
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
      <div className="text-white mb-8">{description}</div>
      <Button
        className={`px-8 py-7 rounded-full justify-center items-center ${colors.primary.background} bg-opacity-30 hover:cursor-pointer `}
      >
        <FaPlay className={`${colors.primary.text}`} size={15} />
        <h1 className={`ml-1 ${colors.primary.text}`}>Watch now</h1>
      </Button>
    </div>
  );
};

export default CarouselDetails;

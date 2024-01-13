import { colors } from "@/utils";
import { Chip } from "@nextui-org/react";
import React from "react";

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
    </div>
  );
};

export default CarouselDetails;

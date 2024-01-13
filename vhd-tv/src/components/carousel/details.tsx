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
      <div className="flex justify-center items-center">
        {chips?.map((chip) => (
          <Chip key={chip}>{chip}</Chip>
        ))}
      </div>
      <h1 className="text-white font-bold tracking-wide font-6xl">{title}</h1>
      <div>{rating}</div>
      <div
      className="max-w-48 text-white"
      >{description}</div>
    </div>
  );
};

export default CarouselDetails;

import { Button, Chip } from "@nextui-org/react";
import React from "react";
import { FaPlay } from "react-icons/fa";
import Rating from "../rating";
import Link from "next/link";

interface CarouselDetailsProps {
  chips?: string[];
  title: string;
  rating: string;
  description: string;
  detailId: number;
}

const CarouselDetails = ({
  chips,
  title,
  rating,
  description,
  detailId,
}: CarouselDetailsProps) => {
  return (
    <div className="grid h-[75%]">
      <div className="mb-4 flex items-center justify-start space-x-2">
        {chips?.map((chip) => (
          <Chip
            key={chip}
            className={`text-primary rounded-md bg-neutral-800`}
            size="sm"
          >
            {chip}
          </Chip>
        ))}
      </div>
      <h1
        className={
          "hover:textColor text-4xl font-bold tracking-wide text-white hover:text-primary"
        }
      >
        <Link href={`/movie/${detailId}`}>{title}</Link>
      </h1>
      <div className="my-2 text-white">
        <Rating stop={parseInt(rating)} />
      </div>
      <div className="mb-8 line-clamp-1 text-white">{description}</div>
      <Button
        className={`w-[12rem] items-center justify-center rounded-full px-8 py-7 bg-primary group bg-opacity-30 hover:scale-110 hover:cursor-pointer hover:bg-opacity-100`}
        disableRipple
      >
        <FaPlay
          className={`text-primary group-hover:text-black`}
          size={15}
        />
        <h1 className={`ml-1 text-primary group-hover:text-black`}>
          Watch now
        </h1>
      </Button>
    </div>
  );
};

export default CarouselDetails;

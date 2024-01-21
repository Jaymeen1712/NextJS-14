import Rating from "@/components/rating";
import { SingleMediaType } from "@/types";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaAngleLeft, FaPlay } from "react-icons/fa";

interface MovieShowContainerProps {
  data: SingleMediaType;
}

const MovieDetailsContainer = ({ data }: MovieShowContainerProps) => {
  return (
    <div className="h-full w-full p-8">
      <Button className={"mb-6 bg-white"} radius="full">
        <Link href={"/home"} className="flex items-center justify-center">
          <FaAngleLeft className="mr-2" />
          <span className="text-base">Movies</span>
        </Link>
      </Button>
      <h1 className={"mb-8 text-4xl font-bold tracking-wide text-white"}>
        {data.title}
      </h1>
      <div className="flex space-x-8 divide-x-1">
        <Button
          className={"items-center justify-center bg-primary p-6"}
          disableRipple
          radius="sm"
        >
          <Link href={"/"} className="flex items-center justify-center">
            <FaPlay className={"mr-4"} size={15} />
            <span className="text-base">Watch now</span>
          </Link>
        </Button>
        <div className="pl-8">
          <Rating stop={data.vote_average} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsContainer;

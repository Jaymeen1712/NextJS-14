"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useContext } from "react";

import img1 from "@/images/download.jpeg";
import { DefaultContext } from "@/context";

const chips = ["HD", "Movie", "2023"];

const MovieCard = () => {
  const defaultContext = useContext(DefaultContext);
  return (
    <Card
      radius="none"
      className="border-none lg:min-w-[216px] lg:min-h-[320px] 3xl:min-w-[227px] 3xl:min-h-[337px] group relative"
      shadow="md"
      isPressable
      disableRipple
      disableAnimation
    >
      <CardHeader className="absolute top-1 left-2">
        <h1 className="text-white font-bold drop-shadow-xl text-xl">HD</h1>
      </CardHeader>
      <CardBody className="p-0 overflow-hidden">
        <Image
          alt="Woman listing to music"
          className="object-fill w-full h-full transform transition-transform group-hover:scale-110"
          src={img1}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black from-70%" />
      </CardBody>
      <CardFooter className="absolute justify-between bottom-3 left-3 group-hover:backdrop-blur-sm group-hover:bg-white/10 w-[89%] rounded-lg py-2 group-hover:-translate-y-1 transition ease-in-out delay-20">
        <div className="grid-rows-2">
          <div className="flex justify-start items-center mb-2 space-x-2">
            {chips?.map((chip) => (
              <Chip
                key={chip}
                className={`${defaultContext?.colors.primary.text} ${defaultContext?.colors.primary.background} bg-opacity-30 rounded-md p-0`}
                size="sm"
              >
                {chip}
              </Chip>
            ))}
          </div>
          <h1 className="text-white font-bold text-left">Lift</h1>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;

import GradientImageContainer from "@/components/gradient-image-container";
import { SingleMediaType } from "@/types";
import { TMDB_IMAGE_BASE_URL } from "@/utils";
import Image from "next/image";
import React from "react";
import MovieDetailsContainer from "./details";

interface MovieShowContainerProps {
  data: SingleMediaType | null;
}

const MovieShowContainer = ({ data }: MovieShowContainerProps) => {
  return (
    <div>
      {data && <GradientImageContainer path={data.backdrop_path} />}
      <div className="w-full px-60">
        <div className="relative z-30 mx-auto py-48">
          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="h-full w-[180px] bg-transparent pt-2 backdrop-blur-xl backdrop-brightness-200">
                {data && (
                  <Image
                    src={`${TMDB_IMAGE_BASE_URL}/original${data.poster_path}`}
                    alt={data.title}
                    fill
                  />
                )}
              </div>
              <div className="bg-transparent backdrop-blur-xl backdrop-brightness-150">
                {data && <MovieDetailsContainer data={data} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieShowContainer;

import MovieListContainer from "@/components/movie-list/container";
import { CommonCardType } from "@/types";
import { colors } from "@/utils";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

interface LatestTvListProps {
  data: CommonCardType[] | null;
}

const LatestTvList = ({ data }: LatestTvListProps) => {
  return (
    <MovieListContainer
      title="Latest TV Series"
      headerRight={
        <button
          className="bg-none group pt-1"
          // onClick={handleClick}
        >
          <FaAngleRight
            className={`text-white group-hover:${colors.primary.text}`}
            size={22}
          />
        </button>
      }
      data={data}
      type="carousel"
    />
  );
};

export default LatestTvList;

import React from "react";
import MovieCard from "../movie-card";
import { CommonCardType } from "@/types";

interface MovieListBodyScrollProps {
  data: CommonCardType[];
}

const MovieListBodyScroll = ({ data }: MovieListBodyScrollProps) => {
  const renderList = data.map((subData) => {
    return <MovieCard key={subData.id} data={subData} />;
  });

  return (
    <div className="flex flex-wrap justify-start gap-1">
      <>{renderList}</>
    </div>
  );
};

export default MovieListBodyScroll;

import React from "react";
import MovieCard from "../movie-card";
import { CommonCardType } from "@/types";

interface MovieListBodyProps {
  data: CommonCardType[] | null;
}

const MovieListBody = ({ data }: MovieListBodyProps) => {
  const renderList = data?.map((subData) => {
    return <MovieCard key={subData.id} data={subData} />;
  });

  return (
    <div className="flex flex-wrap justify-start gap-1">
      <>{renderList}</>
    </div>
  );
};

export default MovieListBody;

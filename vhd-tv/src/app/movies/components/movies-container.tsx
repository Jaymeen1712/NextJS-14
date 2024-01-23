import MovieListContainer from "@/components/movie-list/container";
import { CommonCardType } from "@/types";
import React from "react";

interface MoviesContainerProps {
  data: CommonCardType[] | null;
}

const MoviesContainer = ({ data }: MoviesContainerProps) => {
  return (
    <div>
      <MovieListContainer data={data} title="Movies" />
    </div>
  );
};

export default MoviesContainer;

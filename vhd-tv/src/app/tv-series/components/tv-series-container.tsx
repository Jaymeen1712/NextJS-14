import MovieListContainer from "@/components/movie-list/container";
import { CommonCardType } from "@/types";
import React from "react";

interface TvSeriesContainerProps {
  data: CommonCardType[] | null;
}

const TvSeriesContainer = ({ data }: TvSeriesContainerProps) => {
  return <MovieListContainer data={data} title="TV Series" />;
};

export default TvSeriesContainer;

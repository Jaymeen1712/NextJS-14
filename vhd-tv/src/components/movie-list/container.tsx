import React from "react";
import MovieListHeader from "./header";
import MovieListBody from "./body";
import { CommonCardType } from "@/types";

interface MovieListContainerProps {
  title: string;
  headerRight?: React.ReactNode;
  data: CommonCardType[] | null;
}

const MovieListContainer = ({
  title,
  headerRight,
  data,
}: MovieListContainerProps) => {
  return (
    <div className="mx-16">
      <MovieListHeader title={title} headerRight={headerRight} />
      <div className="my-6 min-h-1300">
        {data && <MovieListBody data={data} />}
      </div>
    </div>
  );
};

export default MovieListContainer;

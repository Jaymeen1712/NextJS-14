import React from "react";
import MovieListHeader from "./header";

interface MovieListContainerProps {
  title: string;
  headerRight?: React.ReactNode;
  data?: any;
}

const MovieListContainer = ({
  title,
  headerRight,
}: MovieListContainerProps) => {
  return (
    <div className="mx-16">
      <MovieListHeader title={title} headerRight={headerRight} />
    </div>
  );
};

export default MovieListContainer;

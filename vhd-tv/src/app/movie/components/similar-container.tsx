import MovieListContainer from "@/components/movie-list/container";
import { CommonCardType } from "@/types";
import React from "react";

interface SimilarContainerProps {
  data: CommonCardType[] | null;
}

const SimilarContainer = ({ data }: SimilarContainerProps) => {
  return (
    <div>
      {data && (
        <MovieListContainer
          data={data}
          title="You may also like"
          type="carousel"
        />
      )}
    </div>
  );
};

export default SimilarContainer;

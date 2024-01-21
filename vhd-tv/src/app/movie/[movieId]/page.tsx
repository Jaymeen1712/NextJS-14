import { getMovieSingleAPI } from "@/apis/movie";
import React from "react";
import MovieShowContainer from "../components/movie-show-container";
import GradientImageContainer from "@/components/gradient-image-container";

interface MoviePageProps {
  params: {
    movieId: number;
  };
}

const MoviePage = async ({ params }: MoviePageProps) => {
  const { response: movieSingleResponse, errors: movieSingleErrors } =
    await getMovieSingleAPI(params.movieId);

  return (
    <div className="flex-1 bg-neutral-900">
      {!movieSingleErrors && <MovieShowContainer data={movieSingleResponse} />}
    </div>
  );
};

export default MoviePage;

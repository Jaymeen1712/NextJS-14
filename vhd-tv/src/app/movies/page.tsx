import { getMoviesPopularAPI } from "@/apis/movie";
import React from "react";
import MoviesContainer from "./components/movies-container";

const MoviesPage = async () => {
  const { response: moviesTopRatedResponse, errors: moviesTopRatedErrors } =
  await getMoviesPopularAPI();

  return (
    <div className="flex-1 bg-neutral-900">
      {!moviesTopRatedErrors && (
        <MoviesContainer data={moviesTopRatedResponse.results} />
      )}
    </div>
  );
};

export default MoviesPage;

import { getTvPopularAPI } from "@/apis/tv-series";
import React from "react";
import TvSeriesContainer from "./components/tv-series-container";

const MoviesPage = async () => {
  const { response: tvTopRatedResponse, errors: tvTopRatedErrors } =
  await getTvPopularAPI();

  return (
    <div className="flex-1 bg-neutral-900">
      {!tvTopRatedErrors && (
        <TvSeriesContainer data={tvTopRatedResponse.results} />
      )}
    </div>
  );
};

export default MoviesPage;

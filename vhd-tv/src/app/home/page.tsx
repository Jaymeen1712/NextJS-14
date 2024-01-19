import getTrending from "@/apis/common/get-trending";
import CarouselContainer from "@/components/carousel/container";
import React from "react";
import TrendingMovieList from "./components/trending-movie-list";
import { getMoviesTrendingAPI } from "@/apis/movie";
import { getTvTrendingAPI } from "@/apis/tv-series";

const HomePage = async () => {
  const { response: trending, errors: trendingErrors } = await getTrending();
  const { response: trendingMovies, errors: trendingMoviesErrors } =
    await getMoviesTrendingAPI();
  const { response: trendingTv, errors: trendingTvErrors } =
    await getTvTrendingAPI();

  return (
    <div className="bg-neutral-900 flex-1">
      <div className="min-h-[550px]">
        {!trendingErrors && (
          <CarouselContainer commonDetails={trending.results.slice(10)} />
        )}
      </div>
      {(!trendingMoviesErrors || !trendingTvErrors) && (
        <TrendingMovieList
          movieData={trendingMovies.results}
          tvData={trendingTv.results}
        />
      )}
    </div>
  );
};

export default HomePage;

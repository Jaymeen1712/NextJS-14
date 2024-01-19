import getTrending from "@/apis/common/get-trending";
import CarouselContainer from "@/components/carousel/container";
import React from "react";
import TrendingList from "./components/trending-list";
import { getMoviesLatestAPI, getMoviesTrendingAPI } from "@/apis/movie";
import { getTvTrendingAPI } from "@/apis/tv-series";
import LatestMoviesList from "./components/latest-movies-list";

const HomePage = async () => {
  const { response: trending, errors: trendingErrors } = await getTrending();
  const { response: trendingMovies, errors: trendingMoviesErrors } =
    await getMoviesTrendingAPI();
  const { response: trendingTv, errors: trendingTvErrors } =
    await getTvTrendingAPI();
  const { response: latestMovies, errors: latestMoviesErrors } =
    await getMoviesLatestAPI();

  return (
    <div className="bg-neutral-900 flex-1">
      <div className="min-h-[550px]">
        {!trendingErrors && (
          <CarouselContainer
            commonDetails={
              trending.results.length > 10
                ? trending.results.slice(10)
                : trending.results
            }
          />
        )}
      </div>
      {(!trendingMoviesErrors || !trendingTvErrors) && (
        <TrendingList
          movieData={trendingMovies.results}
          tvData={trendingTv.results}
        />
      )}
      <div>
        {!latestMoviesErrors && (
          <LatestMoviesList
            data={
              latestMovies.results.length > 20
                ? latestMovies.results.slice(20)
                : latestMovies.results
            }
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;

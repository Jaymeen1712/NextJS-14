import getTrending from "@/apis/common/get-trending";
import CarouselContainer from "@/components/carousel/container";
import React from "react";
import TrendingList from "./components/trending-list";
import { getMoviesLatestAPI, getMoviesTrendingAPI } from "@/apis/movie";
import { getTvLatestAPI, getTvTrendingAPI } from "@/apis/tv-series";
import LatestMoviesList from "./components/latest-movies-list";
import LatestTvList from "./components/latest-tv-list";
import Image from "next/image";
import { colors } from "@/utils";

const HomePage = async () => {
  const { response: trending, errors: trendingErrors } = await getTrending();
  const { response: trendingMovies, errors: trendingMoviesErrors } =
    await getMoviesTrendingAPI();
  const { response: trendingTv, errors: trendingTvErrors } =
    await getTvTrendingAPI();
  const { response: latestMovies, errors: latestMoviesErrors } =
    await getMoviesLatestAPI();
  const { response: latestTv, errors: latestTvErrors } = await getTvLatestAPI();

  return (
    <div className="bg-neutral-900 flex-1">
      <div
        className={
          " bg-cyan-300 absolute w-full h-full object-cover filter  opacity-30"
        }
      >
        <div className="opacity-20">
          <Image
            src="https://image.tmdb.org/t/p/original/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg"
            alt="Your Image"
            fill
          />
        </div>
      </div>
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
      <div>
        {!latestTvErrors && (
          <LatestTvList
            data={
              latestTv.results.length > 20
                ? latestTv.results.slice(20)
                : latestTv.results
            }
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;

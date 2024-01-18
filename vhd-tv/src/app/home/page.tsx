import getTrending from "@/apis/common/get-trending";
import CarouselContainer from "@/components/carousel/container";
import React from "react";
import TrendingMovieList from "./components/trending-movie-list";
import { getMoviesPopularAPI } from "@/apis/movie";
import { getTvPopularAPI } from "@/apis/tv-series";

const HomePage = async () => {
  const { response: trending } = await getTrending();
  const { response: popularMovies } = await getMoviesPopularAPI();
  const { response: popularTv } = await getTvPopularAPI();

  return (
    <div className="bg-neutral-900 flex-1">
      <div className="min-h-[550px]">
        {trending && (
          <CarouselContainer commonDetails={trending.results.slice(10)} />
        )}
      </div>
      <TrendingMovieList
        movieData={popularMovies.results}
        tvData={popularTv.results}
      />
    </div>
  );
};

export default HomePage;

import getTrending from "@/apis/common/get-trending";
import CarouselContainer from "@/components/carousel/container";
import React from "react";
import TrendingMovieList from "./components/trending-movie-list";

const HomePage = async () => {
  const { response: trending } = await getTrending();

  return (
    <div className="bg-neutral-900 flex-1">
      <div className="min-h-[550px]">
        {trending && (
          <CarouselContainer commonDetails={trending.results.slice(10)} />
        )}
      </div>
      <TrendingMovieList />
    </div>
  );
};

export default HomePage;

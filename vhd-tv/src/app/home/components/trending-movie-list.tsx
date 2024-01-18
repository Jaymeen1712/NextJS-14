"use client";

import MovieListContainer from "@/components/movie-list/container";
import { CommonCardType } from "@/types";
import { colors } from "@/utils";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

interface TrendingMovieListProps {
  movieData: CommonCardType[] | null;
  tvData: CommonCardType[] | null;
}

const TrendingMovieList = ({ movieData, tvData }: TrendingMovieListProps) => {
  const [currentTab, setCurrentTab] = useState("movies");

  return (
    <MovieListContainer
      data={currentTab === "movies" ? movieData : tvData}
      title="Trending"
      headerRight={
        <div className="space-x-3">
          <Button
            onClick={() => {
              setCurrentTab("movies");
            }}
            className={`px-6 text-base ${
              currentTab === "movies"
                ? `${colors.primary.background} text-black`
                : `bg-transparent text-white hover:${colors.primary.text} border-1 `
            }`}
            radius="full"
            disableRipple
            disableAnimation
          >
            Movies
          </Button>
          <Button
            onClick={() => {
              setCurrentTab("tvSeries");
            }}
            className={`px-6 text-base ${
              currentTab === "tvSeries"
                ? `${colors.primary.background} text-black`
                : `bg-transparent text-white hover:${colors.primary.text} border-1 `
            }`}
            radius="full"
            disableRipple
            disableAnimation
          >
            TV Series
          </Button>
        </div>
      }
    />
  );
};

export default TrendingMovieList;

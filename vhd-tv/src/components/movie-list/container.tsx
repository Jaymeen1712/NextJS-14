import React from "react";
import MovieListHeader from "./header";
import MovieListBodyScroll from "./body-scroll";
import { CommonCardType } from "@/types";
import MovieListBodyCarousel from "./body-carousel";

interface MovieListContainerProps {
  title: string;
  data: CommonCardType[] | null;
  headerRight?: React.ReactNode;
  type?: "scroll" | "carousel";
}

const MovieListContainer = ({
  title,
  headerRight,
  data,
  type = "scroll",
}: MovieListContainerProps) => {
  return (
    <div className="mx-16 my-24">
      <MovieListHeader title={title} headerRight={headerRight} />
      <div className="my-6 min-h-1300">
        {data &&
          (type === "scroll" ? (
            <MovieListBodyScroll data={data} />
          ) : (
            <MovieListBodyCarousel data={data}/>
          ))}
      </div>
    </div>
  );
};

export default MovieListContainer;

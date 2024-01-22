const TIME_WINDOW = "week";

const COMMON_API = {
  ALL_TRENDING: `/trending/all/${TIME_WINDOW}`,
};

const MOVIE_API = {
  MOVIE_TRENDING: `/trending/movie/${TIME_WINDOW}`,
  MOVIE_IMAGES: "/movie/:movieId/images",
  MOVIE_POPULAR: "/movie/popular",
  MOVIE_LATEST: "/movie/now_playing",
  MOVIE_SINGLE: "/movie",
  MOVIE_CREDITS: "/movie/:movieId/credits",
  MOVIE_SIMILAR: "/movie/:movieId/similar"
};

const TV_API = {
  TV_TRENDING: `/trending/tv/${TIME_WINDOW}`,
  TV_POPULAR: "/tv/popular",
  TV_LATEST: "/tv/on_the_air",
};

export const API_ROUTES = {
  ...COMMON_API,
  ...MOVIE_API,
  ...TV_API,
};

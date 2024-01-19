const TIME_WINDOW = "week";

const COMMON_API = {
  ALL_TRENDING: `/trending/all/${TIME_WINDOW}`,
};

const MOVIE_API = {
  MOVIE_TRENDING: `/trending/movie/${TIME_WINDOW}`,
  MOVIE_IMAGES: "/movie/:movieId/images",
  MOVIE_POPULAR: "/movie/popular",
};

const TV_API = {
  TV_TRENDING: `/trending/tv/${TIME_WINDOW}`,
  TV_POPULAR: "/tv/popular",
};

export const API_ROUTES = {
  ...COMMON_API,
  ...MOVIE_API,
  ...TV_API,
};

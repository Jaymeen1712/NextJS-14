const COMMON_API = {
  ALL_TRENDING: "/trending/all/day",
};

const MOVIE_API = {
  MOVIE_TRENDING: "/trending/movie/week",
  MOVIE_IMAGES: "/movie/:movieId/images",
  MOVIE_POPULAR: "/movie/popular"
};

const TV_API = {
  TV_TRENDING: "/trending/tv/week",
  TV_POPULAR: "/tv/popular"
};

export const API_ROUTES = {
  ...COMMON_API,
  ...MOVIE_API,
  ...TV_API,
};

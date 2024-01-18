const COMMON_API = {
  TRENDING_ALL: "/trending/all/day",
};

const MOVIE_API = {
  TRENDING_MOVIE: "/trending/movie/week",
  MOVIE_IMAGES: "/movie/:movieId/images",
};

const TV_API = {
  TRENDING_TV: "/trending/tv/week",
};

export const API_ROUTES = {
  ...COMMON_API,
  ...MOVIE_API,
  ...TV_API,
};

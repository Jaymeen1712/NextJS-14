export const dashboardMenuItems = [
  {
    key: "home",
    name: "Home",
    link: "/home",
  },
  {
    key: "movies",
    name: "Movies",
    link: "/movies",
  },
  {
    key: "tv-series",
    name: "Tv series",
    link: "/tv-series",
  },
  {
    key: "top-imdb",
    name: "Top imdb",
    link: "/top-imdb",
  },
];

export const colors = {
  primary: {
    text: "text-cyan-300",
    background: "bg-cyan-300",
  },
};

export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export function capitalizeFirstLetter(inputString: string) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

export interface CommonCardType {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[] | null;
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  name?: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
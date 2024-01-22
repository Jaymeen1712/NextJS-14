"use server";

import apiClient from "../api-client";
import { API_ROUTES } from "@/utils/enum";

const getMoviesPopularAPI = async () => {
  let errors = null;
  let response = null;
  try {
    response = await apiClient.get(API_ROUTES.MOVIE_POPULAR);
    response = response.data;
    return { response, errors };
  } catch (error) {
    return { response, errors: error };
  }
};

export default getMoviesPopularAPI;

const API_KEY = "55b1039fe0286596ce8075f0d6b12d9c";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const getMoviesLatest = () => {
  return fetch(
    `${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
};

export const getMoviesUpcoming = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
};

// TOP Rated Movies
export const getMoviesTopRated = () => {
  return fetch(
    `${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
};

export interface IGetSearch {
  query: string,
}

export const getSearchMulti = ({ query }: IGetSearch) => {
  return fetch(
    `${BASE_PATH}/search/multi?api_key=${API_KEY}&language=ko-KR&query=${query}&page=1&include_adult=false&region=kr`
  ).then((response) => response.json());
};

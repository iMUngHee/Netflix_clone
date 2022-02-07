const API_KEY = "55b1039fe0286596ce8075f0d6b12d9c";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: string;
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

// Popular Movies
export const getMoviesLatest = () => {
  return fetch(
    `${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
};

// Now Playing Movies
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

// Movie Detail
export interface IGetMovieDetail {
  adult: boolean;
  homepage: string;
  vote_average: string;
  release_date: string;
  tagline: string;
  runtime: string;
  genres: IGenres[];
  production_companies: ICompanies[];
}

interface IGenres {
  id: number;
  name: string;
}

interface ICompanies {
  id: number;
  logo_path: string;
  name: string;
}

export const getMovieDetail = (movieId: string | undefined) => {
  return fetch(
    `${BASE_PATH}/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => response.json());
};

// Movie Credit
interface ICast {
  id: number;
  name: string;
}
export interface ICredit {
  cast: ICast[];
}
export const getMovieCredit = (movieId: string | undefined) => {
  return fetch(
    `${BASE_PATH}/movie/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => response.json());
};

// Similar Movies
export const getMoviesSimilar = (movieId: string | undefined) => {
  return fetch(
    `${BASE_PATH}/movie/${movieId}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1`
  ).then((response) => response.json());
};

// Get Search
export interface IGetSearch {
  query: string;
}

export const getSearchMulti = ({ query }: IGetSearch) => {
  return fetch(
    `${BASE_PATH}/search/multi?api_key=${API_KEY}&language=ko-KR&query=${query}&page=1&include_adult=false&region=kr`
  ).then((response) => response.json());
};

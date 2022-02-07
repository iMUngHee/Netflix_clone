const API_KEY = "55b1039fe0286596ce8075f0d6b12d9c";
const BASE_PATH = "https://api.themoviedb.org/3";

/**
 * Movies API
 */

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: string;
  first_air_date?: string;
  name?: string;
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

// Similar Movies
export const getMoviesSimilar = (movieId: string | undefined) => {
  return fetch(
    `${BASE_PATH}/movie/${movieId}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1`
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

/**
 * TV Shows API
 */
interface IShows {
  id: number;
  backdrop_path: string;
  poster_path: string;
  name: string;
  overview: string;
  first_air_date: string;
  vote_average: string;
  title?: string;
  release_date?: string;
}

export interface IGetShowsResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IShows[];
  total_pages: number;
  total_results: number;
}

// Popular TV Shows
export const getTvShowsPopular = () => {
  return fetch(
    `${BASE_PATH}/tv/popular?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
};
// Airing Today TV Shows
export const getTvShowsAiringToday = () => {
  return fetch(
    `${BASE_PATH}/tv/airing_today?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
};
// Top Rated TV Shows
export const getTvShowsTopRated = () => {
  return fetch(
    `${BASE_PATH}/tv/top_rated?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
};
// On The Air Shows TV Shows
export const getTvShowsOnTheAir = () => {
  return fetch(
    `${BASE_PATH}/tv/on_the_air?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
};

// TV Show Detail
export interface IGetShowDetail {
  homepage: string;
  vote_average: string;
  first_air_date: string;
  tagline: string;
  episode_run_time: string;
  genres: IGenres[];
  production_companies: ICompanies[];
}

export const getShowDetail = (movieId: string | undefined) => {
  return fetch(
    `${BASE_PATH}/tv/${movieId}?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => response.json());
};

// Similar Movies
export const getShowSimilar = (movieId: string | undefined) => {
  return fetch(
    `${BASE_PATH}/tv/${movieId}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1`
  ).then((response) => response.json());
};

// Movie Credit
export const getShowCredit = (movieId: string | undefined) => {
  return fetch(
    `${BASE_PATH}/tv/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => response.json());
};

// Get Search
export const getSearchMovie = ( query : string | null) => {
  return fetch(
    `${BASE_PATH}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${query}&page=1&include_adult=false&region=kr`
  ).then((response) => response.json());
};
export const getSearchShow = ( query : string | null) => {
  return fetch(
    `${BASE_PATH}/search/tv?api_key=${API_KEY}&language=ko-KR&query=${query}&page=1&include_adult=false&region=kr`
  ).then((response) => response.json());
};

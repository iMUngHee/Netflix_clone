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

// export const getMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/550?api_key=55b1039fe0286596ce8075f0d6b12d9c`
//   ).then((response) => response.json());
// };
export const getMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
};

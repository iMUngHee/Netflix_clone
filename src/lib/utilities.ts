import { IGetMoviesResult, IGetShowsResult } from "../api/api";

export const makeImagePath = (id: string, format?: string) => {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
};

export const deleteNullBackdropPath = (
  data: IGetMoviesResult | IGetShowsResult
) => {
  const update = { ...data };
  update.results.map((movie, idx) => {
    if (movie.backdrop_path === null) {
      return update.results.splice(idx, 1);
    }
    return update;
  });
  return update;
};

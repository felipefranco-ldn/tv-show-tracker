import { TVShowProps } from "./TVShow";

export const filterByGenre = (shows: TVShowProps[], genre: string) => {
  const filtered = shows.filter((show) => show.genre === genre);
  return filtered;
};

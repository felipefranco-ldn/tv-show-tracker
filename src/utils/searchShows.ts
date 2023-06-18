import { shows } from "./loadShows";

export const searchShows = (searchTerm: string) => {
  return shows.filter(
    (show) =>
      show.genre === searchTerm ||
      show.title === searchTerm ||
      show.status === searchTerm
  );
};

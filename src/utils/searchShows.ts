import { shows } from "./loadShows";
import TVShow from "../components/TVShow";

type SearchShows = {
  (searchTerm: string): TVShow[] | [];
};

export const searchShows: SearchShows = (searchTerm: string) => {
  return shows.filter(
    (show) =>
      show.getGenre() === searchTerm ||
      show.getTitle() === searchTerm ||
      show.getStatus() === searchTerm
  );
};

import { shows } from "./loadShows";
import TVShow from "../components/TVShow";

type FilterByGenre = {
  (genre: string): TVShow[] | [];
};

export const filterByGenre: FilterByGenre = (genre: string) => {
  return shows.filter((show) => show.getGenre() === genre);
};

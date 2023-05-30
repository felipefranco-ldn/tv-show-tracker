import { shows } from "./loadShows";
import TVShow from "../components/TVShow";

type FilterByGenre = {
  (genre: string): TVShow[] | [];
};
//May 5th
//Arrow function example:
//export const filterByGenre: FilterByGenre = (genre: string) => shows.filter((show) => show.getGenre() === genre);
//;
export const filterByGenre: FilterByGenre = (genre: string) => {
  return shows.filter((show) => show.getGenre() === genre);
};

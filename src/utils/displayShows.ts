import { compareShows } from "./compareShows";
import { TVShowProps } from "./TVShow";

export const displayShows = (
  shows: TVShowProps[],
  key: keyof TVShowProps = "title",
  order?: string
): TVShowProps[] => {
  let sortedShowsAsc;
  if (order === "asc" || order === "desc") {
    sortedShowsAsc = [...shows].sort((a, b) => compareShows(a, b, key));
  }

  if (sortedShowsAsc) {
    return order === "asc" ? sortedShowsAsc : sortedShowsAsc.reverse();
  }

  return shows;
};

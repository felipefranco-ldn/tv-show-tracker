import { compareShows } from "./compareShows";
import TVShowsData from "../data/tv-shows.json";
import { TVShowProps } from "../components/TVShow";
// import TVShow from "../components/TVShow";

export const displayShows = (
  key: keyof TVShowProps,
  order: "asc" | "desc"
): TVShowProps[] => {
//May - 5th name=='asc' Instead of If else condition, use ternary Operator"
// example: order=name==''asc"?sort(): sort().reverse()
  if (order === "asc") {
    // spread array to avoid mutating original instance
    const sortedShowsAsc = [...TVShowsData].sort((a, b) =>
      compareShows(a, b, key)
    );
    //   console.log("sortedShowsAsc")
    return sortedShowsAsc;
  }
  // spread array to avoid mutating original instance
  const sortedShowsDesc = [...TVShowsData]
    .sort((a, b) => compareShows(a, b, key))
    .reverse();
  return sortedShowsDesc;
};

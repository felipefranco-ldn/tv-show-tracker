import { TVShowProps } from "./TVShow";

export const removeShow = (shows: TVShowProps[], title: string) => {
  const showToRemove = shows.find((show) => show.title === title);
  if (showToRemove) {
    const indexOfShowToRemove = shows.indexOf(showToRemove);
    shows.splice(indexOfShowToRemove, 1);
  }
  return shows;
};

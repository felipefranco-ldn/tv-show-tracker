import { shows } from "./loadShows";

type RemoveShow = {
  (title: string): void;
};

export const removeShow: RemoveShow = (title: string) => {
  const showToRemove = shows.find((show) => show.getTitle() === title);
  if (showToRemove) {
    const indexOfShowToRemove = shows.indexOf(showToRemove);
    shows.splice(indexOfShowToRemove, 1);
  }
};

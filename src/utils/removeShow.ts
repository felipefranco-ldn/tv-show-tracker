import { shows } from "./loadShows";
// May 5th - I think we are not using this method, better to remove/ delete file 
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

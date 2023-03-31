import { TVShowProps } from "./../components/TVShow";
import TVShow from "../components/TVShow";
import { shows } from "./loadShows";

type AddShow = {
  (TVShow: TVShow): void;
  (TVShowProps: TVShowProps): void;
};

export const addShow: AddShow = (show) => {
  if (show instanceof TVShow) {
    shows.push(show);
  } else if (show) {
    const newTVShow = new TVShow({
      title: show.title,
      genre: show.genre,
      rating: show.rating,
      status: show.status,
      airingDate: show.airingDate,
    });
    shows.push(newTVShow);
  }
};

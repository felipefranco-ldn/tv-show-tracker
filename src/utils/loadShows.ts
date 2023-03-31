import { TVShowProps } from "../components/TVShow";
import TVShowsData from "../data/tv-shows.json";
import TVShow from "../components/TVShow";

export const loadShows = (): TVShow[] => {
  return TVShowsData.map((show: TVShowProps) => {
    return new TVShow({
      title: show.title,
      genre: show.genre,
      rating: show.rating,
      status: show.status,
      airingDate: show.airingDate,
    });
  });
};

export const shows = loadShows();

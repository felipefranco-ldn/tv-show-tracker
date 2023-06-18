import { TVShow, TVShowProps } from "./TVShow";
import TVShowsData from "../data/tv-shows.json";

export const loadShows = (): TVShowProps[] => {
  const mappedData: any = TVShowsData.map((show: TVShowProps) => {
    const { title, genre, rating, status, airingDate } = show;

    return new TVShow({
      title: title,
      genre: genre,
      rating: rating,
      status: status,
      airingDate: airingDate,
    });
  });

  return mappedData;
};

export const shows: TVShowProps[] = loadShows();

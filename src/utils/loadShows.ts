import { TVShowProps } from "../components/TVShow";
import TVShowsData from "../data/tv-shows.json";
import TVShow from "../components/TVShow";
// example for below
//const filter = TVShowsData.map((show: TVShowProps) => {
  //return new TVShow({
   // title: show.title,
    //genre: show.genre,
   // rating: show.rating,
   // status: show.status,
   // airingDate: show.airingDate,
  //});
//});
export const loadShows = (): TVShow[] => {
// May 5th - Better to create one more function to loop this map and return it
// return filter
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

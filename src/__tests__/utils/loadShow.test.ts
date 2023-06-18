import { loadShows } from "../../utils/loadShows";
import TVShowsData from "../../data/tv-shows.json";

describe("loadShows", () => {
  it("should return an array of same length as the data array", () => {
    const loadedShowsArray = loadShows();
    expect(loadedShowsArray.length).toBe(TVShowsData.length);
  });

  it("should return an element with all correct keys and values", () => {
    const showInLoadedShows = loadShows()[0];
    const showInShowsData = TVShowsData[0];
    expect(showInLoadedShows.title).toBe(showInShowsData.title);
    expect(showInLoadedShows.genre).toBe(showInShowsData.genre);
    expect(showInLoadedShows.rating).toBe(showInShowsData.rating);
    expect(showInLoadedShows.status).toBe(showInShowsData.status);
    expect(showInLoadedShows.airingDate).toBe(showInShowsData.airingDate);
  });
});

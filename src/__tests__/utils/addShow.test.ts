import { addShow } from "../../utils/addShow";
import { shows } from "../../utils/loadShows";
import { TVShow } from "../../utils/TVShow";
import { TVShowProps } from "../../utils/TVShow";

describe("addShow", () => {
  it("should add a new show using instance of class", () => {
    const newShow: TVShow = new TVShow({
      title: "Breaking Bad",
      genre: "Crime",
      rating: 9,
      status: "Completed",
      airingDate: "2005-01-15",
    });
    const originalArrayLength = shows.length;
    addShow(newShow);
    expect(shows.length).toBe(originalArrayLength + 1);
  });

  it("should add a new show using object with individual props", () => {
    const newShow: TVShowProps = {
      title: "Breaking Bad",
      genre: "Crime",
      rating: 9,
      status: "Completed",
      airingDate: "2005-01-15",
    };
    const originalArrayLength = shows.length;
    addShow(newShow);
    expect(shows.length).toBe(originalArrayLength + 1);
  });
});

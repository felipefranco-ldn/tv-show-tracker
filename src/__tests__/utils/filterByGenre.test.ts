import { filterByGenre } from "../../utils/filterByGenre";

describe("filterByGenre", () => {
  it("should return a show if genre matches", () => {
    const genreToFilter = "Comedy";
    const filteredShows = filterByGenre(genreToFilter);
    expect(filteredShows?.length).toBe(2);
  });

  it("should return empty array if genre does not match", () => {
    const genreToFilter = "XYZ";
    const filteredShows = filterByGenre(genreToFilter);
    expect(filteredShows).toStrictEqual([]);
  });
});

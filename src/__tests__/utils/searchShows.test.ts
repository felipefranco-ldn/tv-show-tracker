import { searchShows } from "../../utils/searchShows";

describe("searchShows", () => {
  it("should return a show if genre matches", () => {
    const termToFilterWith = "Comedy";
    const filteredShows = searchShows(termToFilterWith);
    expect(filteredShows?.length).toBe(2);
  });

  it("should return a show if title matches", () => {
    const termToFilterWith = "Game of Thrones";
    const filteredShows = searchShows(termToFilterWith);
    expect(filteredShows?.length).toBe(1);
  });

  it("should return a show if status matches", () => {
    const termToFilterWith = "Completed";
    const filteredShows = searchShows(termToFilterWith);
    expect(filteredShows?.length).toBe(4);
  });

  it("should return an empty array if genre, title or status don't match", () => {
    const termToFilterWith = "MNOP";
    const filteredShows = searchShows(termToFilterWith);
    expect(filteredShows).toStrictEqual([]);
  });
});

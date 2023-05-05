import { compareShows } from "../utils/compareShows";

describe("compareShows", () => {
  it("should return -1 if key of showOne is less than key of showTwo", () => {
    const showOne = {
      title: "Breaking Bad",
      genre: "Crime",
      rating: 9.5,
      status: "Completed",
      airingDate: "2008-01-20",
    };
    const showTwo = {
      title: "Game of Thrones",
      genre: "Fantasy",
      rating: 9.3,
      status: "Completed",
      airingDate: "2011-04-17",
    };
    const key = "rating";

    const result = compareShows(showOne, showTwo, key);

    expect(result).toBe(1);
  });

  it("should return 0 if key of showOne and showTwo is the same", () => {
    const showOne = {
      title: "Friends",
      genre: "Comedy",
      rating: 8.9,
      status: "Completed",
      airingDate: "1994-09-22",
    };
    const showTwo = {
      title: "The Office",
      genre: "Comedy",
      rating: 8.9,
      status: "Completed",
      airingDate: "2005-03-24",
    };
    const key = "genre";

    const result = compareShows(showOne, showTwo, key);

    expect(result).toBe(0);
  });

  it("should return 1 if key of showOne is greater than key of showTwo", () => {
    const showOne = {
      title: "The Mandalorian",
      genre: "Action",
      rating: 8.8,
      status: "Ongoing",
      airingDate: "2019-11-12",
    };
    const showTwo = {
      title: "Stranger Things",
      genre: "Sci-Fi",
      rating: 8.7,
      status: "Ongoing",
      airingDate: "2016-07-15",
    };
    const key = "airingDate";

    const result = compareShows(showOne, showTwo, key);

    expect(result).toBe(1);
  });
});

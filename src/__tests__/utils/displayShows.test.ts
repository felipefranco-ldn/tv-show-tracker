import { displayShows } from "../../utils/displayShows";
import ascendingData from "./helpers/tv-shows-ascending.json";
import descendingData from "./helpers/tv-shows-descending.json";

describe("displayShows", () => {
  it("when a key is passed, should sort array items in ascending order if 'asc' parameter passed", () => {
    const result = displayShows("title", "asc");
    const expected = ascendingData;

    expect(result).toEqual(expected);
  });

  it("when a key is passed, should sort array items in descending order if 'desc' parameter passed", () => {
    const result = displayShows("rating", "desc");
    const expected = descendingData;

    expect(result).toEqual(expected);
  });
});

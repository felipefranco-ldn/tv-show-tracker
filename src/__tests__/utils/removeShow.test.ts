import { removeShow } from "../../utils/removeShow";
import { shows } from "../../utils/loadShows";

describe("removeShow", () => {
  it("should remove a show using title", () => {
    const titleToRemove: string = "Friends";
    removeShow(titleToRemove);
    expect(shows.find((show) => show.title === titleToRemove)).toBe(undefined);
  });

  it("should not remove a show if title does not match", () => {
    const titleToRemove: string = "ABCD";
    const originalArrayLength = shows.length;
    removeShow(titleToRemove);
    expect(shows.length).toBe(originalArrayLength);
  });
});

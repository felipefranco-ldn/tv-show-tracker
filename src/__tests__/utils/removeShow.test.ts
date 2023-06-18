import { removeShow } from "../../utils/removeShow";
import showsData from "../../data/tv-shows.json";

describe("removeShow", () => {
  it("should remove a show using title", () => {
    const titleToRemove: string = "Friends";
    removeShow(showsData, titleToRemove);
    expect(showsData.find((show) => show.title === titleToRemove)).toBe(
      undefined
    );
  });

  it("should not remove a show if title does not match", () => {
    const titleToRemove: string = "ABCD";
    const originalArrayLength = showsData.length;
    removeShow(showsData, titleToRemove);
    expect(showsData.length).toBe(originalArrayLength);
  });
});

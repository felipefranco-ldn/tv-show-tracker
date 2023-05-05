import { shows } from "./loadShows";
import TVShow from "../components/TVShow";

export const RenderShows = () => {
  return (
    <div className="list">
      {shows.map((show: TVShow) => (
        <div key={show.getTitle()}>
          <strong>Title:</strong> {show.getTitle()}
          <br />
          <strong>Genre:</strong> {show.getGenre()}
          <br />
          <strong>Rating:</strong> {show.getRating()}
          <br />
          <strong>Status:</strong> {show.getStatus()}
          <br />
          <strong>Airing Date:</strong> {show.getAiringDate()}
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

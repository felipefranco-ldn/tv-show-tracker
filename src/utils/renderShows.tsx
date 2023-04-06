import { shows } from "./loadShows";
import TVShow from "../components/TVShow";

export const renderShows = () => {
  return (
    <div className="list">
      {shows.map((show: TVShow) => (
        <div key={show.title}>
          <strong>Title:</strong> {show.title}
          <br />
          <strong>Genre:</strong> {show.genre}
          <br />
          <strong>Rating:</strong> {show.rating}
          <br />
          <strong>Status:</strong> {show.status}
          <br />
          <strong>Airing Date:</strong> {show.airingDate}
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

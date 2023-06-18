import "./ShowCard.css";
import { TVShowProps } from "../../utils/TVShow";

type ShowCardProps = {
  show: TVShowProps;
  handleRemoveShow: (showTitle: string) => void;
};

export const ShowCard: React.FC<ShowCardProps> = ({
  show,
  handleRemoveShow,
}) => {
  return (
    <div className="card-container" key={show.title}>
      <h2 className="show-title">{show.title}</h2>

      <ul className="show-details">
        <li>
          <strong>Genre:</strong> {show.genre}
        </li>
        <li>
          <strong>Rating:</strong> {show.rating}
        </li>
        <li>
          <strong>Status:</strong> {show.status}
        </li>
        <li>
          <strong>Airing Date:</strong> {show.airingDate}
        </li>
      </ul>

      <div className="button-container">
        <button className={false ? "reset-button" : "action-button"}>
          {false ? "Reset 🔄" : "✍️ Edit (WIP)"}
        </button>

        <button
          onClick={() => handleRemoveShow(show.title)}
          className="action-button"
        >
          Remove ❌
        </button>
      </div>
    </div>
  );
};

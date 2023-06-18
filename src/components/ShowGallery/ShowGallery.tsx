import React from "react";
import "./ShowGallery.css";
import { TVShowProps } from "../../utils/TVShow";
import { ShowCard } from "../ShowCard/ShowCard";
import { v4 as uuid } from "uuid";

type ShowGalleryProps = {
  shows: TVShowProps[];
  handleRemoveShow: (showTitle: string) => void;
};

export const ShowGallery: React.FC<ShowGalleryProps> = ({
  shows,
  handleRemoveShow,
}) => {
  const DefaultMessage = () => (
    <div>
      <p className="default-text-title">
        😱 Oops! There are no Shows matching this filter!
      </p>
      <p className="default-text">Now, let's binge 😉</p>
    </div>
  );

  return (
    <div className="gallery-container">
      <h2 className="section-title">🎥 Which Shows have I watched? 👀</h2>

      <div className="show-gallery">
        {shows.length > 0 ? (
          shows.map((show: TVShowProps) => (
            <ShowCard
              key={uuid()}
              show={show}
              handleRemoveShow={handleRemoveShow}
            />
          ))
        ) : (
          <DefaultMessage />
        )}
      </div>
    </div>
  );
};

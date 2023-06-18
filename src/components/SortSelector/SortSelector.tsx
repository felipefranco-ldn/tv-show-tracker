import React, { useState, useEffect } from "react";
import "./SortSelector.css";
import { TVShowProps } from "../../utils/TVShow";
import { displayShows } from "../../utils/displayShows";

type SortSelectorProps = {
  showList: TVShowProps[];
  setShowList: React.Dispatch<React.SetStateAction<TVShowProps[]>>;
  isFilterOn: boolean;
  setFilteredShowList: React.Dispatch<React.SetStateAction<TVShowProps[]>>;
};

export const SortSelector: React.FC<SortSelectorProps> = ({
  showList,
  setShowList,
  isFilterOn,
  setFilteredShowList,
}) => {
  const [sortingKey, setSortingKey] = useState<keyof TVShowProps>();
  const [sortingOrder, setSortingOrder] = useState("asc");

  const handleSortingKeyChange = (event: any) => {
    setSortingKey(event.target.value);
  };

  const handleSortingOrderChange = () => {
    sortingOrder === "asc" ? setSortingOrder("desc") : setSortingOrder("asc");
  };

  useEffect(() => {
    if (showList.length > 0 && sortingKey && sortingOrder) {
      const sortedShows = displayShows([...showList], sortingKey, sortingOrder);
      isFilterOn ? setFilteredShowList(sortedShows) : setShowList(sortedShows);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortingKey, sortingOrder]);

  return (
    <div className="sort-selector-container">
      <div>
        <label htmlFor="key-select">Sort by:</label>
        <select
          className="selector-menu"
          name="key"
          id="key-select"
          onChange={handleSortingKeyChange}
        >
          <option value="">--Select an option--</option>
          <option value="title">Title</option>
          <option value="genre">Genre</option>
          <option value="rating">Rating</option>
          <option value="status">Status</option>
          <option value="airingDate">Airing date</option>
        </select>
      </div>

      <div
        className={
          sortingKey ? "bottom-container" : "bottom-container-inactive"
        }
      >
        <span>Sorting order:</span>
        <button
          className={sortingKey ? "selector-menu" : "selector-menu-inactive"}
          onClick={sortingKey ? handleSortingOrderChange : undefined}
        >
          {sortingOrder === "asc" ? "Ascending 🔺" : "Descending 🔻"}
        </button>
      </div>
    </div>
  );
};

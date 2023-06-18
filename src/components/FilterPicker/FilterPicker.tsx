import React, { useState, useEffect } from "react";
import "./FilterPicker.css";
import { TVShowProps } from "../../utils/TVShow";
import { filterByGenre } from "../../utils/filterByGenre";

type FilterPickerProps = {
  showList: TVShowProps[];
  setIsFilterOn: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredShowList: React.Dispatch<React.SetStateAction<TVShowProps[]>>;
};

export const FilterPicker: React.FC<FilterPickerProps> = ({
  showList,
  setIsFilterOn,
  setFilteredShowList,
}) => {
  const [filter, setFilter] = useState();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [allShows, setAllShows] = useState([...showList]);

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    if (showList.length > 0 && filter) {
      setIsFilterOn(true);
      const filteredShowsByGenre = filterByGenre([...showList], filter);
      setFilteredShowList(filteredShowsByGenre);
    }

    if (!filter) {
      setIsFilterOn(false);
      setFilteredShowList(showList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allShows, filter]);

  return (
    <div className="filter-container">
      <label htmlFor="genres-select">Filter by genre:</label>

      <select
        className="selector-menu"
        name="genres"
        id="genres-select"
        onChange={handleFilterChange}
      >
        <option value="">--Select an option--</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Animated">Animated</option>
        <option value="Comedy">Comedy</option>
        <option value="Crime">Crime</option>
        <option value="Documentary">Documentary</option>
        <option value="Drama">Drama</option>
        <option value="Educational">Educational</option>
        <option value="Epic">Epic</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Horror">Horror</option>
        <option value="Other">Other</option>
        <option value="Reality">Reality</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Sports">Sports</option>
        <option value="Thriller">Thriller</option>
        <option value="">--No filter--</option>
      </select>
    </div>
  );
};

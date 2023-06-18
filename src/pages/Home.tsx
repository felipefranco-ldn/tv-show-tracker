import React from "react";
import "./Home.css";
import { ShowGallery } from "../components/ShowGallery/ShowGallery";
import { TVShowForm } from "../components/Form/Form";
import { shows } from "../utils/loadShows";
import { useEffect, useState } from "react";
import { TVShowProps } from "../utils/TVShow";
import { removeShow } from "../utils/removeShow";
import { SortSelector } from "../components/SortSelector/SortSelector";
import { FilterPicker } from "../components/FilterPicker/FilterPicker";

export const Home: React.FC = () => {
  const [showList, setShowList] = useState<TVShowProps[]>([]);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [filteredShowList, setFilteredShowList] = useState<TVShowProps[]>([]);

  // Load shows from JSON file
  useEffect(() => {
    setShowList(shows);
  }, []);

  const handleRemoveShow = (showTitle: string) => {
    const updatedShowList = removeShow([...showList], showTitle);
    setShowList(updatedShowList);

    const updatedFilteredList = removeShow([...filteredShowList], showTitle);
    setFilteredShowList(updatedFilteredList);
  };

  return (
    <div className="Home">
      <h1 className="main-title">📺 My TV Show Tracker 🍿</h1>
      <div className="content">
        <div className="shows-container">
          <ShowGallery
            shows={isFilterOn ? filteredShowList : showList}
            handleRemoveShow={handleRemoveShow}
          />
        </div>
        <div className="functionality-container">
          <SortSelector
            showList={isFilterOn ? filteredShowList : showList}
            setShowList={setShowList}
            isFilterOn={isFilterOn}
            setFilteredShowList={setFilteredShowList}
          />
          <FilterPicker
            showList={showList}
            setIsFilterOn={setIsFilterOn}
            setFilteredShowList={setFilteredShowList}
          />
          <TVShowForm
            showList={showList}
            filteredShowList={filteredShowList}
            setShowList={setShowList}
            setFilteredShowList={setFilteredShowList}
          />
        </div>
      </div>
    </div>
  );
};

import React, { useState, useRef } from "react";
import "./Form.css";
import { TVShowProps } from "../../utils/TVShow";

type TVShowFormProps = {
  showList: TVShowProps[];
  filteredShowList: TVShowProps[];
  setShowList: React.Dispatch<React.SetStateAction<TVShowProps[]>>;
  setFilteredShowList: React.Dispatch<React.SetStateAction<TVShowProps[]>>;
};

export const TVShowForm: React.FC<TVShowFormProps> = ({
  showList,
  filteredShowList,
  setShowList,
  setFilteredShowList,
}) => {
  const [show, setShow] = useState<TVShowProps>({
    title: "",
    genre: "",
    rating: 0,
    status: "",
    airingDate: "",
  });
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");
  const genreSelectRef = useRef(null);
  const statusSelectRef = useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setShow({
      ...show,
      [name]: value,
    });
  };

  const handleGenreChange = (event) => {
    const { value } = event.target;

    setGenre(value);
  };

  const handleStatusChange = (event) => {
    const { value } = event.target;

    setStatus(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const showToSubmit = {
      title: show.title || "No title",
      genre: genre || "No genre",
      rating: show.rating || 0,
      status: status || "No status",
      airingDate: show.airingDate || "No date",
    };

    setShowList([...showList, showToSubmit]);
    setFilteredShowList([...filteredShowList, showToSubmit]);

    setShow({
      title: "",
      genre: "",
      rating: 0,
      status: "",
      airingDate: "",
    });

    setGenre("");
    setStatus("");
    genreSelectRef.current.value = "";
    statusSelectRef.current.value = "";
  };

  return (
    <div className="form-container">
      <h4 className="form-title">➕ Add a new Show 🎞️</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="title">Title:</label>
          <input
            className="input-field"
            type="text"
            name="title"
            value={show.title}
            placeholder="Provide title"
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="genre">Genre:</label>
          <select
            className="form-selector-menu"
            name="genres"
            id="genres-select"
            onChange={handleGenreChange}
            ref={genreSelectRef}
          >
            <option value="">--Select option--</option>
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
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="rating">Rating:</label>
          <div className="number-input-container">
            <span className="input-span">(0 - 10)</span>
            <input
              className="number-input-field"
              type="number"
              name="rating"
              value={show.rating || 0}
              min={0}
              max={10}
              onChange={handleChange}
              step="0.1"
            />
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="status">Status:</label>
          <select
            className="form-selector-menu"
            name="status"
            id="status-select"
            onChange={handleStatusChange}
            ref={statusSelectRef}
          >
            <option value="">--Select option--</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Completed">Completed</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="airingDate">Airing date:</label>
          <input
            className="input-field"
            type="date"
            name="airingDate"
            value={show.airingDate}
            onChange={handleChange}
          />
        </div>

        <button className="form-submit" type="submit">
          Submit ✅
        </button>
      </form>
    </div>
  );
};

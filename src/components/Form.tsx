import React, { useState } from "react";
import { addShow } from "../utils/addShow";
import { TVShowProps } from "./TVShow";

export const TVShowForm = () => {
  const [show, setShow] = useState<TVShowProps>({
    title: "",
    genre: "",
    rating: 0,
    status: "",
    airingDate: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // May 5th, you can use terenary operator here
    if (name === "rating") {
      setShow({
        ...show,
        [name]: parseInt(value),
      });
    } else {
      setShow({
        ...show,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addShow(show);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={show.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Genre:
        <input
          type="text"
          name="genre"
          value={show.genre}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Rating:
        {/* <h3>Min 0 / Max 10</h3> */}
        <input
          type="number"
          name="rating"
          value={show.rating}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Status:
        <input
          type="text"
          name="status"
          value={show.status}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Airing Date:
        <input
          type="date"
          name="airingDate"
          value={show.airingDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

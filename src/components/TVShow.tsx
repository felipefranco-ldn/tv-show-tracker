import { Component } from "react";
import "../data/tv-shows.json";

export interface TVShowProps {
  title: string;
  genre: string;
  rating: number;
  status: string;
  airingDate: string;
}

export interface TVShowState {
  title: string;
  genre: string;
  rating: number;
  status: string;
  airingDate: string;
}

export default class TVShow extends Component<TVShowProps, TVShowState> {
  constructor(props: TVShowProps) {
    super(props);
    //May 5th - Define an interface this.stage:TVShowState and add default values
    // while accessing the state values, use spread operator 
    this.state = {
      title: props.title,
      genre: props.genre,
      rating: props.rating,
      status: props.status,
      airingDate: props.airingDate,
    };
  }

  setTitle = (title: string) => {
    this.setState({ title });
  };
  setGenre = (genre: string) => {
    this.setState({ genre });
  };
  setRating = (rating: number) => {
    this.setState({ rating });
  };
  setStatus = (status: string) => {
    this.setState({ status });
  };
  setAiringDate = (airingDate: string) => {
    this.setState({ airingDate });
  };

  getTitle = (): string => {
    return this.state.title;
  };

  getGenre = (): string => {
    return this.state.genre;
  };

  getRating = (): number => {
    return this.state.rating;
  };

  getStatus = (): string => {
    return this.state.status;
  };

  getAiringDate = (): string => {
    return this.state.airingDate;
  };

  static genres: string[] = ["Crime", "Fantasy", "Comedy", "Sci-Fi", "Action"];

  static statusOptions: string[] = ["Completed", "Ongoing", "Cancelled"];
}

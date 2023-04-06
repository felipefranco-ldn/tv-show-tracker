import "../data/tv-shows.json";

export interface TVShowProps {
  title: string;
  genre: string;
  rating: number;
  status: string;
  airingDate: string;
}

/**
 * It's not necessary for this class to be a React component as you're not rendering anything
 * to the screen. Although I can see that this was made to be reactive, you could use this
 * more as a way to define your structure than a component. Think like you're using plain objects!
 * {
 *   title: "The Office",
 *   genre: "Comedy",
 *   rating: 8.9,
 *   status: "Completed",
 *   airingDate: "2005-03-24"
 * }
 */

export default class TVShow {
  private _title: string;
  private _genre: string;
  private _rating: number;
  private _status: string;
  private _airingDate: string;

  constructor(props: TVShowProps) {
    this._title = props.title;
    this._genre = props.genre;
    this._rating = props.rating;
    this._status = props.status;
    this._airingDate = props.airingDate;
  }

  set title(title: string) {
    this._title = title;
  }

  set genre(genre: string) {
    this._genre = genre;
  }

  set rating(rating: number) {
    this._rating = rating;
  }

  set status(status: string) {
    this._status = status;
  }

  set airingDate(airingDate: string) {
    this._airingDate = airingDate;
  }

  get title(): string {
    return this._title;
  }

  get genre(): string {
    return this._genre;
  }

  get rating(): number {
    return this._rating;
  }

  get status(): string {
    return this._status;
  }

  get airingDate(): string {
    return this._airingDate;
  }

  static genres: string[] = ["Crime", "Fantasy", "Comedy", "Sci-Fi", "Action"];

  static statusOptions: string[] = ["Completed", "Ongoing", "Cancelled"];
}

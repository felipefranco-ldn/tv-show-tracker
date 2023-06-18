import "../data/tv-shows.json";

export interface TVShowProps {
  title: string;
  genre: string;
  rating: number;
  status: string;
  airingDate: string;
}

export class TVShow {
  private _title: string;
  private _genre: string;
  private _rating: number;
  private _status: string;
  private _airingDate: string;

  constructor(props: TVShowProps) {
    const { title, genre, rating, status, airingDate } = props;

    this._title = title;
    this._genre = genre;
    this._rating = rating;
    this._status = status;
    this._airingDate = airingDate;
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

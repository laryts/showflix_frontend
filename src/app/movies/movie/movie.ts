export interface Movie {
  _id: string;
  imdbID: string;
  title: string;
  poster: string;
  like: boolean;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

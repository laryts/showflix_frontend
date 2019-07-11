import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "./movie";

const API = "http://localhost:3333";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}

  listMovies() {
    return this.http.get<Movie[]>(`${API}/movies`);
  }

  store(movie) {
    const { Title, Poster, imdbID } = movie;
    return this.http
      .post<any[]>(`${API}/movies`, {
        title: Title,
        poster: Poster,
        imdbID: imdbID
      })
      .subscribe(
        data => {
          console.log("Response", data);
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  delete(id) {
    return this.http.delete(`${API}/movies/${id}`).subscribe(
      data => {
        console.log("Response", data);
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}

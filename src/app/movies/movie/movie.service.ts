import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movie } from "./movie";

const API = "http://localhost:3333";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}

  listFromUser() {
    return this.http.get<Movie[]>(`${API}/movies`);
  }
}

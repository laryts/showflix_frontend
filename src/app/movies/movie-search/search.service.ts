import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  apiKey: string = "449f5fa7";
  baseUrl: string = "http://www.omdbapi.com";

  constructor(private http: HttpClient) {}

  search(queryString: string) {
    let url = `${this.baseUrl}/?apikey=${this.apiKey}&t=${queryString}`;
    return this.http.get(url);
  }
}

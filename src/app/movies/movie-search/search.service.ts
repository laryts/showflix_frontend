import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  apiKey: string = "449f5fa7";
  baseUrl: string = "http://www.omdbapi.com";

  constructor(private http: HttpClient) {}

  search(queryString: string) {
    let url = `${this.baseUrl}/?apikey=${this.apiKey}&s=${queryString}`;
    return this.http.get(url);
  }

  searchById(id: string) {
    let url = `${this.baseUrl}/?apikey=${this.apiKey}&i=${id}`;
    return this.http.get(url);
  }

  searchPaginated(queryString: string, page: number) {
    const params = new HttpParams().append("page", page.toString());
    let url = `${this.baseUrl}/?apikey=${
      this.apiKey
    }&s=${queryString}&page=${page}`;
    return this.http.get<any[]>(url);
  }
}

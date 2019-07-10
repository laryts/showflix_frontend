import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SearchService } from "./search.service";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { MovieService } from "../movie/movie.service";

@Component({
  selector: "app-movie-search",
  templateUrl: "./movie-search.component.html",
  styleUrls: ["./movie-search.component.scss"]
})
export class MovieSearchComponent implements OnInit {
  results: any[] = [];
  queryField: FormControl = new FormControl();
  hasMore: boolean = true;
  currentPage: number = 1;

  constructor(
    private searchService: SearchService,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.queryField.valueChanges
      .pipe(debounceTime(300))
      .pipe(distinctUntilChanged())
      .pipe(switchMap(query => this.searchService.searchPaginated(query, 1)))
      .subscribe(result => {
        if (result["Error"]) {
          return;
        } else {
          this.results = result["Search"];
        }
      });
  }

  addMovie(movie) {
    this.movieService.store(movie);
  }

  load() {
    this.searchService
      .searchPaginated(this.queryField.value, ++this.currentPage)
      .subscribe(movies => {
        this.results = this.results.concat(movies["Search"]);
        if (!movies["Seatch"].length) this.hasMore = false;
      });
  }
}

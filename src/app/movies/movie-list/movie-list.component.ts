import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

import { Movie } from "../movie/movie";
import { MovieService } from "../movie/movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit, OnChanges, OnDestroy {
  movies: Movie[] = [];
  title: string = "";
  debounce: Subject<string> = new Subject<string>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movies = this.activatedRoute.snapshot.data["movies"];

    this.debounce.next("f");
    this.debounce.subscribe(value => alert(value));
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(title => (this.title = title));
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes.movies;
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  delete(movie: Movie) {
    this.movies.filter(item => item.imdbID !== movie.imdbID);
    this.movieService.delete(movie.imdbID);
  }
}

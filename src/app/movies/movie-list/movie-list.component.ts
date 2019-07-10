import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

import { Movie } from "../movie/movie";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  title: string = "";
  debounce: Subject<string> = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.movies = this.activatedRoute.snapshot.data["movies"];

    this.debounce.next("f");
    this.debounce.subscribe(value => alert(value));
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(title => (this.title = title));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}

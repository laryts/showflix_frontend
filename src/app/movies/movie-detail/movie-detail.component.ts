import { Component, OnInit } from "@angular/core";
import { SearchService } from "../movie-search/search.service";
import { Movie } from "../movie/movie";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"]
})
export class MovieDetailComponent implements OnInit {
  movie: any[] = [];

  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.searchService
      .searchById(this.activatedRoute.snapshot.params.id)
      .subscribe(response => this.movie.push(response));
  }
}

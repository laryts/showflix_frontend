import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SearchService } from "./search.service";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
  selector: "app-movie-search",
  templateUrl: "./movie-search.component.html",
  styleUrls: ["./movie-search.component.css"]
})
export class MovieSearchComponent implements OnInit {
  results: any[] = [];
  queryField: FormControl = new FormControl();

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.queryField.valueChanges
      .pipe(debounceTime(200))
      .pipe(distinctUntilChanged())
      .pipe(switchMap(query => this.searchService.search(query)))
      .subscribe(result => {
        console.log("TCL: MovieSearchComponent -> ngOnInit -> result", result);
        // if (result. === 400) {
        // return;
        // } else {
        // this.results = result.j;
        // }
      });
  }
}

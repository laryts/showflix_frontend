import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  @Input() poster = "";
  @Input() title = "";

  constructor() {}

  ngOnInit() {}
}

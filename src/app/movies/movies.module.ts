import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { MovieComponent } from "./movie/movie.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieFormComponent } from "./movie-form/movie-form.component";
import { MovieSearchComponent } from "./movie-search/movie-search.component";
import { SearchService } from "./movie-search/search.service";
import { LoadButtonComponent } from "./movie-list/load-button/load-button.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { RouterModule } from "@angular/router";

import { BarRatingModule } from "ngx-bar-rating";

@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent,
    MovieFormComponent,
    MovieSearchComponent,
    LoadButtonComponent,
    MovieDetailComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BarRatingModule
  ],
  providers: [SearchService]
})
export class MoviesModule {}

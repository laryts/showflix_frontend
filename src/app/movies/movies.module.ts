import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { MovieComponent } from "./movie/movie.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieFormComponent } from "./movie-form/movie-form.component";
import { MovieSearchComponent } from "./movie-search/movie-search.component";
import { SearchService } from "./movie-search/search.service";

@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent,
    MovieFormComponent,
    MovieSearchComponent
  ],
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  providers: [SearchService]
})
export class MoviesModule {}

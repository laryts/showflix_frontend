import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieListComponent } from "./movies/movie-list/movie-list.component";
import { MovieFormComponent } from "./movies/movie-form/movie-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { MovieListResolver } from "./movies/movie-list/movie-list.resolver";
import { MovieSearchComponent } from "./movies/movie-search/movie-search.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";

const routes: Routes = [
  { path: "", component: MovieSearchComponent },
  {
    path: "movies",
    component: MovieListComponent,
    resolve: { movies: MovieListResolver }
  },
  { path: "movie/:id", component: MovieDetailComponent },
  { path: "add", component: MovieFormComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

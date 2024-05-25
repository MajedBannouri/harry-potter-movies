import { Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:movieId', component: MovieDetailsComponent },
];

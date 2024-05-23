import { Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';

export const routes: Routes = [
    {path:"", redirectTo: '/movies', pathMatch:'full'},
    { path: 'movies', component: MoviesListComponent },

];

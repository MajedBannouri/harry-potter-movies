import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieFilter } from '../../models';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from '../../components/movie-item/movie-item.component';
import { Subscription } from 'rxjs';
import { MovieFilterComponent } from '../../components/movie-filter/movie-filter.component';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MovieItemComponent, MovieFilterComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  filtredMovies: Movie[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getAllMovies();
  }
  getAllMovies(): void {
    this.subscription.add(
      this.moviesService.getMovies().subscribe((data) => {
        this.movies = data;
        this.filtredMovies = data;
      })
    );
  }
  onFilterChange(movieFilter: MovieFilter) {
    this.filtredMovies = this.moviesService.filterMovies(
      this.movies,
      movieFilter
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

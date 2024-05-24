import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieFilter } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('movies');
  }

  filterMovies(movies: Movie[], filter: MovieFilter): Movie[] {
    return movies.filter((movie) => {
      const matchesTitles: boolean = movie.title
        .toLocaleLowerCase()
        .includes(filter.title.toLocaleLowerCase());
      const matchesReleaseYear: boolean = filter.releaseYear
        ? movie.release_date
            .split('-')[0]
            .startsWith(filter.releaseYear.toString())
        : true;
      return matchesTitles && matchesReleaseYear;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../models';
import { CommonModule } from '@angular/common';
import { BudgetPipe } from '../../pipes/budget/budget.pipe';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, BudgetPipe, DurationPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  movieDetails!: MovieDetails;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const movieId: string = this.route.snapshot.params['id'];

    this.getMovieDetails(movieId);
  }

  getMovieDetails(movieId: string) {
    this.moviesService.getMovieDetailsById(movieId).subscribe((data) => {
      console.log('daaaata', data);

      this.movieDetails = data;
    });
  }

  backToMoviesList() {
    this.router.navigate(['/movies']);
  }
}

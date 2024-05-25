import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../models';
import { CommonModule } from '@angular/common';
import { BudgetPipe } from '../../pipes/budget/budget.pipe';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, BudgetPipe, DurationPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  movieDetails!: MovieDetails;
  private subscription: Subscription = new Subscription();

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const movieId: string = this.route.snapshot.params['movieId'];

    this.getMovieDetails(movieId);
  }

  getMovieDetails(movieId: string): void {
    this.subscription.add(
      this.moviesService.getMovieDetailsById(movieId).subscribe((data) => {
        this.movieDetails = data;
      })
    );
  }

  backToMoviesList(): void {
    this.router.navigate(['/movies']);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

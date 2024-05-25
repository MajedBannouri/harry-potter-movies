import { Component, Input } from '@angular/core';
import { Movie } from '../../models';
import { BudgetPipe } from '../../pipes/budget/budget.pipe';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [BudgetPipe, CurrencyPipe, DurationPipe],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css',
})
export class MovieItemComponent {
  @Input() movie!: Movie;

  constructor(private router: Router) {}

  navigateToMovieDetails(movieId: string) {
    this.router.navigate(['/movies', movieId]);
  }
}

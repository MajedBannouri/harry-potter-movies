import { Component, Input } from '@angular/core';
import { Movie } from '../../models';
import { BudgetPipe } from '../../pipes/budget/budget.pipe';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [CommonModule, BudgetPipe, CurrencyPipe, DurationPipe],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css',
})
export class MovieItemComponent {
  @Input() movie!: Movie;

  constructor(private router: Router) {}

  navigateToMovieDetails(movieId: string): void {
    this.router.navigate(['/movies', movieId]);
  }
}

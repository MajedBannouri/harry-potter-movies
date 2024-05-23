import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  CurrencyPipe } from '@angular/common';
import { BudgetPipe } from './pipes/budget/budget.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'harry-potter-movies';
}

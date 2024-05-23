import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { BudgetPipe } from './pipes/budget/budget.pipe';
import { CurrencyPipe } from '@angular/common';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { MovieItemComponent } from './components/movie-item/movie-item.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),   importProvidersFrom(HttpClientModule), BudgetPipe, CurrencyPipe, DurationPipe, MovieItemComponent], 
};

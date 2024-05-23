import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from '../../components/movie-item/movie-item.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule,MovieItemComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit, OnDestroy {
  movies: Movie[] = []
  private subscription: Subscription = new Subscription()

  constructor(private moviesService: MoviesService){}

  ngOnInit(){

  this.getAllMovies()
  }
  getAllMovies():void {
    this.subscription.add(

      this.moviesService.getMovies().subscribe(data=>this.movies=data)
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  

}

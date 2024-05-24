import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieFilter } from '../../models';

@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.css'
})
export class MovieFilterComponent {

  @Output() filterChange = new EventEmitter<MovieFilter>()

  movieTitle: string = ''
  movieReleaseYear!: number 

  onFilterChange():void {
    this.filterChange.emit({title:this.movieTitle, releaseYear:this.movieReleaseYear})
    
  }
  
}

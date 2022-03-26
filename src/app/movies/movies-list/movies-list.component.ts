import { MoviesService } from './../movies.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  @Input()
  movies;

  remove(index: number) {
    this.movies.splice(index, 1);
  }
}

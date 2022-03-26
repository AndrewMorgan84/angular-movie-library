import { MoviesService } from './../movies.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output()
  onDelete = new EventEmitter<void>();

  remove(id: number) {
    this.moviesService.delete(id).subscribe(() => {
      this.onDelete.emit();
    });
  }
}

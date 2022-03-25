import { movieCreationDTO, movieDTO } from './../movies.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: movieDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {});
  }

  onSaveChanges(movieCreationDTO: movieCreationDTO) {}
}

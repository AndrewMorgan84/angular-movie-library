import { movieTheatersCreationDTO } from './../movie-theaters.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css'],
})
export class CreateMovieTheaterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  saveChanges(movieTheatersCreationDTO: movieTheatersCreationDTO) {
    console.log(movieTheatersCreationDTO);
  }
}

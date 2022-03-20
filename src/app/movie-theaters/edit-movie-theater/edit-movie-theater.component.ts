import {
  movieTheatersCreationDTO,
  movieTheatersDTO,
} from './../movie-theaters.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css'],
})
export class EditMovieTheaterComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: movieTheatersDTO = {
    name: 'VUE',
    latitude: 50.722163462381815,
    longitude: -3.5372352699050684,
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {});
  }

  saveChanges(movieTheatersCreationDTO: movieTheatersCreationDTO) {}
}

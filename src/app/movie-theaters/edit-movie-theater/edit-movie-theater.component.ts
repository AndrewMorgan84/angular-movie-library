import { MovieTheatersService } from './../movie-theaters.service';
import {
  movieTheatersCreationDTO,
  movieTheatersDTO,
} from './../movie-theaters.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css'],
})
export class EditMovieTheaterComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieTheatersService: MovieTheatersService,
    private router: Router
  ) {}

  model: movieTheatersDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.movieTheatersService
        .getById(params.id)
        .subscribe((movieTheater) => (this.model = movieTheater));
    });
  }

  saveChanges(movieTheatersCreationDTO: movieTheatersCreationDTO) {
    this.movieTheatersService
      .edit(this.model.id, movieTheatersCreationDTO)
      .subscribe(() => {
        this.router.navigate(['/movietheaters']);
      });
  }
}

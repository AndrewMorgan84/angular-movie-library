import { Router } from '@angular/router';
import { MovieTheatersService } from './../movie-theaters.service';
import { movieTheatersCreationDTO } from './../movie-theaters.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css'],
})
export class CreateMovieTheaterComponent implements OnInit {
  constructor(
    private movieTheatersService: MovieTheatersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveChanges(movieTheaterCreationDTO: movieTheatersCreationDTO) {
    this.movieTheatersService.create(movieTheaterCreationDTO).subscribe(() => {
      this.router.navigate(['/movietheaters']);
    });
  }
}

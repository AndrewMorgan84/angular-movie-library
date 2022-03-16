import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheaters = [
      {
        title: 'spider-man',
        releaseDate: new Date('2010-08-15'),
        price: 8.99,
        poster:
          'https://www.themoviedb.org/t/p/original/rweIrveL43TaxUN0akQEaAXL6x0.jpg',
      },
      {
        title: 'Moana',
        releaseDate: new Date('2016-11-14'),
        price: 14.99,
        poster:
          'https://www.themoviedb.org/t/p/original/6iHQpFiTg0QbKYac5Mprhx7tXo3.jpg',
      },
    ];
    this.moviesFutureReleases = [];
  }

  title = 'angular-movie-library';
  moviesInTheaters: any;
  moviesFutureReleases: any;

  handleRating(rate: number) {
    alert(`the user selected ${rate}`);
  }
}

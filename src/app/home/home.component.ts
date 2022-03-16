import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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
  moviesInTheaters: any;
  moviesFutureReleases: any;
}

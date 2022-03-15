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
      },
      { title: 'Moana', releaseDate: new Date('2016-11-14'), price: 14.99 },
    ];
    this.moviesFutureReleases = [
      {
        title: 'Avengers',
        releaseDate: new Date('2011-03-22'),
        price: 12.99,
      },
      {
        title: 'Jurassic Park',
        releaseDate: new Date('1994-11-14'),
        price: 3.99,
      },
    ];
  }

  title = 'angular-movie-library';
  moviesInTheaters: any;
  moviesFutureReleases: any;
}

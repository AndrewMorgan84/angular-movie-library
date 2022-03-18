import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css'],
})
export class MovieFilterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form!: FormGroup;

  genres = [
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Horror' },
    { id: 4, name: 'Crime' },
  ];

  movies = [
    {
      title: 'Spider Man',
      poster:
        'https://www.themoviedb.org/t/p/original/rweIrveL43TaxUN0akQEaAXL6x0.jpg',
    },
    {
      title: 'Moana',
      poster:
        'https://www.themoviedb.org/t/p/original/6iHQpFiTg0QbKYac5Mprhx7tXo3.jpg',
    },
    {
      title: 'Inception',
      poster:
        'https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_french_original_film_art_399c9bc0-2060-432c-a24b-873162f00abd_600x.jpg?v=1643315917',
    },
  ];

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false,
    });

    this.form.valueChanges.subscribe((values) => {
      this.movies = this.originalMovies;
      this.filterMovies(values);
    });
  }

  filterMovies(values: any) {
    if (values.title) {
      this.movies = this.movies.filter(
        (movie) => movie.title.indexOf(values.title) !== -1
      );
    }
  }

  clearForm() {
    this.form.reset();
  }
}

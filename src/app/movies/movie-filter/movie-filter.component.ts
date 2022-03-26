import { HttpResponse } from '@angular/common/http';
import { GenresService } from './../../genres/genres.service';
import { movieDTO } from './../movies.model';
import { genreDTO } from './../../genres/genres.model';
import { MoviesService } from './../movies.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css'],
})
export class MovieFilterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private moviesService: MoviesService,
    private genresService: GenresService
  ) {}

  form!: FormGroup;

  genres: genreDTO[] = [];

  movies: movieDTO[] = [];

  currentPage = 1;
  recordsPerPage = 10;
  initialFormValues: any;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false,
    });

    this.initialFormValues = this.form.value;

    this.genresService.getAll().subscribe((genres) => {
      this.genres = genres;

      this.filterMovies(this.form.value);

      this.form.valueChanges.subscribe((values) => {
        this.filterMovies(values);
      });
    });
  }

  filterMovies(values: any) {
    values.page = this.currentPage;
    values.recordsPerPage = this.recordsPerPage;

    this.moviesService
      .filter(values)
      .subscribe((response: HttpResponse<movieDTO[]>) => {
        this.movies = response.body;
      });
  }

  clearForm() {
    this.form.patchValue(this.initialFormValues);
  }
}

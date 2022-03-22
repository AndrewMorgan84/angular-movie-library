import { GenresService } from './../genres.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css'],
})
export class IndexGenresComponent implements OnInit {
  constructor(private genreService: GenresService) {}

  ngOnInit(): void {
    this.genreService.getAll().subscribe((genres) => {
      console.log(genres);
    });
  }
}

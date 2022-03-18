import { genreCreationDTO } from './../genres.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveChanges(genreCreationDTO: genreCreationDTO) {
    console.log(genreCreationDTO);
    this.router.navigate(['/genres']);
  }
}

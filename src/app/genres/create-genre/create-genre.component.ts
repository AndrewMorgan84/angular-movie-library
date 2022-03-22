import { GenresService } from './../genres.service';
import { genreCreationDTO } from './../genres.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent implements OnInit {
  constructor(private router: Router, private genreService: GenresService) {}

  ngOnInit(): void {}

  saveChanges(genreCreationDTO: genreCreationDTO) {
    this.genreService.create(genreCreationDTO).subscribe(
      () => {
        this.router.navigate(['/genres']);
      },
      (error) => console.error(error)
    );
  }
}

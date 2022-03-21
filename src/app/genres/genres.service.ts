import { genreDTO } from './genres.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor() {}

  getAll(): genreDTO[] {
    return [{ id: 1, name: 'Comedy' }];
  }
}

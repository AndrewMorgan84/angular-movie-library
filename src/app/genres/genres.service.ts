import { environment } from './../../environments/environment';
import { genreDTO, genreCreationDTO } from './genres.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL + '/genres';
  getAll(): Observable<genreDTO[]> {
    return this.http.get<genreDTO[]>(this.apiURL);
  }

  create(genre: genreCreationDTO) {
    return this.http.post(this.apiURL, genre);
  }
}

import {
  movieTheatersDTO,
  movieTheatersCreationDTO,
} from './movie-theaters.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieTheatersService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiURL + '/movieTheaters';

  get(): Observable<movieTheatersDTO[]> {
    return this.http.get<movieTheatersDTO[]>(this.apiUrl);
  }

  create(movieTheatersCreationDTO: movieTheatersCreationDTO) {
    return this.http.post(this.apiUrl, movieTheatersCreationDTO);
  }
}

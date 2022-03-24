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

  getById(id: number): Observable<movieTheatersDTO> {
    return this.http.get<movieTheatersDTO>(`${this.apiUrl}/${id}`);
  }

  create(movieTheatersCreationDTO: movieTheatersCreationDTO) {
    return this.http.post(this.apiUrl, movieTheatersCreationDTO);
  }

  public edit(id: number, movieTheatersCreationDTO: movieTheatersCreationDTO) {
    return this.http.put(`${this.apiUrl}/${id}`, movieTheatersCreationDTO);
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

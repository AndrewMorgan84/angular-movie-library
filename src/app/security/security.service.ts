import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { userCredentials, authenticationResponse } from './security.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL + '/account';

  isAuthenticated(): boolean {
    return false;
  }

  getRole(): string {
    return '';
  }

  register(
    userCredentials: userCredentials
  ): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(
      this.apiURL + '/create',
      userCredentials
    );
  }
}

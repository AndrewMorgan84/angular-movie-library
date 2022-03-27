import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { Router } from '@angular/router';
import { SecurityService } from './../security.service';
import { userCredentials, authenticationResponse } from './../security.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  errors: string[] = [];

  login(userCredentials: userCredentials) {
    this.securityService.login(userCredentials).subscribe(
      (authenticationResponse) => {
        this.securityService.saveToken(authenticationResponse);
        this.router.navigate(['/']);
      },
      (error) => (this.errors = parseWebAPIErrors(error))
    );
  }
}

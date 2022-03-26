import { SecurityService } from './../security.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorise-view',
  templateUrl: './authorise-view.component.html',
  styleUrls: ['./authorise-view.component.css'],
})
export class AuthoriseViewComponent implements OnInit {
  constructor(private SecurityService: SecurityService) {}

  ngOnInit(): void {}

  @Input()
  role: string;

  public isAuthorised() {
    if (this.role) {
      return this.SecurityService.getRole() === this.role;
    } else {
      return this.SecurityService.isAuthenticated();
    }
  }
}

import { Router } from '@angular/router';
import { ActorsService } from './../actors.service';
import { actorCreationDTO } from '../actors.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css'],
})
export class CreateActorComponent implements OnInit {
  constructor(private actorsService: ActorsService, private router: Router) {}

  ngOnInit(): void {}

  saveChanges(actorCreationDTO: actorCreationDTO) {
    this.actorsService.create(actorCreationDTO).subscribe(() => {
      this.router.navigate(['/actors']);
    });
  }
}

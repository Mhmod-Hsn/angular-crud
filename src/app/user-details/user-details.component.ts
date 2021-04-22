import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  id;
  user;
  constructor(activatedRoute: ActivatedRoute, private service: UsersService) {
    this.id = activatedRoute.snapshot.params.id;

  }

  ngOnInit(): void {
    this.service.getUser(this.id).subscribe(
      response => this.user = response,
      error => console.log(error)
    );
  }

}

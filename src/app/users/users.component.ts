import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../Services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(private service: UsersService, private router: Router) { }
  users;

  ngOnInit(): void {
    this.service.getAll().subscribe(
      res => this.users = res,
      err => console.log(err),
    );
  };

  deleteUser(id){
    let conf = confirm('Are you sure');

    if (conf){
      this.service.deleteUser(id).subscribe(
        res => {
          this.ngOnInit();
        },
        error => console.log(error),
      );
    }
  }

}

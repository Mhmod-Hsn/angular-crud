import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../Services/users.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styles: [
  ]
})
export class NewUserComponent implements OnInit {

  constructor(private service: UsersService, private router: Router) { }
  name;
  email;
  phone;
  city;
  street;

  validation = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{13}')]),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }


  createUser(){
    let user = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      city: this.city,
      street: this.street
    };

    this.service.addUser(user).subscribe(
      res => {
        this.name = '';
        this.phone = '';
        this.email = '';
        this.city = '';
        this.street = '';

        this.router.navigateByUrl('');
      },
      error => console.log(error),
    );
  }
}

import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../Services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './edit-user.component.html',
  styles: [
  ]
})
export class EditUserComponent implements OnInit {

  id;
  user;
  name;
  email;
  phone;
  city;
  street;
  isLoaded= false;

  validation = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{13}')]),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required)
  });

  constructor(activatedRoute: ActivatedRoute, private service: UsersService, private router: Router) {
    this.id = activatedRoute.snapshot.params.id;
  }


  ngOnInit(): void {
    this.service.getUser(this.id).subscribe(
      response => {
        this.isLoaded = true;
        // @ts-ignore
        ({name: this.name, phone: this.phone, email: this.email, city: this.city, street: this.street} = response);
      },
      error => console.log(error)
    );
  }

  // tslint:disable-next-line:typedef
  updateUser(){
    const user = {
      id: this.id,
      name: this.name,
      phone: this.phone,
      email: this.email,
      city: this.city,
      street: this.street
    };
    this.service.updateUser(user).subscribe(
      res => {
        this.router.navigateByUrl('');
      },
      error => console.log(error),
    );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private client: HttpClient) { }

  baseURL = 'http://localhost:3000/users';

  getAll(){
    return this.client.get(this.baseURL);
  }
  getUser(id){
    return this.client.get(`${this.baseURL}/${id}`);
  }
  addUser(user){
    return this.client.post(this.baseURL, user);
  }

  deleteUser(id){
    return this.client.delete(`${this.baseURL}/${id}`);
  }

  updateUser(user){
    return this.client.patch(`${this.baseURL}/${user.id}`, user);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {NewUserComponent} from './new-user/new-user.component';
import {ErrorComponent} from './error/error.component';
import {EditUserComponent} from './edit-user/edit-user.component';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserDetailsComponent},
  { path: 'users/:id/edit', component: EditUserComponent},
  { path: 'new', component: NewUserComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

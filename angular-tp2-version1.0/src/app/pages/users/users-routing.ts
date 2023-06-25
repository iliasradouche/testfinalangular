import { Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';

export const usersRoutes: Routes = [
  {
    path: "",
    component: ListUsersComponent
  },
  {
    path: "add",
    component: AddUserComponent
  }
];

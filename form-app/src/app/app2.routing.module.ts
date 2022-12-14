import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';

const routes2: Routes = [
    {path: 'users',component:UsersComponent},
    { path: 'users/add', component: AddUserComponent },
    {path: 'users/:id',component:AddUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes2)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
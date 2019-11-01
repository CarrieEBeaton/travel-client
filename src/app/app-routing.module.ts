import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserFormContainerComponent } from './user/user-form-container/user-form-container.component';
import { UserAddComponent } from './user/user-add/user-add.component';

const routes: Routes = [
  {path: '', redirectTo: 'user-list', pathMatch: 'full'},
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-add',
    component: UserFormContainerComponent
  },
    {
    path: 'user-edit/:userId',
    component: UserFormContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

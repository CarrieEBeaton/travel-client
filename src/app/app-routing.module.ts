import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormContainerComponent } from './user/user-form-container/user-form-container.component';
import { UserListComponent } from './user/user-list/user-list.component';

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

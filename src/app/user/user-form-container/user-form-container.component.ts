import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { FormGroup, FormControl } from '@angular/forms';
import { selectedSelectedUser, selectUserList } from '../store/selectors/user.selectors';
import { GetUser, AddUpdateUser, DeleteUser, GetUsers, UserListRedirect } from '../store/actions/user.actions';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent implements OnInit {

  user$ = this.store.pipe(select(selectedSelectedUser));
  userForm: FormGroup;
  addUser: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      userId: new FormControl(),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('')
    });
    
    if (this.route.snapshot.params.userId) {
      this.store.dispatch(new GetUser(this.route.snapshot.params.userId));
      this.user$ = this.store.pipe(select(selectedSelectedUser));
    } else {
      this.addUser = true;
    }
  }

  save(user: User) {
    this.store.dispatch(new AddUpdateUser(user));
  }

  remove(userId: number) {
    this.store.dispatch(new DeleteUser(userId));
  }

}

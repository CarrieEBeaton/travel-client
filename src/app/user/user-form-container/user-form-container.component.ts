import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state/app.state';
import { User } from '../model/user';
import { AddUpdateUser, DeleteUser, GetUser } from '../store/actions/user.actions';
import { selectedSelectedUser } from '../store/selectors/user.selectors';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent implements OnInit {

  user$ = this.store.pipe(select(selectedSelectedUser));

  constructor(private route: ActivatedRoute,
    private store: Store<AppState>) { }

  ngOnInit() {
    if (this.route.snapshot.params.userId) {
      this.store.dispatch(new GetUser(this.route.snapshot.params.userId));
      this.user$ = this.store.pipe(select(selectedSelectedUser));
    } else {
      this.user$ = undefined;
    }
  }

  save(user: User) {
    this.store.dispatch(new AddUpdateUser(user));
  }

  remove(userId: number) {
    this.store.dispatch(new DeleteUser(userId));
  }

}

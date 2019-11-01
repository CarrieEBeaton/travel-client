import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state/app.state';
import { User } from '../model/user';
import { GetUsers } from '../store/actions/user.actions';
import { selectUserList } from '../store/selectors/user.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  private users$: Observable<User[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers());    
    this.users$ = this.store.pipe(select(selectUserList));
  }
}

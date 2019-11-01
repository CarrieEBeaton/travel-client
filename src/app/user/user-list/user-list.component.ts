import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck, AfterViewInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectUserList } from '../store/selectors/user.selectors';
import { GetUsers } from '../store/actions/user.actions';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { tap, delay, startWith } from 'rxjs/operators';

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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { patternValidator } from 'src/app/shared/validators/pattern.validator';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent implements OnInit {

  userForm: FormGroup;
  @Input() user$: Observable<User>;
  @Input() user: User;

  @Output() onSave = new EventEmitter<User>();
  @Output() onDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

    this.userForm = new FormGroup({
      userId: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    });
  }

  save(user: User) {
    this.onSave.emit(user);
  }

  remove(userId: number) {
    this.onDelete.emit(userId);
  }
}

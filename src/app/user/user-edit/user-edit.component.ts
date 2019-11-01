import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  @Input() userForm: FormGroup;
  @Input() user: User;
  @Output() onSave = new EventEmitter<User>();
  @Output() onDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

    this.userForm.setValue({
      userId: this.user.userId,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email
    });
  }

  save(user: User) {
    this.onSave.emit(user);
  }

  remove(userId: number) {
    this.onDelete.emit(userId);
  }
}

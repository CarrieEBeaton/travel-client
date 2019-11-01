import { Action } from '@ngrx/store';
import { User } from '../../model/user';

export enum UserActionTypes {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUsersFailure = '[User] Get Users Failure',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
  GetUserFailure = '[User] Get User Failure',
  DeleteUser = '[User] Delete User',
  DeleteUserSuccess = '[User] Delete User Success',
  DeleteUserFailure = '[User] Delete User Failure',
  AddUpdateUser = '[User] Add or Update User',
  AddUpdateUserSuccess = '[User] Add or Update User Success',
  AddUpdateUserFailure = '[User] Add or Create User Failure',
  UserListRedirect = '[User] Redirect'
}

export class GetUsers implements Action {
  readonly type = UserActionTypes.GetUsers;
}

export class GetUsersSuccess implements Action {
  readonly type = UserActionTypes.GetUsersSuccess;

  constructor(public payload: User[]) { }
}

export class GetUsersFailure implements Action {
  readonly type = UserActionTypes.GetUsersFailure;

  constructor(public payload: any) { }
}

export class GetUser implements Action {
  readonly type = UserActionTypes.GetUser;

  constructor(public payload: number) { }
}

export class GetUserSuccess implements Action {
  readonly type = UserActionTypes.GetUserSuccess;

  constructor(public payload: User) { }
}

export class GetUserFailure implements Action {
  readonly type = UserActionTypes.GetUserFailure;

  constructor(public payload: any) { }
}

export class DeleteUser implements Action {
  readonly type = UserActionTypes.DeleteUser;

  constructor(public payload: number) { }
}

export class DeleteUserSuccess implements Action {
  readonly type = UserActionTypes.DeleteUserSuccess;
}

export class DeleteUserFailure implements Action {
  readonly type = UserActionTypes.DeleteUserFailure;

  constructor(public payload: any) { }
}

export class AddUpdateUser implements Action {
  readonly type = UserActionTypes.AddUpdateUser;

  constructor(public payload: User) { }
}

export class AddUpdateUserSuccess implements Action {
  readonly type = UserActionTypes.AddUpdateUserSuccess;

  constructor(public payload: User) { }
}

export class AddUpdateUserFailure implements Action {
  readonly type = UserActionTypes.AddUpdateUserFailure;

  constructor(public payload: any) { }
}

export class UserListRedirect implements Action {
  readonly type = UserActionTypes.UserListRedirect;
}

export type UserActions =
  | GetUsers
  | GetUsersSuccess
  | GetUsersFailure
  | GetUser
  | GetUserSuccess
  | GetUserFailure
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserFailure
  | AddUpdateUser
  | AddUpdateUserSuccess
  | AddUpdateUserFailure
  | UserListRedirect;

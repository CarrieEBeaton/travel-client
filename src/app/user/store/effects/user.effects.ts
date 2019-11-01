import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { AppState } from 'src/app/app-state/app.state';
import { User } from '../../model/user';
import { UserService } from '../../user-service/user.service';
import { AddUpdateUser, AddUpdateUserFailure, AddUpdateUserSuccess, DeleteUser, DeleteUserFailure, DeleteUserSuccess, GetUser, GetUsers, GetUsersFailure, GetUsersSuccess, GetUserSuccess, UserActionTypes, UserListRedirect } from '../actions/user.actions';

@Injectable()
export class UserEffects {

    constructor(private userService: UserService,
        private actions: Actions,
        private router: Router) {
    }

    @Effect()
    getUser$ = this.actions.pipe(
        ofType<GetUser>(UserActionTypes.GetUser),
        switchMap(action => this.userService.get(action.payload)),
        switchMap((user: User) => of(new GetUserSuccess(user))),
        catchError((error: any) => of(new GetUsersFailure(error)))
    );


    @Effect()
    getUsers$ = this.actions.pipe(
        ofType<GetUsers>(UserActionTypes.GetUsers),
        switchMap(() => this.userService.getAll()),
        switchMap((users: User[]) => of(new GetUsersSuccess(users))),
        catchError((error: any) => of(new GetUsersFailure(error)))
    );

    @Effect()
    addUpdateUsers$ = this.actions.pipe(
        ofType<AddUpdateUser>(UserActionTypes.AddUpdateUser),
        switchMap(action => this.userService.save(action.payload)),
        switchMap((user: User) => [ 
            new AddUpdateUserSuccess(user),
            new UserListRedirect()
        ]),
        catchError((error: any) => of(new AddUpdateUserFailure(error)))
    );

    @Effect()
    deleteUsers$ = this.actions.pipe(
        ofType<DeleteUser>(UserActionTypes.DeleteUser),
        switchMap(action => this.userService.remove(action.payload)),
        switchMap(() => [ 
            new DeleteUserSuccess(),
            new UserListRedirect()
        ]),
        catchError((error: any) => of(new DeleteUserFailure(error)))
    );

    @Effect({ dispatch: false })
    userListRedirect$ = this.actions.pipe(
        ofType(UserActionTypes.UserListRedirect),
        tap(() => {
            this.router.navigate(['/user-list']);
        }),
        switchMap(() => this.userService.getAll()),
        switchMap((users: User[]) => of(new GetUsersSuccess(users))),
        catchError((error: any) => of(new GetUsersFailure(error)))
    );
}
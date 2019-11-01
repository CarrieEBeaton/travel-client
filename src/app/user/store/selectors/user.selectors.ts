import { AppState } from "src/app/state/app.state";
import { UserState } from '../state/user.state';
import { createSelector } from '@ngrx/store';

const selectUsers = (state: AppState) => state.users;

export const selectUserList = createSelector (
    selectUsers,
    (state: UserState) => state.users
);

export const selectedSelectedUser = createSelector (
    selectUsers,
    (state: UserState) => state.selectedUser
);
import { ActionReducerMap } from '@ngrx/store';
import { userReducers } from '../user/store/reducers/user.reducers';
import { AppState } from './app.state';

export const appReducers: ActionReducerMap<AppState, any> = {
    users: userReducers
};
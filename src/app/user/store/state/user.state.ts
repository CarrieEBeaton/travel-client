import { User } from '../../model/user';

export interface UserState {
    selectedUser: User;
    users: User[];
}

export const initialUserState: UserState = {
    selectedUser: null,
    users: null
}
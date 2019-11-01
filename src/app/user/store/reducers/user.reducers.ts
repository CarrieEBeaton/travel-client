import { initialUserState, UserState } from '../state/user.state';
import { UserActionTypes, UserActions } from '../actions/user.actions';

export const userReducers = (
    state = initialUserState,
    action: UserActions
): UserState => {
    switch (action.type) {
        case UserActionTypes.GetUserSuccess: {
            return {
                ...state,
                selectedUser: action.payload
            };
        }
        case UserActionTypes.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }
        case UserActionTypes.AddUpdateUserSuccess: {
            return {
                ...state,
                selectedUser: action.payload
            };
        }
        case UserActionTypes.DeleteUserSuccess: {
            return {
                ...state,
            };
        }
        case UserActionTypes.GetUserFailure: {
            console.log("error");
        }
        default: return state;
    }
}
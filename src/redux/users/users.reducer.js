import usersActionTypes from './users.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    isLoading: false,
};

const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case usersActionTypes.SIGNIN_LOADING:
            return {
                ...currentState,
                isLoading: true,
            };
        case usersActionTypes.SIGNIN_SUCCUSS:
            return {
                ...currentState,
                currentUser: action.payload,
                error: null,
                isLoading: false,
            };

        case usersActionTypes.SIGNOUT_FAILURE:
        case usersActionTypes.SIGNIN_FAILURE:
            return {
                ...currentState,
                isLoading: false,
                error: action.payload,
            };

        case usersActionTypes.SIGNOUT_SUCCESS:
            return {
                ...currentState,
                currentUser: null,
                isLoading: false,
                error: null,
            };

        default:
            return currentState;
    }
};

export default userReducer;

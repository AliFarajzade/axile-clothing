import usersActionTypes from './users.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    isLoading: false,
};

const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case usersActionTypes.SIGNUP_START:
            return {
                ...currentState,
                isLoading: true,
                error: null,
            };

        case usersActionTypes.SIGNUP_SUCCESS:
            return {
                ...currentState,
                isLoading: false,
                error: null,
            };

        case usersActionTypes.SIGNUP_FAILURE:
            return {
                ...currentState,
                isLoading: false,
                error: action.payload,
            };

        case usersActionTypes.SIGNIN_LOADING_START:
            return {
                ...currentState,
                isLoading: true,
            };

        case usersActionTypes.SIGNIN_LOADING_STOP:
            return {
                ...currentState,
                isLoading: false,
            };

        case usersActionTypes.GOOGLE_SIGNIN_START:
        case usersActionTypes.EMAIL_SIGNIN_START:
            return {
                ...currentState,
                error: null,
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

import usersActionTypes from './users.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null,
};

const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case usersActionTypes.GOOGLE_SIGNIN_SUCCUSS:
        case usersActionTypes.EMAIL_SIGNIN_SUCCUSS:
            return {
                ...currentState,
                currentUser: action.payload,
                error: null,
            };

        case usersActionTypes.GOOGLE_SIGNIN_FAILURE:
        case usersActionTypes.EMAIL_SIGNIN_FAILURE:
            return {
                ...currentState,
                error: action.payload,
            };

        default:
            return currentState;
    }
};

export default userReducer;

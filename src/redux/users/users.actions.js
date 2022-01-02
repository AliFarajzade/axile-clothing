import userActionTypes from './users.types';

export const setCurrentUser = userAuth => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: userAuth,
});

// Google sign in actions
export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const googleSignInSuccuss = userAuth => ({
    type: userActionTypes.GOOGLE_SIGNIN_SUCCUSS,
    payload: userAuth,
});

export const googleSignInFailure = error => ({
    type: userActionTypes.GOOGLE_SIGNIN_FAILURE,
    payload: error,
});

// Email sign in actions
export const emailSignInStart = () => ({
    type: userActionTypes.EMAIL_SIGNIN_START,
});

export const emailSignInSuccuss = userAuth => ({
    type: userActionTypes.EMAIL_SIGNIN_SUCCUSS,
    payload: userAuth,
});

export const emailSignInFailure = error => ({
    type: userActionTypes.EMAIL_SIGNIN_FAILURE,
    payload: error,
});

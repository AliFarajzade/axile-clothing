import usersActionTypes from './users.types';

export const signInSuccuss = userAuth => ({
    type: usersActionTypes.SIGNIN_SUCCUSS,
    payload: userAuth,
});

export const signInFailure = error => ({
    type: usersActionTypes.SIGNIN_FAILURE,
    payload: error,
});

export const signInLoadingStart = () => ({
    type: usersActionTypes.SIGNIN_LOADING_START,
});

export const signInLoadingStop = () => ({
    type: usersActionTypes.SIGNIN_LOADING_STOP,
});

// Google sign in actions
export const googleSignInStart = () => ({
    type: usersActionTypes.GOOGLE_SIGNIN_START,
});

// Email sign in actions
export const emailSignInStart = (email, password) => ({
    type: usersActionTypes.EMAIL_SIGNIN_START,
    payload: { email, password },
});

// Sign out
export const signOutStart = () => ({
    type: usersActionTypes.SIGNOUT_START,
});

export const signOutSuccess = () => ({
    type: usersActionTypes.SIGNOUT_SUCCESS,
});

export const signOutFailure = error => ({
    type: usersActionTypes.SIGNOUT_FAILURE,
    payload: error,
});

// Checking for persistence
// User
export const checkUserSession = () => ({
    type: usersActionTypes.CHECK_USER_SESSION,
});

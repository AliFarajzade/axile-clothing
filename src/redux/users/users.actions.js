import usersActionTypes from './users.types';

// Generic sign in actions
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

// Sign up actions
export const signUpStart = (displayName, email, password) => ({
    type: usersActionTypes.SIGNUP_START,
    payload: { displayName, email, password },
});

export const signUpSuccess = () => ({
    type: usersActionTypes.SIGNUP_SUCCESS,
});

export const signUpFailure = error => ({
    type: usersActionTypes.SIGNUP_FAILURE,
    payload: error,
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

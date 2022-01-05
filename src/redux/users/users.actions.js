import userActionTypes from './users.types';

export const signInSuccuss = userAuth => ({
    type: userActionTypes.SIGNIN_SUCCUSS,
    payload: userAuth,
});

export const signInFailure = error => ({
    type: userActionTypes.SIGNIN_FAILURE,
    payload: error,
});

// Google sign in actions
export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGNIN_START,
});

// Email sign in actions
export const emailSignInStart = (email, password) => ({
    type: userActionTypes.EMAIL_SIGNIN_START,
    payload: { email, password },
});

import { takeLatest, put, all, call } from 'redux-saga/effects';

import usersActionTypes from './users.types';

import {
    signInFailure,
    signInSuccuss,
    signOutFailure,
    signOutSuccess,
    signInLoadingStart,
    signInLoadingStop,
    signUpFailure,
} from './users.actions';

import {
    auth,
    googleProvider,
    createUserProfileDocument,
    getCurrentUser,
} from '../../firebase/firebase.utilities';

// Generic sign function
function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(
            createUserProfileDocument,
            ...[userAuth, { ...additionalData }]
        );

        const snapshot = yield userRef.get();

        yield put(signInSuccuss({ id: snapshot.id, ...snapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

// Google sign in saga
function* signInWithGoogle() {
    try {
        const { user: userAuth } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(usersActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

// Email sign in saga
function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user: userAuth } = yield auth.signInWithEmailAndPassword(
            email,
            password
        );

        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* onEmailSignInStart() {
    yield takeLatest(usersActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

// Sign up
function* signUp({ payload: { displayName, email, password } }) {
    try {
        const { user: userAuth } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );
        yield getSnapshotFromUserAuth(userAuth, { displayName });
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

function* onSignUpStart() {
    yield takeLatest(usersActionTypes.SIGNUP_START, signUp);
}

// Sign out
function* signOut() {
    try {
        yield auth.signOut();

        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

function* onSignOutStart() {
    yield takeLatest(usersActionTypes.SIGNOUT_START, signOut);
}

// Checking for user session
function* isUserAuthenticted() {
    yield put(signInLoadingStart());
    try {
        const userAuth = yield getCurrentUser();
        if (userAuth) {
            yield getSnapshotFromUserAuth(userAuth);
        }
        yield put(signInLoadingStop());
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* onCheckUserSession() {
    yield takeLatest(usersActionTypes.CHECK_USER_SESSION, isUserAuthenticted);
}

export default function* usersSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
    ]);
}

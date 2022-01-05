import { takeLatest, put, all, call } from 'redux-saga/effects';

import usersActionTypes from './users.types';

import { signInFailure, signInSuccuss } from './users.actions';

import {
    auth,
    googleProvider,
    createUserProfileDocument,
} from '../../firebase/firebase.utilities';

// Generic sign function
function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(
            createUserProfileDocument,
            ...[userAuth, { signMethod: 'Google Sign.' }]
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

export default function* usersSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}

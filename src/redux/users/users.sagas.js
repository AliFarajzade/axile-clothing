import { takeLatest, put, all, call } from 'redux-saga/effects';

import usersActionTypes from './users.types';

import { googleSignInFailure, googleSignInSuccuss } from './users.actions';

import {
    auth,
    googleProvider,
    createUserProfileDocument,
} from '../../firebase/firebase.utilities';

export function* signInWithGoogle() {
    try {
        console.log('users SAGA');
        const { user: userAuth } = yield auth.signInWithPopup(googleProvider);

        // First mehtod
        // const userRef = yield createUserProfileDocument(userAuth, {
        //     signMethod: 'Google',
        // });

        // Second mehtod
        const userRef = yield call(
            createUserProfileDocument,
            ...[userAuth, { signMethod: 'Google Sign.' }]
        );

        const snapshot = yield userRef.get();

        yield put(googleSignInSuccuss({ id: snapshot.id, ...snapshot.data() }));
    } catch (error) {
        yield put(googleSignInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(usersActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export default function* usersSagas() {
    yield all([call(onGoogleSignInStart)]);
}

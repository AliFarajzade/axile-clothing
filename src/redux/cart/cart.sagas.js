import { takeLatest, call, all, put } from 'redux-saga/effects';

import usersActionTypes from '../users/users.types';

import { clearCart } from './cart.actions';

function* clearCartOnSignOut() {
    yield put(clearCart());
}

function* onSignOutSuccess() {
    yield takeLatest(usersActionTypes.SIGNOUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
}

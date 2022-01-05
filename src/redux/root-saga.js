import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shop.sagas';
import usersSagas from './users/users.sagas';

export default function* rootSaga() {
    yield all([call(fetchCollectionsStart), call(usersSagas)]);
}

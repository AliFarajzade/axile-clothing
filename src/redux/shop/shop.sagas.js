import { all, takeLatest, call, put } from 'redux-saga/effects';

import shopActionTypes from './shop.types';

import {
    firestore,
    convertCollectionsDataToMap,
} from '../../firebase/firebase.utilities';

import {
    fetchCollectionsSuccuss,
    fetchCollectionsFailure,
} from './shop.actions';

function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const transformedMap = yield call(
            convertCollectionsDataToMap,
            snapshot.docs
        );
        yield put(fetchCollectionsSuccuss(transformedMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error));
    }
}

function* fetchCollectionsStart() {
    yield takeLatest(
        shopActionTypes.FETCHING_DATA_START,
        fetchCollectionsAsync
    );
}

export default function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}

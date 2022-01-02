import { takeLatest, call, put } from 'redux-saga/effects';

import shopActionTypes from './shop.types';

import {
    firestore,
    convertCollectionsDataToMap,
} from '../../firebase/firebase.utilities';

import {
    fetchCollectionsSuccuss,
    fetchCollectionsFailure,
} from './shop.actions';

export function* fetchCollectionsAsync() {
    console.log('I Am Fired!!');
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        console.log(snapshot);
        const transformedMap = yield call(
            convertCollectionsDataToMap,
            snapshot.docs
        );
        yield put(fetchCollectionsSuccuss(transformedMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        shopActionTypes.FETCHING_DATA_START,
        fetchCollectionsAsync
    );
}

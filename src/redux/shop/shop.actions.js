import shopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCHING_DATA_START,
});

export const fetchCollectionsSuccuss = collectionMap => ({
    type: shopActionTypes.FETCHIGN_DATA_SUCCESS,
    payload: collectionMap,
});

export const fetchCollectionsFailure = erroeMessage => ({
    type: shopActionTypes.FETCHIGN_DATA_FAILURE,
    payload: erroeMessage,
});

// export const fetchCollectionsStartAsync = () => dispatchEvent => {
//     const collectionRef = firestore.collection('collections');
//     dispatchEvent(fetchCollectionsStart());
//
//     collectionRef
//         .get()
//         .then(snapshot => {
//             const tranformedMap = convertCollectionsDataToMap(snapshot.docs);
//             dispatchEvent(fetchCollectionsSuccuss(tranformedMap));
//         })
//         .catch(error => dispatchEvent(fetchCollectionsFailure(error.message)));
// };

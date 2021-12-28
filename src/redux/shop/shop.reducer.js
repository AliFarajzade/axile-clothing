import shopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: null,
};

const shopReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.FETCHING_DATA_START:
            return {
                ...currentState,
                isFetching: true,
            };

        case shopActionTypes.FETCHIGN_DATA_SUCCESS:
            return {
                ...currentState,
                collections: action.payload,
                isFetching: false,
            };

        case shopActionTypes.FETCHIGN_DATA_FAILURE:
            return {
                ...currentState,
                errorMessage: action.payload,
            };
        default:
            return currentState;
    }
};

export default shopReducer;

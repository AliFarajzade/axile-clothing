import shopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
};

const shopReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.UPDATE_DATA:
            return {
                ...currentState,
                collections: action.payload,
            };
        default:
            return currentState;
    }
};

export default shopReducer;

import { SHOP_DATA } from './shopData';
import shopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: SHOP_DATA,
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

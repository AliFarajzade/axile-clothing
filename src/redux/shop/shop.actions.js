import shopActionTypes from './shop.types';

export const updateCollection = tranformedCollection => ({
    type: shopActionTypes.UPDATE_DATA,
    payload: tranformedCollection,
});

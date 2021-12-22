import userActionTypes from './user.types';

export const setCurrentUser = userAuth => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: userAuth,
});

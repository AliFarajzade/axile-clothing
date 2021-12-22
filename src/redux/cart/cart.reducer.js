import cartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true,
};

const cartReducer = (currenState = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_DROPDOWN_VISIBLITY:
            return {
                ...currenState,
                hidden: !currenState.hidden,
            };

        default:
            return currenState;
    }
};

export default cartReducer;

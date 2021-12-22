import cartActionTypes from './cart.types';

import { addNewItemToCart } from './cart.utilities';

const INITIAL_STATE = {
    hidden: true,
    shoppingCartItems: [],
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_DROPDOWN_VISIBLITY:
            return {
                ...currentState,
                hidden: !currentState.hidden,
            };
        case cartActionTypes.ADD_ITEM:
            return {
                ...currentState,
                shoppingCartItems: addNewItemToCart(
                    currentState.shoppingCartItems,
                    action.payload
                ),
            };

        default:
            return currentState;
    }
};

export default cartReducer;

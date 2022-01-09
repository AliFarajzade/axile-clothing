import cartActionTypes from './cart.types';

import { addNewItemToCart, decreaseItemFromCart } from './cart.utilities';

const INITIAL_STATE = {
    hidden: true,
    shoppingCartItems: [],
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.HIDE_CART:
            return {
                ...currentState,
                hidden: true,
            };
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

        case cartActionTypes.REMOVE_ITEM:
            return {
                ...currentState,
                shoppingCartItems: currentState.shoppingCartItems.filter(
                    itemObj => itemObj.id !== action.payload.id
                ),
            };
        case cartActionTypes.DECREASE_ITEM:
            return {
                ...currentState,
                shoppingCartItems: decreaseItemFromCart(
                    currentState.shoppingCartItems,
                    action.payload
                ),
            };
        case cartActionTypes.CLEAR_CART:
            return {
                ...currentState,
                shoppingCartItems: [],
            };
        default:
            return currentState;
    }
};

export default cartReducer;

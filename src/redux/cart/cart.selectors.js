import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.shoppingCartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    shoppingCartItems =>
        shoppingCartItems.reduce((acc, itemObj) => acc + itemObj.quantity, 0)
);

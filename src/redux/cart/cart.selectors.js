import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.shoppingCartItems
);

export const selectVisibilityDropDown = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    shoppingCartItems =>
        shoppingCartItems.reduce((acc, itemObj) => acc + itemObj.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    shoppingCartItems =>
        shoppingCartItems.reduce(
            (acc, itemObj) => acc + itemObj.price * itemObj.quantity,
            0
        )
);

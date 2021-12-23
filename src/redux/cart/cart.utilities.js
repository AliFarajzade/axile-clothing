export const addNewItemToCart = (currentShoppingCart, newCartItem) => {
    const existingItem = currentShoppingCart.find(
        itemObj => itemObj.id === newCartItem.id
    );

    if (existingItem) {
        return currentShoppingCart.map(itemObj =>
            itemObj.id === newCartItem.id
                ? { ...itemObj, quantity: itemObj.quantity + 1 }
                : itemObj
        );
    } else {
        return [
            ...currentShoppingCart,
            {
                ...newCartItem,
                quantity: 1,
            },
        ];
    }
};

export const decreaseItemFromCart = (currentShoppingCart, itemToRemove) => {
    const existingItemToRemove = currentShoppingCart.find(
        itemObj => itemObj.id === itemToRemove.id
    );

    if (existingItemToRemove.quantity === 1) {
        return currentShoppingCart.filter(
            itemObj => itemObj.id !== existingItemToRemove.id
        );
    }

    return currentShoppingCart.map(itemObj =>
        itemObj.id === existingItemToRemove.id
            ? { ...itemObj, quantity: itemObj.quantity - 1 }
            : itemObj
    );
};

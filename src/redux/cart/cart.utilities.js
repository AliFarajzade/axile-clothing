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

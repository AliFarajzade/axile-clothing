import React from 'react';

function ShopCartItem({ imageUrl, name, quantity, price }) {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={`${name}`} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} &#9747; ${price}
                </span>
            </div>
        </div>
    );
}

export default ShopCartItem;

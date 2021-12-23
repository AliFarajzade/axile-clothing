import React from 'react';
import { connect } from 'react-redux';

function ShopCartItem({ imageUrl, name, quantity, price }) {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={`${name} Image`} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    );
}

export default ShopCartItem;

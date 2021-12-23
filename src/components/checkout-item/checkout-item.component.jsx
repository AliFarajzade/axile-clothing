import React from 'react';

function CheckoutItem({ imageUrl, name, price, quantity }) {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={`${name} Image`} />
            </div>

            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">${price}</span>
            <span className="remove-button">&#10006;</span>
        </div>
    );
}

export default CheckoutItem;

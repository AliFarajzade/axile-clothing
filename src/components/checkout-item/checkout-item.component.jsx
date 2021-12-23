import React from 'react';
import { connect } from 'react-redux';

import { decreaseItem, addItem } from '../../redux/cart/cart.actions';

function CheckoutItem({ removeItemFunction, item, decreaseItem, addItem }) {
    const { imageUrl, name, price, quantity } = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>

            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => decreaseItem(item)} className="arrow">
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div onClick={() => addItem(item)} className="arrow">
                    &#10095;
                </div>
            </span>
            <span className="price">${price}</span>
            <span
                onClick={() => removeItemFunction(item)}
                className="remove-button"
                title="Remove item from cart"
            >
                &#10006;
            </span>
        </div>
    );
}

const mapDispatchToProps = dispatchEvent => ({
    decreaseItem: item => dispatchEvent(decreaseItem(item)),
    addItem: item => dispatchEvent(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

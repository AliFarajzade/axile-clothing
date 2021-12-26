import React from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { removeItem } from '../../redux/cart/cart.actions';

import StripeButton from '../../components/stripe-button/stripe-button.component';

import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selectors';

function CheckoutPage({ selectCartItems, selectCartTotal, removeItem }) {
    console.log('CHECKOUT::::::::', selectCartItems, selectCartTotal);

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Products</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>

                <div className="header-block">{/* <span>Action</span> */}</div>
            </div>

            {selectCartItems.map(item => (
                <CheckoutItem
                    key={item.id}
                    removeItemFunction={removeItem}
                    item={item}
                />
            ))}

            <div className="total">
                <span>TOTAL: ${selectCartTotal}</span>
            </div>

            <div className="test-warning">
                *PLEASE USE THE FOLLOWING INFORMATION TO TEST THE CREDIT CARD
                FOT PAYMENT:
                <br />
                4242 4242 4242 4242 - CVV: 123
            </div>

            <StripeButton totalPRice={selectCartTotal} />
        </div>
    );
}

const mapStateToProps = state => ({
    selectCartItems: selectCartItems(state),
    selectCartTotal: selectCartTotal(state),
});

const mapDispatchToProps = dispatchEvent => ({
    removeItem: item => dispatchEvent(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);

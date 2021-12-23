import React from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selectors';

function CheckoutPage({ selectCartItems, selectCartTotal }) {
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

            {selectCartItems.map(
                ({ id, ...otherShoppingCartItemProperties }) => (
                    <CheckoutItem
                        key={id}
                        {...otherShoppingCartItemProperties}
                    />
                )
            )}

            <div className="total">
                <span>TOTAL: ${selectCartTotal}</span>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    selectCartItems: selectCartItems(state),
    selectCartTotal: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckoutPage);

import React from 'react';

import ShopCartItem from '../shop-cart-item/shop-cart-item.component';

import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

function CartDropDown({ shoppingCartItems }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {shoppingCartItems.map(
                    ({ id, ...otherShoppingCartItemsProperties }) => (
                        <ShopCartItem
                            key={id}
                            {...otherShoppingCartItemsProperties}
                        />
                    )
                )}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = state => ({
    shoppingCartItems: state.cart.shoppingCartItems,
});

export default connect(mapStateToProps)(CartDropDown);

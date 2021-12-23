import React from 'react';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ShopCartItem from '../shop-cart-item/shop-cart-item.component';

import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

function CartDropDown({ shoppingCartItems, toggleCartHidden }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {shoppingCartItems.length ? (
                    shoppingCartItems.map(
                        ({ id, ...otherShoppingCartItemsProperties }) => (
                            <ShopCartItem
                                key={id}
                                {...otherShoppingCartItemsProperties}
                            />
                        )
                    )
                ) : (
                    <span className="empty-cart-message">
                        Your Cart is Empty.
                    </span>
                )}
            </div>
            <Link to="/checkout">
                <CustomButton onClick={() => toggleCartHidden()}>
                    GO TO CHECKOUT
                </CustomButton>
            </Link>
        </div>
    );
}

const mapStateToProps = state => ({
    shoppingCartItems: selectCartItems(state),
});

const mapDispatchToProps = dispatchEvent => ({
    toggleCartHidden: () => dispatchEvent(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);

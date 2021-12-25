import React from 'react';

import { useNavigate } from 'react-router-dom';

import ShopCartItem from '../shop-cart-item/shop-cart-item.component';

import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

function CartDropDown({ shoppingCartItems, toggleCartHidden }) {
    const navigate = useNavigate();
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

            <CustomButton
                onClick={() => {
                    toggleCartHidden();
                    navigate('/checkout');
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
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

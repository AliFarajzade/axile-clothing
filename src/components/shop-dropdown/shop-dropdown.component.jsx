import React from 'react';

import { useNavigate } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import ShopCartItem from '../shop-cart-item/shop-cart-item.component';

import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

function CartDropDown() {
    const selectCartItemsData = useSelector(selectCartItems);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {selectCartItemsData.length ? (
                    selectCartItemsData.map(
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
                    dispatch(toggleCartHidden());
                    navigate('/checkout');
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
}

export default CartDropDown;

import React from 'react';

import { connect } from 'react-redux';

import { ReactComponent as ShoppingCartIcon } from '../../assets/Shopping Cart.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

function CartIcon({ toggleCartHidden, selectCartItemsCount }) {
    return (
        <div className="cart-icon" onClick={() => toggleCartHidden()}>
            <ShoppingCartIcon className="shopping-icon" />
            <span className="item-count">{selectCartItemsCount}</span>
        </div>
    );
}

const mapDispatchToProps = dispatchEvent => ({
    toggleCartHidden: () => dispatchEvent(toggleCartHidden()),
});

const mapStateToProps = state => {
    return { selectCartItemsCount: selectCartItemsCount(state) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

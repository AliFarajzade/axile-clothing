import React from 'react';

import { connect } from 'react-redux';

import { ReactComponent as ShoppingCartIcon } from '../../assets/Shopping Cart.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

function CartIcon({ toggleCartHidden }) {
    return (
        <div className="cart-icon" onClick={() => toggleCartHidden()}>
            <ShoppingCartIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
}

const mapDispatchToProps = dispatchEvent => ({
    toggleCartHidden: () => dispatchEvent(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);

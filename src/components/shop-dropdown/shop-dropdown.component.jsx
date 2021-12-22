import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

export default function CartDropDown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-item" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

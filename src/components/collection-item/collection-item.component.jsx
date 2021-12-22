import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

function CollectionItem({ item, addItem }) {
    const { name, imageUrl, price } = item;
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
                <CustomButton onClick={() => addItem(item)} inverted="inverted">
                    ADD TO CART
                </CustomButton>
            </div>
        </div>
    );
}

const mapStateToProps = dispatchEvent => ({
    addItem: item => dispatchEvent(addItem(item)),
});

export default connect(null, mapStateToProps)(CollectionItem);

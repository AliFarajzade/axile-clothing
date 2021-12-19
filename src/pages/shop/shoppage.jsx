import React, { Component } from 'react';
import { SHOP_DATA } from './shopData';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

export default class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        return (
            <div className="shop-page">
                {this.state.collections.map(
                    ({ id, ...otherShopDataProperties }) => (
                        <CollectionPreview
                            key={id}
                            {...otherShopDataProperties}
                        />
                    )
                )}
            </div>
        );
    }
}

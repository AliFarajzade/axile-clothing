import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

function ShopPage({ selectShopCollections }) {
    return (
        <div className="shop-page">
            {selectShopCollections.map(({ id, ...otherShopDataProperties }) => (
                <CollectionPreview key={id} {...otherShopDataProperties} />
            ))}
        </div>
    );
}

const mapStateToProps = state => ({
    selectShopCollections: selectShopCollections(state),
});

export default connect(mapStateToProps)(ShopPage);

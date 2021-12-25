import React from 'react';

import { selectShopCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';

function CollectionsOverview({ selectShopCollections }) {
    return (
        <div>
            {selectShopCollections.map(({ id, ...otherShopDataProperties }) => (
                <CollectionPreview key={id} {...otherShopDataProperties} />
            ))}
        </div>
    );
}

const mapStateToProps = state => ({
    selectShopCollections: selectShopCollections(state),
});

export default connect(mapStateToProps)(CollectionsOverview);

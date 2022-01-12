import React from 'react';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';

function CollectionsOverview({ selectCollectionsForPreview }) {
    return (
        <div>
            {selectCollectionsForPreview.map(
                ({ id, routeName, ...otherShopDataProperties }) => (
                    <CollectionPreview
                        key={id}
                        routeName={routeName}
                        {...otherShopDataProperties}
                    />
                )
            )}
        </div>
    );
}

const mapStateToProps = state => ({
    selectCollectionsForPreview: selectCollectionsForPreview(state),
});

export default connect(mapStateToProps)(CollectionsOverview);

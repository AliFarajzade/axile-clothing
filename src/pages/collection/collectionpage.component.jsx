import React from 'react';

import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';

import { selectShopCollections } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

function CollectionPage({ selectShopCollections }) {
    const { collectionid } = useParams();

    // const routeItem = selectShopCollections.find(
    //     itemObj => itemObj.routeName === collectionid
    // );

    const routeItem = selectShopCollections[collectionid];
    console.log(routeItem);
    if (routeItem) {
        return (
            <div className="collection-page">
                <h2 className="title">{routeItem.title}</h2>
                <div className="items">
                    {routeItem.items.map(itemObj => (
                        <CollectionItem key={itemObj.id} item={itemObj} />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectShopCollections: selectShopCollections(state),
});

export default connect(mapStateToProps)(CollectionPage);

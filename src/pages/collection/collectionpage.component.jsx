import React from 'react';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { selectShopCollectionByRouteName } from '../../redux/shop/shop.selectors';

import NotFound from '../not-found/not-found.page';

import CollectionItem from '../../components/collection-item/collection-item.component';

function CollectionPage() {
    const { collectionid } = useParams();

    const selectShopCollectionByRouteNameData = useSelector(
        selectShopCollectionByRouteName(collectionid)
    );

    if (selectShopCollectionByRouteNameData) {
        return (
            <div className="collection-page">
                <h2 className="title">
                    {selectShopCollectionByRouteNameData.title}
                </h2>
                <div className="items">
                    {selectShopCollectionByRouteNameData.items.map(itemObj => (
                        <CollectionItem key={itemObj.id} item={itemObj} />
                    ))}
                </div>
            </div>
        );
    }

    return <NotFound />;
}

export default CollectionPage;

import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { connect } from 'react-redux';

import CollcetionPageContainer from '../collection/collectionpage.container';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

const ShopPage = ({ fetchCollectionsStart }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Routes>
                <Route path="/" element={<CollectionOverviewContainer />} />
                <Route
                    path="/:collectionid"
                    element={<CollcetionPageContainer />}
                />
            </Routes>
        </div>
    );
};

const mapDispatchToProps = dispatchEvent => ({
    fetchCollectionsStart: () => dispatchEvent(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collectionpage.component';

function ShopPage() {
    // console.log(useParams());
    return (
        <div className="shop-page">
            <Routes>
                <Route path="/" element={<CollectionsOverview />} />
                <Route path="/:collectionid" element={<CollectionPage />} />
            </Routes>
        </div>
    );
}

export default ShopPage;

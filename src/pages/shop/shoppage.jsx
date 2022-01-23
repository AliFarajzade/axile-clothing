import React, { useEffect, lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { connect } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';

const CollcetionPageContainer = lazy(() =>
    import('../collection/collectionpage.container')
);
const CollectionOverviewContainer = lazy(() =>
    import('../../components/collection-overview/collection-overview.container')
);

const ShopPage = ({ fetchCollectionsStart }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Spinner />}>
                            <CollectionOverviewContainer />
                        </Suspense>
                    }
                />
                <Route
                    path="/:collectionid"
                    element={
                        <Suspense fallback={<Spinner />}>
                            <CollcetionPageContainer />
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    );
};

const mapDispatchToProps = dispatchEvent => ({
    fetchCollectionsStart: () => dispatchEvent(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollcetionPageContainer from '../collection/collectionpage.container';

import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;

        fetchCollectionsStartAsync();
    }

    render() {
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
    }
}

const mapDispatchToProps = dispatchEvent => ({
    fetchCollectionsStartAsync: () =>
        dispatchEvent(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

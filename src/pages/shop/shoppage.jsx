import React from 'react';

import { Route, Routes } from 'react-router-dom';

// import { fetchCollectionsStart } from '../../redux/shop/shop.sagas';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollcetionPageContainer from '../collection/collectionpage.container';

import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;

        fetchCollectionsStart();
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
    fetchCollectionsStart: () => dispatchEvent(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

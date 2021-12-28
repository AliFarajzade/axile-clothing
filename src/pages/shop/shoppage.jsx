import React from 'react';

import { Route, Routes } from 'react-router-dom';

// import {
//     firestore,
//     convertCollectionsDataToMap,
// } from '../../firebase/firebase.utilities';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {
    selectCollectionFetchingStatus,
    selectCollectionLoadingStatus,
} from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collectionpage.component';

import { connect } from 'react-redux';

import withSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
    // #unsubscribeFromFirestore;

    async componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;

        fetchCollectionsStartAsync();

        // this.#unsubscribeFromFirestore = collectionRef.onSnapshot(snapshot => {
        //     const tranformedMap = convertCollectionsDataToMap(snapshot.docs);
        //     updateCollection(tranformedMap);
        //     this.setState(prevState => (prevState.loading = false));
        // });
    }

    componentWillUnmount() {
        // this.#unsubscribeFromFirestore();
    }

    render() {
        const {
            selectCollectionFetchingStatus,
            selectCollectionLoadingStatus,
        } = this.props;

        return (
            <div className="shop-page">
                <Routes>
                    <Route
                        path="/"
                        element={
                            // Method 1
                            selectCollectionFetchingStatus ? (
                                <CollectionsOverviewWithSpinner
                                    isLoading={selectCollectionFetchingStatus}
                                />
                            ) : (
                                <CollectionsOverview />
                            )
                        }
                    />
                    <Route
                        path="/:collectionid"
                        element={
                            // Method 2
                            !selectCollectionLoadingStatus ? (
                                withSpinner(CollectionPage)({
                                    isLoading: !selectCollectionLoadingStatus,
                                })
                            ) : (
                                <CollectionPage />
                            )
                        }
                    />
                </Routes>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectCollectionFetchingStatus: selectCollectionFetchingStatus(state),
    selectCollectionLoadingStatus: selectCollectionLoadingStatus(state),
});

const mapDispatchToProps = dispatchEvent => ({
    fetchCollectionsStartAsync: () =>
        dispatchEvent(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

import React from 'react';

import { Route, Routes } from 'react-router-dom';

import {
    firestore,
    convertCollectionsDataToMap,
} from '../../firebase/firebase.utilities';

import { updateCollection } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collectionpage.component';

import { connect } from 'react-redux';

import withSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
    #unsubscribeFromFirestore;

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        const { updateCollection } = this.props;

        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(snapshot => {
            const tranformedMap = convertCollectionsDataToMap(snapshot.docs);
            updateCollection(tranformedMap);
            this.setState(prevState => (prevState.loading = false));
        });
    }

    render() {
        const { loading } = this.state;

        return (
            <div className="shop-page">
                <Routes>
                    <Route
                        path="/"
                        element={
                            // Method 1
                            loading ? (
                                <CollectionsOverviewWithSpinner
                                    isLoading={loading}
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
                            loading ? (
                                withSpinner(CollectionPage)({
                                    isLoading: loading,
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

const mapDispatchToProps = dispatchEvent => ({
    updateCollection: tranformedCollection =>
        dispatchEvent(updateCollection(tranformedCollection)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

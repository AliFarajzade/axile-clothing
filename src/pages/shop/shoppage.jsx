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

class ShopPage extends React.Component {
    #unsubscribeFromFirestore;

    componentDidMount() {
        const { updateCollection } = this.props;

        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(snapshot => {
            const tranformedMap = convertCollectionsDataToMap(snapshot.docs);
            updateCollection(tranformedMap);
        });
    }

    render() {
        return (
            <div className="shop-page">
                <Routes>
                    <Route path="/" element={<CollectionsOverview />} />
                    <Route path="/:collectionid" element={<CollectionPage />} />
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

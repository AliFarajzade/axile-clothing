import React from 'react';

import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

let collectionUrlParam;

function CollectionPage({ selectShopCollection }) {
    const { collectionid } = useParams();
    collectionUrlParam = collectionid;
    return <div className="category">Category Page</div>;
}

const mapStateToProps = state => ({
    selectShopCollection: selectShopCollection(collectionUrlParam)(state),
});

export default connect(mapStateToProps)(CollectionPage);

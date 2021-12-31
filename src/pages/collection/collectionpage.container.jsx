import withSpinner from '../../components/with-spinner/with-spinner.component';

import { connect } from 'react-redux';

import { selectCollectionLoadingStatus } from '../../redux/shop/shop.selectors';

import CollectionPage from './collectionpage.component';

import { compose } from 'redux';

const mapStateToProps = state => ({
    isLoading: !selectCollectionLoadingStatus(state),
});

const CollcetionPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionPage);

export default CollcetionPageContainer;

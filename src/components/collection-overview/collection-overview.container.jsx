import withSpinner from '../../components/with-spinner/with-spinner.component';

import { connect } from 'react-redux';

import { compose } from 'redux';

import { selectCollectionFetchingStatus } from '../../redux/shop/shop.selectors';

import CollectionsOverview from './collection-overview.component';

const mapStateToProps = state => ({
    isLoading: selectCollectionFetchingStatus(state),
});

const CollectionOverviewContainer = connect(mapStateToProps)(
    withSpinner(CollectionsOverview)
);
// const CollectionOverviewContainer = compose(
//     connect(mapStateToProps),
//     withSpinner
// )(CollectionsOverview);

export default CollectionOverviewContainer;

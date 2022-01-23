import React from 'react';

import Spinner from '../spinner/spinner.component';

const withSpinner =
    WrappedComponent =>
    ({ isLoading }) => {
        return isLoading ? <Spinner /> : <WrappedComponent />;
    };

export default withSpinner;

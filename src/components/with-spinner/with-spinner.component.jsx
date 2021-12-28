import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const withSpinner =
    WrappedComponent =>
    ({ isLoading }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent />
        );
    };

export default withSpinner;

import React, { Component } from 'react';

import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText,
} from './error-boundry.styles';

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        // Updating the state
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log('error:', error);
        console.log('info:', info);
    }

    render() {
        if (this.state.hasError)
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="../../assets/Error.png" />
                    <ErrorImageText>Something Went Wrong.</ErrorImageText>
                </ErrorImageOverlay>
            );
        return this.props.children;
    }
}

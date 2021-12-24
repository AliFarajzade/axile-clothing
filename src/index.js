import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import store from './redux/store';
import { persistor } from './redux/store';

import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

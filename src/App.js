import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { checkUserSession } from './redux/users/users.actions';

import HomePage from './pages/home/hompage';
import ShopPage from './pages/shop/shoppage';
import SignInUp from './pages/sign-in-up/sign-in-up';
import CheckoutPage from './pages/checkout/checkoutpage';

import Header from './components/header/header.component';

import './App.scss';

import NotFound from './pages/not-found/not-found.page';

const App = ({ checkUserSession }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop/*" element={<ShopPage />} />
                <Route path="/sign" element={<SignInUp />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

const mapDispatchToProps = dispatchEvent => ({
    checkUserSession: () => dispatchEvent(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(App);

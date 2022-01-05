import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { connect } from 'react-redux';

// import { auth, createUserProfileDocument } from './firebase/firebase.utilities';

import { checkUserSession } from './redux/users/users.actions';

import HomePage from './pages/home/hompage';
import ShopPage from './pages/shop/shoppage';
import SignInUp from './pages/sign-in-up/sign-in-up';
import CheckoutPage from './pages/checkout/checkoutpage';

import Header from './components/header/header.component';

import './App.scss';

class App extends React.Component {
    componentDidMount() {
        const { checkUserSession } = this.props;

        checkUserSession();
    }

    render() {
        return (
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop/*" element={<ShopPage />} />
                    <Route path="/sign" element={<SignInUp />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
            </>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.users.currentUser,
});

const mapDispatchToProps = dispatchEvent => ({
    checkUserSession: () => dispatchEvent(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

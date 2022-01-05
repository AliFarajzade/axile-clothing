import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { connect } from 'react-redux';

// import { auth, createUserProfileDocument } from './firebase/firebase.utilities';

import HomePage from './pages/home/hompage';
import ShopPage from './pages/shop/shoppage';
import SignInUp from './pages/sign-in-up/sign-in-up';
import CheckoutPage from './pages/checkout/checkoutpage';

import Header from './components/header/header.component';

import './App.scss';

import { setCurrentUser } from './redux/users/users.actions';

class App extends React.Component {
    #googleUnsubscribeConnection;

    /* async */ componentDidMount() {
        const {
            setCurrentUser,
            googleSignInStart /* selectCollectionsForPreview */,
        } = this.props;

        // this.#googleUnsubscribeConnection = auth.onAuthStateChanged(
        //     async userAuth => {
        //         if (userAuth) {
        //             setCurrentUser(userAuth);
        //             const userRef = await createUserProfileDocument(userAuth);

        //             userRef.onSnapshot(snapshot => {
        //                 const { id } = snapshot;
        //                 const { displayName, email, createdAt } =
        //                     snapshot.data();

        //                 setCurrentUser({
        //                     id,
        //                     displayName,
        //                     email,
        //                     createdAt,
        //                 });
        //             });
        //         } else setCurrentUser(null);
        //     }
        // );
    }

    componentWillUnmount() {
        this.#googleUnsubscribeConnection();
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

const mapDispatchToProps = dispatchEvent => ({
    setCurrentUser: userAuth => dispatchEvent(setCurrentUser(userAuth)),
});

const mapStateToProps = state => ({
    currentUser: state.users.currentUser,
    // selectCollectionsForPreview: selectCollectionsForPreview(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

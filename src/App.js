import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { connect } from 'react-redux';

import {
    auth,
    createUserProfileDocument,
    // createCollectionsAndAddDocuments,
} from './firebase/firebase.utilities';

import HomePage from './pages/home/hompage';
import ShopPage from './pages/shop/shoppage';
import SignInUp from './pages/sign-in-up/sign-in-up';
import CheckoutPage from './pages/checkout/checkoutpage';

import Header from './components/header/header.component';

import './App.scss';

import { setCurrentUser } from './redux/users/users.action';
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends React.Component {
    #googleUnsubscribeConnection;

    /* async */ componentDidMount() {
        console.log(
            '--------------------Component Did Mount--------------------'
        );
        const { setCurrentUser /* selectCollectionsForPreview */ } = this.props;

        this.#googleUnsubscribeConnection = auth.onAuthStateChanged(
            async userAuth => {
                if (userAuth) {
                    setCurrentUser(userAuth);
                    const userRef = await createUserProfileDocument(userAuth);

                    userRef.onSnapshot(snapshot => {
                        const { displayName, email, createdAt } =
                            snapshot.data();
                        const { id } = snapshot;

                        setCurrentUser({
                            id,
                            displayName,
                            email,
                            createdAt,
                        });
                    });
                } else setCurrentUser(null);
            }
        );

        // const dataSetResponse = await createCollectionsAndAddDocuments(
        //     'collections',
        //     selectCollectionsForPreview.map(({ items, title }) => ({
        //         items,
        //         title,
        //     }))
        // );
    }

    componentWillUnmount() {
        this.#googleUnsubscribeConnection();
    }

    render() {
        const { currentUser } = this.props;
        return (
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop/*" element={<ShopPage />} />
                    <Route
                        path="/sign"
                        element={
                            currentUser ? (
                                <Navigate replace to="/" />
                            ) : (
                                <SignInUp />
                            )
                        }
                    />
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

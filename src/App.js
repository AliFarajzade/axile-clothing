import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utilities';

import HomePage from './pages/home/hompage';
import ShopPage from './pages/shop/shoppage';
import SignInUp from './pages/sign-in-up/sign-in-up';

import Header from './components/header/header.component';

import './App.scss';

import { setCurrentUser } from './redux/users/users.action';

class App extends React.Component {
    #googleUnsubscribeConnection;

    componentDidMount() {
        const { setCurrentUser } = this.props;

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
    }

    componentWillUnmount() {
        this.#googleUnsubscribeConnection();
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/sign" element={<SignInUp />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = dispatchEvent => ({
    setCurrentUser: userAuth => dispatchEvent(setCurrentUser(userAuth)),
});

const mapStateToProps = state => ({
    currentUser: state.users.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

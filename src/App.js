import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utilities';

import HomePage from './pages/home/hompage';
import ShopPage from './pages/shop/shoppage';
import SignInUp from './pages/sign-in-up/sign-in-up';

import Header from './components/header/header.component';

import './App.scss';

class App extends React.Component {
    #googleUnsubscribeConnection;

    constructor() {
        super();

        this.state = {
            currentUser: 'loading',
        };
    }

    componentDidMount() {
        this.#googleUnsubscribeConnection = auth.onAuthStateChanged(
            async userAuth => {
                if (userAuth) {
                    this.setState({ currentUser: 'loading' });
                    const userRef = await createUserProfileDocument(userAuth);

                    userRef.onSnapshot(snapshot => {
                        const { displayName, email, createdAt } =
                            snapshot.data();
                        const { id } = snapshot;

                        this.setState(
                            {
                                currentUser: {
                                    id,
                                    displayName,
                                    email,
                                    createdAt,
                                },
                            },
                            () => console.log('-----STATE', this.state)
                        );
                    });
                } else this.setState({ currentUser: userAuth });
            }
        );
    }

    componentWillUnmount() {
        this.#googleUnsubscribeConnection();
    }

    render() {
        return (
            <BrowserRouter>
                <Header currentUser={this.state.currentUser} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/sign" element={<SignInUp />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;

import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { checkUserSession } from './redux/users/users.actions';

import Header from './components/header/header.component';

import Spinner from './components/spinner/spinner.component';

import ErrorBoundry from './components/error-boundry/error-boundry.component';

import './App.scss';

import NotFound from './pages/not-found/not-found.page';

const HomePage = lazy(() => import('./pages/home/hompage'));
const ShopPage = lazy(() => import('./pages/shop/shoppage'));
const SignInUp = lazy(() => import('./pages/sign-in-up/sign-in-up'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkoutpage'));

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <>
            <Header />
            <ErrorBoundry>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<Spinner />}>
                                <HomePage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/shop/*"
                        element={
                            <Suspense fallback={<Spinner />}>
                                <ShopPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/sign"
                        element={
                            <Suspense fallback={<Spinner />}>
                                <SignInUp />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/checkout"
                        element={
                            <Suspense fallback={<Spinner />}>
                                <CheckoutPage />
                            </Suspense>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ErrorBoundry>
        </>
    );
};

export default App;

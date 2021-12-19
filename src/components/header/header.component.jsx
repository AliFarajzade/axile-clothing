import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { auth } from '../../firebase/firebase.utilities';
import Loader from '../loader/loader.component';

export default function Header({ currentUser, signOut }) {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>

                {currentUser ? (
                    currentUser === 'loading' ? (
                        <Loader />
                    ) : (
                        <div onClick={() => auth.signOut()} className="option">
                            SIGN OUT
                        </div>
                    )
                ) : (
                    <Link className="option" to="/sign">
                        SIGN IN
                    </Link>
                )}
            </div>
        </div>
    );
}

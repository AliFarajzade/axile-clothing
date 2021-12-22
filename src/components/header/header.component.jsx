import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { auth } from '../../firebase/firebase.utilities';

import CartDropDown from '../shop-dropdown/shop-dropdown.component';
import CartIcon from '../shop-icon/shop-icon.component';
// import Loader from '../loader/loader.component';

function Header({ currentUser, hidden }) {
    console.log(hidden);
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
                    <div onClick={() => auth.signOut()} className="option">
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/sign">
                        SIGN IN
                    </Link>
                )}
                <CartIcon />
            </div>
            {hidden ? null : <CartDropDown />}
        </div>
    );
}

const mapStateToProps = state => ({
    currentUser: state.users.currentUser,
    hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);

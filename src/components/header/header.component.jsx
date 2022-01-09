import React from 'react';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/Logo.svg';

import { selectVisibilityDropDown } from '../../redux/cart/cart.selectors';
import {
    selectCurrentUser,
    selectUserLoadingStatus,
} from '../../redux/users/users.selectors';

import { signOutStart } from '../../redux/users/users.actions';

import CartDropDown from '../shop-dropdown/shop-dropdown.component';
import CartIcon from '../shop-icon/shop-icon.component';

import Loader from '../loader/loader.component';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionDiv,
    OptionLink,
} from './header.styles';

function Header({
    selectCurrentUser,
    selectVisibilityDropDown,
    selectUserLoadingStatus,
    signOutStart,
}) {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>

                {
                    selectCurrentUser ? (
                        <OptionDiv onClick={() => signOutStart()}>
                            SIGN OUT
                        </OptionDiv>
                    ) : selectUserLoadingStatus ? (
                        <Loader />
                    ) : (
                        <OptionLink to="/sign">SIGN IN</OptionLink>
                    )

                    // selectCurrentUser ? (
                    //     <OptionDiv onClick={() => auth.signOut()}>
                    //         SIGN OUT
                    //     </OptionDiv>
                    // ) : (
                    //     <OptionLink to="/sign">SIGN IN</OptionLink>
                    // )
                }
                <CartIcon />
            </OptionsContainer>
            {selectVisibilityDropDown ? null : <CartDropDown />}
        </HeaderContainer>
    );
}

const mapStateToProps = state => ({
    selectCurrentUser: selectCurrentUser(state),
    selectVisibilityDropDown: selectVisibilityDropDown(state),
    selectUserLoadingStatus: selectUserLoadingStatus(state),
});

const mapDispatchToProps = dispatchEvent => ({
    signOutStart: () => dispatchEvent(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

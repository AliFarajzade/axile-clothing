import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

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

function Header() {
    const selectVisibilityDropDownData = useSelector(selectVisibilityDropDown);
    const selectCurrentUserData = useSelector(selectCurrentUser);
    const selectUserLoadingStatusData = useSelector(selectUserLoadingStatus);

    const dispatch = useDispatch();

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>

                {selectCurrentUserData ? (
                    <OptionDiv onClick={() => dispatch(signOutStart())}>
                        SIGN OUT
                    </OptionDiv>
                ) : selectUserLoadingStatusData ? (
                    <Loader />
                ) : (
                    <OptionLink to="/sign">SIGN IN</OptionLink>
                )}
                <CartIcon />
            </OptionsContainer>
            {selectVisibilityDropDownData ? null : <CartDropDown />}
        </HeaderContainer>
    );
}

export default React.memo(Header);

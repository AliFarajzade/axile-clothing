import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { selectCurrentUser } from '../../redux/users/users.selectors';

function SignInUp({ selectCurrentUser }) {
    return selectCurrentUser ? (
        <Navigate replace to="/" />
    ) : (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
}

const mapStateToProps = state => ({
    selectCurrentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(SignInUp);

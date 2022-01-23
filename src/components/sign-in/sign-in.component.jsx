import React, { useState } from 'react';

import FormGroup from '../form-group/form-group.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    googleSignInStart,
    emailSignInStart,
} from '../../redux/users/users.actions';

import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const { email, password } = userCredentials;

    const handleSubmit = eventParam => {
        eventParam.preventDefault();

        if (email && password) {
            emailSignInStart(email, password);
        }
    };

    const handleChange = eventParam => {
        const { name, value } = eventParam.target;

        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormGroup
                    handleChange={handleChange}
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    required
                />

                <FormGroup
                    handleChange={handleChange}
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    required
                />

                <CustomButton type="submit">SIGN IN</CustomButton>
                <CustomButton
                    backgroundColor="red"
                    type="button"
                    onClick={() => {
                        try {
                            googleSignInStart();
                        } catch (error) {
                            console.error(
                                'Error while signing in with google or email.',
                                error.message
                            );
                        }
                    }}
                >
                    SIGN IN WITH GOOGLE
                </CustomButton>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatchEvent => ({
    googleSignInStart: () => dispatchEvent(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatchEvent(emailSignInStart(email, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);

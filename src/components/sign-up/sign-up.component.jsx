import React, { useState } from 'react';
import FormGroup from '../form-group/form-group.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/users/users.actions';

import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {
    const [signUpInfo, setSignUpInfo] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { displayName, email, password, confirmPassword } = signUpInfo;

    const handleChange = eventParam =>
        setSignUpInfo({
            ...signUpInfo,
            [eventParam.target.name]: eventParam.target.value,
        });

    const handleSubmit = eventParam => {
        eventParam.preventDefault();

        let { email } = signUpInfo;
        email = email.toLocaleLowerCase();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            setSignUpInfo({
                ...signUpInfo,
                password: '',
                confirmPassword: '',
            });
            return;
        }

        signUpStart(displayName, email, password);
    };

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account.</h2>
            <span>Sign up with your email & password</span>
            <form onSubmit={handleSubmit} className="sing-up-form">
                <FormGroup
                    handleChange={handleChange}
                    name="displayName"
                    label="Name"
                    type="text"
                    value={displayName}
                    required
                />
                <FormGroup
                    handleChange={handleChange}
                    name="email"
                    label="Email"
                    type="email"
                    value={email}
                    required
                />
                <FormGroup
                    handleChange={handleChange}
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    required
                />
                <FormGroup
                    handleChange={handleChange}
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    required
                />
                <CustomButton onClick={handleSubmit} type="submit">
                    Sign Up
                </CustomButton>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatchEvent => ({
    signUpStart: (displayName, email, password) =>
        dispatchEvent(signUpStart(displayName, email, password)),
});

export default connect(null, mapDispatchToProps)(SignUp);

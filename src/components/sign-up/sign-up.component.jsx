import React, { Component } from 'react';
import FormGroup from '../form-group/form-group.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    auth,
    createUserProfileDocument,
} from '../../firebase/firebase.utilities';

export default class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleChange = eventParam =>
        this.setState({ [eventParam.target.name]: eventParam.target.value });

    handleSubmit = async eventParam => {
        eventParam.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user: userAuth } =
                await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(userAuth, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.error(
                'Error while Signing up with email & password',
                error.message
            );
        }
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account.</h2>
                <span>Sign up with your email & password</span>
                <form onSubmit={this.handleSubmit} className="sing-up-form">
                    <FormGroup
                        handleChange={this.handleChange}
                        name="displayName"
                        label="Name"
                        type="text"
                        value={displayName}
                        required
                    />
                    <FormGroup
                        handleChange={this.handleChange}
                        name="email"
                        label="Email"
                        type="email"
                        value={email}
                        required
                    />
                    <FormGroup
                        handleChange={this.handleChange}
                        name="password"
                        label="Password"
                        type="password"
                        value={password}
                        required
                    />
                    <FormGroup
                        handleChange={this.handleChange}
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        required
                    />
                    <CustomButton onClick={this.handleSubmit} type="submit">
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        );
    }
}

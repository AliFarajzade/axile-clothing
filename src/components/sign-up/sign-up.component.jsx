import React, { Component } from 'react';
import FormGroup from '../form-group/form-group.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/users/users.actions';

import { connect } from 'react-redux';
class SignUp extends Component {
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

    handleSubmit = eventParam => {
        eventParam.preventDefault();

        const { signUpStart } = this.props;

        const { displayName, password, confirmPassword } = this.state;
        let { email } = this.state;
        email = email.toLocaleLowerCase();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            this.setState({
                password: '',
                confirmPassword: '',
            });
            return;
        }

        signUpStart(displayName, email, password);

        // try {
        //     const { user: userAuth } =
        //         await auth.createUserWithEmailAndPassword(email, password);

        //     createUserProfileDocument(userAuth, { displayName });

        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: '',
        //     });
        // } catch (error) {
        //     console.error(
        //         'Error while Signing up with email & password',
        //         error.message
        //     );
        // }
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

const mapDispatchToProps = dispatchEvent => ({
    signUpStart: (displayName, email, password) =>
        dispatchEvent(signUpStart(displayName, email, password)),
});

export default connect(null, mapDispatchToProps)(SignUp);

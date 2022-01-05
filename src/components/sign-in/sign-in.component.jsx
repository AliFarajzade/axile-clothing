import React, { Component } from 'react';

import FormGroup from '../form-group/form-group.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    googleSignInStart,
    emailSignInStart,
} from '../../redux/users/users.actions';

import { connect } from 'react-redux';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = async eventParam => {
        eventParam.preventDefault();

        const { email, password } = this.state;
        const { emailSignInStart } = this.props;

        if (email && password) {
            emailSignInStart(email, password);
        }
    };

    handleChange = eventParam => {
        const { name, value } = eventParam.target;

        this.setState({ [name]: value });
    };

    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormGroup
                        handleChange={this.handleChange}
                        label="Email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                    />

                    <FormGroup
                        handleChange={this.handleChange}
                        label="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                    />

                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton
                        backgroundColor="dodgerblue"
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
    }
}

const mapDispatchToProps = dispatchEvent => ({
    googleSignInStart: () => dispatchEvent(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatchEvent(emailSignInStart(email, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);

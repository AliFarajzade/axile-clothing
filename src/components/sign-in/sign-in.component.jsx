import React, { Component } from 'react';
import FormGroup from '../form-group/form-group.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utilities';

export default class SignIn extends Component {
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
        if (email && password) {
            try {
                await auth.signInWithEmailAndPassword(email, password);
                this.setState({ email: '', password: '' });
            } catch (error) {
                console.error(
                    'Error while signing in with email.',
                    error.message
                );
            }
        }
    };

    handleChange = eventParam => {
        const { name, value } = eventParam.target;

        this.setState({ [name]: value });
    };

    render() {
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
                                signInWithGoogle();
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

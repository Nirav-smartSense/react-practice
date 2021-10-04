import React, { } from 'react';
import { useHistory, Link } from "react-router-dom";
import { LoginMain } from './login.style';
import LinkedInLogo from './../../../../assets/images/linkedin-social.svg';
import GoogleLogo from './../../../../assets/images/google-social.svg';
import hidePasswordLogo from './../../../../assets/images/hide-password.png';

const LoginComponent = props => {

    const history = useHistory();

    // function signupUrl(){
    //     debugger
    //     history.push('/signup');
    // }

    return (
        <LoginMain>
            <div className="login-container">
                <div className="login-container__image">
                    <div className="login-container__image--img"></div>
                </div>

                <div className="login-container__form">
                    <div className="login-container__form--already-acc">
                        <p>
                            Don't have an account? <Link to="/singup">Sign Up</Link>
                        </p>
                    </div>
                    <h2>Sign In to hrSense</h2>

                    <form>
                        <div className="form-container">
                            <label>
                                Work Email
                            </label>
                            <input type="text" />
                        </div>
                        <div className="form-container">
                            <label>
                                Password
                            </label>
                            <input type="text" className="PR-40" />

                            <a><img src={hidePasswordLogo} alt="" /></a>
                        </div>

                        <p>
                            By creating your account, you agree to the <a>Terms of Service </a> and Conditions, and <a>Privacy Policy</a>.
                        </p>

                        <button
                            onClick={() => history.push('/signup')}
                            className="btn btn-primary MB-20" type="button">
                            Next
                        </button>

                        <div className="forgotPass-link">
                            <a>Forgot password?</a>
                        </div>
                        <button
                            className="btn btn-rounded MB-15" type="button">
                            <img src={LinkedInLogo} alt="" />
                            Sign in with LinkedIn
                        </button>
                        <button className="btn btn-rounded" type="button">
                            <img src={GoogleLogo} alt="" />
                            Sign in with Google
                        </button>
                    </form>
                </div>
            </div>
        </LoginMain>
    )
}

export default LoginComponent;
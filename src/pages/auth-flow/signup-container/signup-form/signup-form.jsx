import React, { } from "react";
import { SignupMain } from "./signup.styles";
import LinkedInLogo from './../../../../assets/images/linkedin-social.svg';
import GoogleLogo from './../../../../assets/images/google-social.svg';

const SignupContainer = props => {

    return (
        <SignupMain>
            <div className="singup-container">
                <div className="singup-container__image">
                    <div className="singup-container__image--img"></div>
                </div>

                <div className="singup-container__form">
                    <div className="singup-container__form--already-acc">
                        <p>
                            Already have an account? Sign in
                        </p>
                    </div>
                    <h2>Create Account</h2>

                    <form>
                        <div className="form-container">
                            <label>
                                Name<span>*</span>
                            </label>
                            <input type="text" />
                        </div>
                        <div className="form-container">
                            <label>
                                Work Email<span>*</span>
                            </label>
                            <input type="text" />
                        </div>
                        <div className="form-container">
                            <label>
                                Password<span>*</span>
                            </label>
                            <input type="text" />
                        </div>

                        <p>
                            By creating your account, you agree to the <a>Terms of Service </a> and Conditions, and <a>Privacy Policy</a>.
                        </p>

                        <button
                            onClick={this.verifyNavigate}
                        className="btn btn-primary MB-40" type="button">
                            Create Account
                        </button>
                        <button className="btn btn-rounded MB-15" type="button">
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

        </SignupMain>
    );
}

export default SignupContainer;

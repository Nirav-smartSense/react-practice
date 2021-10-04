import React, { } from 'react';
import { ForgotPassContainer } from './forgot-pass.style';

const ForgotPassComponent = () => {
    return (
        <ForgotPassContainer>
            <div className="forgotpass-container">
                <div className="forgotpass-container__image">
                    <div className="forgotpass-container__image--img"></div>
                </div>

                <div className="forgotpass-container__form">
                    <h2>Forgot your password?</h2>

                    <p>
                    Enter your email address  we'll send you a OTP to <br /> reset your password.
                    </p>
                    <form>
                        <div className="form-container">
                            <label>
                                Email Address
                            </label>
                            <input type="text" />
                        </div>

                        <button
                            onClick={this.signupNavigate}
                            className="btn btn-primary MB-40" type="button">
                            Get Verification Code
                        </button>
                    </form>
                </div>
            </div>
        </ForgotPassContainer>
    );
}

export default ForgotPassComponent;
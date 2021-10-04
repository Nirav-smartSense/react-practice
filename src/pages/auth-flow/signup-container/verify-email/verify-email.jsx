import React, { Component } from 'react';
import { VerifyEmailContainer } from './verify-email.style';

const VerifyEmailComponent = () => {
    return (
        <VerifyEmailContainer>
            <div className="verifyemail-container">
                    <div className="verifyemail-container__image">
                        <div className="verifyemail-container__image--img"></div>
                    </div>

                    <div className="verifyemail-container__form">
                        <h2>Verify your Email Address</h2>

                        <p>
                            We just sent you a verification code in
                            <span>ghanshyam.chauhan@smartsensesolutions.com</span>
                        </p>
                        <form>
                            <div className="form-container">
                                <label>
                                    Verification Code
                                </label>
                                <input type="text" />
                            </div>

                            <button
                                onClick={this.signupNavigate}
                                className="btn btn-primary MB-40" type="button">
                                Verify Code
                            </button>
                            <p>
                                If you don't receive code. Resend in <span>00:60</span>
                            </p>
                        </form>
                    </div>
                </div>
        </VerifyEmailContainer>
    );
}
 
export default VerifyEmailComponent;
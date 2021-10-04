import React, {  } from 'react';
import { WelcomeContainer } from './welcome-screen.style';

const WelcomeComponent = () => {
    return (
        <WelcomeContainer>
            <div className="welcome-container">
                <div className="welcome-container__image">
                    <div className="welcome-container__image--img"></div>
                </div>

                <div className="welcome-container__form">
                    <h2>Welcome to hrSense</h2>

                    <div className="welcome-container__form__profile-dv">
                        <div className="welcome-container__form__profile-dv--img-dv">
                            AD
                        </div>

                        <div className="welcome-container__form__profile-dv--description">
                            <h2>Adarsh Dave</h2>
                            <p>adarsh.dave@smartsensesolutions.com</p>
                        </div>
                    </div>
                    <form>
                        <div className="form-container">
                            <label>
                                Company Name
                            </label>
                            <input type="text" value="smartSense Consulting solutions" />
                        </div>

                        <p>
                            By creating your account, you agree to the <a>Terms of Service </a> and <a> Conditions</a>, and <a>Privacy Policy</a>.
                        </p>

                        <button
                            className="btn btn-primary MB-40" type="button">
                            Create Enterprise
                        </button>
                    </form>
                </div>
            </div>
        </WelcomeContainer>
    );
}

export default WelcomeComponent;
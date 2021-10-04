import styled from "styled-components";
import BgImg from "./../../../assets/images/verify_email.png";

export const WelcomeContainer = styled.div`
    .welcome-container {
        display: flex;
        height:100vh;
        flex-direction: row;

        &__image {
            width: 50%;
            position: relative;

            &--img{
                background-image: url('${BgImg}');
                background-size: cover;
                height:100%;
                width: 100%;
            }
        }

        &__form{
            width:50%;
            padding: 0px 0 0 160px;
            position: relative;
            overflow-x: hidden;
            display: flex;
            justify-content: center;
            flex-direction: column;

            h2{
                font-size:36px;
                line-height:50px;
                color:#373a4a;
                margin-bottom: 40px;
            }

            &__profile-dv{
                display: flex;

                &--img-dv{
                    height:50px;
                    width: 50px;
                    background-color: rgba(55, 58, 74, 0.1);
                    border-radius: 50%;
                    font-size: 14px;
                    color: #373a4a;
                    font-weight: 600;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 10px;
                }

                &--description{
                    h2{
                        font-size: 18px;
                        line-height:28px;
                        color: #373a4a;
                        font-weight: bold;
                        margin-bottom: 0px;
                    }

                    p{
                        font-size:16px;
                        line-height:24px;
                        color: #373a4a;
                    }
                }
            }

            form{
                width: 50rem;

                .form-container{
                    margin-bottom: 30px;
                }

                p{
                    span{
                        display: inline-block;
                    }
                }
            }

            p{
                font-size: 14px;
                line-height:24px;
                color: #797979;
                margin-bottom: 50px;

                a{
                    text-decoration: underline;
                }
            }

            .btn{
                width: 100%;
            }
        }
    }
`
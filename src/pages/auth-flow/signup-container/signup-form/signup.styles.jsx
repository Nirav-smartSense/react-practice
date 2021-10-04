import styled from "styled-components";
import BgImg from "./../../../../assets/images/verify_email.png";

export const SignupMain = styled.div`
  .singup-container {
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

        &--already-acc{
            position: absolute;
            right:60px;
            top:30px;

            a{
                color:#27aabe;
                font-weight: bold;
                text-decoration: none !important;
            }
        }

        h2{
            font-size:36px;
            line-height:50px;
            color:#373a4a;
            margin-bottom: 40px;
        }

        form{
            width: 50rem;
        }

        p{
            font-size: 14px;
            line-height:24px;
            color: #797979;
            margin-bottom: 20px;

            a{
                text-decoration: underline;
            }
        }

        .btn{
            width: 100%;

            a{
                color: #fff;
            }
        }
    }
  }
`;

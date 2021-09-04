import { Button, Checkbox, Container } from "@material-ui/core";
import * as React from "react";
import Thumb from "./../../assets/svgs/Login/thumb.svg";
import "./styles/index.scss";
/* icon to material-icon */

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import Google from "./../../assets/svgs/Login/google.svg";
import Facebook from "./../../assets/svgs/Login/facebook.svg";
type Props = {};

document.title = "Food-Đăng nhập hoặc đăng ký";

export const SingIn = (props: Props) => {
  return (
    <section className="login">
      <Container maxWidth="lg">
        <div className="login__container">
          <div
            className="login__thumb"
            style={{
              backgroundImage: `url(${Thumb})`,
              objectFit: "cover",
            }}
          ></div>
          <div className="login__content">
            <h2>JOIN WITH US</h2>
            <div className="login__msg">
              <span>Don't have an account?</span>
              <span className="login__msg-btn">
                <strong>Create an account</strong>
              </span>
            </div>
            <form className="form__login">
              {/* username */}
              <div className="login-form-field">
                <label htmlFor="Email address">Email address</label>
                <div className="login-form-field__wrapper">
                  <MailOutlineIcon color="disabled" />
                  <input
                    type="email"
                    id="Email address"
                    placeholder="Your email"
                    name="email"
                  />
                </div>
              </div>
              {/* password */}
              <div className="login-form-field">
                <label htmlFor="Email address">Password</label>
                <div className="login-form-field__wrapper">
                  <LockIcon color="disabled" />
                  <input
                    type="password"
                    id="Password"
                    placeholder="Your password"
                    name="password"
                  />
                </div>
              </div>
              <div className="form-login__commit">
                <Checkbox />
                <span className="form-login__commit-msg">
                  Save your password
                </span>
              </div>

              <button type="submit" className="form-login__btn">
                <Button className="primary-btn red" variant="contained">
                  Log In
                </Button>
              </button>
            </form>
            <div className="login__separate"></div>
            <div className="login__options">
              {/* google */}
              <Button className="login__option login__option--gg">
                <img src={Google} alt="google icon" />
                Log in with Google
              </Button>
              {/* facebook */}
              <Button className="login__option ">
                <img src={Facebook} alt="facebook icon" />
                Log in with Facebook
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

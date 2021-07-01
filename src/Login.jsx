import React, { useState } from "react";
import "./login.css";
import SignInScreen from "./SignInScreen";

const Login = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt="not found"
        />

        <button className="loginScreen__button" onClick={() => setLogin(true)}>
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {login ? (
          <SignInScreen />
        ) : (
          <>
            <h1>
              Unlimited movies, TV shows <br /> and more.
            </h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setLogin(true)}
                >
                  get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import "./login.css";
import SignInScreen from "./SignInScreen";
import { motion } from "framer-motion";

const Login = () => {
  const [login, setLogin] = useState(false);
  const variants1 = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

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
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants1}
              transition={{ duration: 1 }}
            >
              Unlimited movies, TV shows <br /> and more.
            </motion.h1>
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={variants2}
              transition={{ duration: 1 }}
            >
              Watch anywhere. Cancel anytime.
            </motion.h2>
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

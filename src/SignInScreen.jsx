import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { auth } from "./firebase";
import "./signInScreen.css";
import { useHistory } from "react-router-dom";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signInScreen__body">
      <form>
        <h2>Sign In</h2>
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" onClick={signIn}>
          Login
        </Button>
        <h4 className="New_to_Netflix">
          <span className="gray">New to Netflix?</span>
          <span className="singInScreen__singIn" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;

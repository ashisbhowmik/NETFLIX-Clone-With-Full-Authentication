import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import HomeScreen from "./HomeScreen";
import UserProfile from "./UserProfile";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/profile">
            <UserProfile />
          </Route>
        </Switch>
      )}
    </div>
  );
};
export default App;

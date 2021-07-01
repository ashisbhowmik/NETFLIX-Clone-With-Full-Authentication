import React from "react";
import { auth } from "./firebase";
import "./userProfile.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar";

const UserProfile = () => {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const signOut = () => {
    auth.signOut();
    history.push("/login");
  };

  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="not found"
          />
          <div className="profileScreen__details">
            <h2>{user?.email}</h2>

            <div className="profileScreen__plans">
              <h1 className="plan__type">Plans (Curent Plan: premium)</h1>
              <p className="plan__renewal__date">Renewal date: 04/08/2021</p>

              <div className="packages">
                <div className="package__name">
                  <p>
                    Netflix Standard
                    <span className="plan__video__quality">1080p</span>
                  </p>
                </div>
                <div className="subscribe">
                  <button className="plan__subscribe__button">Subscribe</button>
                </div>
              </div>
              <div className="packages">
                <div className="package__name">
                  <p>
                    Netflix Basic
                    <span className="plan__video__quality">480p</span>
                  </p>
                </div>
                <div className="subscribe">
                  <button className="plan__subscribe__button">Subscribe</button>
                </div>
              </div>
              <div className="packages">
                <div className="package__name">
                  <p>
                    Netflix Premium
                    <span className="plan__video__quality">4k+HDR</span>
                  </p>
                </div>
                <div className="subscribe">
                  <button className="plan__subscribe__button plus__memberShip">
                    Current Package
                  </button>
                </div>
              </div>

              <button
                className="profileScreen__plans__signOutButton"
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

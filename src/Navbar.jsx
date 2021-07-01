import React, { useState, useEffect } from "react";
import "./navbar.css";
import { useHistory } from "react-router";
import { useStateValue } from "./StateProvider";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }))(Tooltip);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <>
      <div className={`nav ${show && "nav__black"}`}>
        <img
          onClick={() => history.push("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt="image not found"
          className="nav__logo"
        />
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Check Profile</Typography>
            </React.Fragment>
          }
        >
          <img
            onClick={() => history.push("/profile")}
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Image not found"
          />
        </HtmlTooltip>
      </div>
    </>
  );
};

export default Navbar;

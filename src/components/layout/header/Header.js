import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [signIn, setSignIn] = useState(window.localStorage.getItem("user"));

  const login = () => {
    window.localStorage.setItem("user", true);
    setSignIn(window.localStorage.getItem("user"));
  };

  return (
    <div className="header">
      <div className="header__logo">Teletrader</div>
      <ul className="header__ul">
        <li className="header__li">
          <NavLink exact={true} to="/" activeStyle={{ color: "white" }}>
            Home
          </NavLink>
        </li>
        {signIn && (
          <li className="header__li">
            <NavLink
              exact={true}
              to="/profile"
              activeStyle={{ color: "white" }}
            >
              Profile
            </NavLink>
          </li>
        )}
        {!signIn && (
          <li
            className="header__login"
            style={{ background: "#007afe" }}
            onClick={login}
          >
            Login
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;

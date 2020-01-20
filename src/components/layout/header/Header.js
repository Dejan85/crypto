import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// hooks
import useAuthenticate from "../../hooks/useAutthenticate";

const Header = () => {
  const [signIn, setSignIn] = useState("");
  const { isAuthenticated } = useAuthenticate();

  const login = () => {
    window.localStorage.setItem("user", true);
    setSignIn("success");
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
        {isAuthenticated() && (
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
        {!isAuthenticated() && (
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

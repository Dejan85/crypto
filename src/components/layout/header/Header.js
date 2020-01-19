import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/">Home</Link>
        </li>
        {signIn && (
          <li className="header__li">
            <Link to="/profile">Profile</Link>
          </li>
        )}
        {!signIn && (
          <li
            className="header__li"
            style={{ background: "#007afe" }}
            onClick={login}
          >
            <a href="#">Login</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;

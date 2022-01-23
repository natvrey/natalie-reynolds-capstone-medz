import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  return (
    <Link to="/">
      <header className="header">
        <section className="header__logo-text">
          <h1 className="header__text">
            Medz
            <img className="header__logo" src={logo} alt="app logo" />
          </h1>
        </section>
      </header>
    </Link>
  );
};

export default Header;

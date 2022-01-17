import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <section className="header__logo-text">
        <h1 className="header__text">
          Medz
          <img
            className="header__logo"
            src={logo}
            alt="app logo"
            //   TO DO: declare & then invoke onCLick ftcn
            //   onClick={""}
          />
        </h1>
      </section>
    </header>
  );
};

export default Header;

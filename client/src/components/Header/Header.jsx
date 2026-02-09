import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/medz-logo-blue.png";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isSingleProfile =
    pathname.match(/^\/profiles\/[^/]+$/) && pathname !== "/profiles/create";

  return (
    <header className={`header ${isSingleProfile ? "header--single-profile" : ""}`}>
      <section className="header__logo-wrap">
        <Link to="/" className="header__logo-link" aria-label="Medz+ Home">
          <img className="header__logo" src={logo} alt="Medz+ logo" />
        </Link>
      </section>
    </header>
  );
};

export default Header;
